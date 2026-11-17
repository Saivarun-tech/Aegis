/** Basic repository-level release checks. Does not replace a real browser, security or legal audit. */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const text = (path) => readFileSync(join(root, path), 'utf8');
const required = [
  'src/app/page.tsx',
  'src/app/agent/page.tsx',
  'src/app/technology/page.tsx',
  'src/app/about/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/privacy/page.tsx',
  'src/app/terms/page.tsx',
  'src/config/contact.ts',
  'src/config/release.ts',
];
const failures = [];
for (const path of required) if (!existsSync(join(root, path))) failures.push(`Missing ${path}`);
if (!failures.length) {
  const diagram = text('src/components/vfx/custom/connected-systems.tsx');
  const tech = text('src/app/technology/page.tsx');
  const header = text('src/components/layout/site-header.tsx');
  const privacy = text('src/app/privacy/page.tsx');
  const terms = text('src/app/terms/page.tsx');
  if (!diagram.includes('/technology#tools') || !tech.includes('id="tools"')) failures.push('Tools diagram link or Technology anchor missing');
  if (!header.includes('contactHref')) failures.push('Header not using the official contact configuration');
  if (!privacy.includes('Privacy Notice') || !terms.includes('Terms &amp; Conditions')) failures.push('Legal page titles missing');
  if (!text('src/config/release.ts').includes('isReleasePublished')) failures.push('Verified release gate missing');
  if (existsSync(join(root, '.env.local')) || existsSync(join(root, '.env'))) {
    console.log('Check that local .env files are excluded from Git and contain no secrets intended for publication.');
  }
  if (privacy.includes('Draft') || terms.includes('Draft')) {
    console.log('LEGAL REVIEW REQUIRED: Privacy and Terms are still marked as drafts.');
  }
}
if (failures.length) {
  for (const issue of failures) console.error('FAIL:', issue);
  process.exitCode = 1;
} else {
  console.log('PASS: page files, contact wiring, release guard, and diagram destination are present.');
  console.log('NEXT: npm run build; test desktop/mobile; verify policy and hosting disclosures; review external links; deploy preview.');
}
