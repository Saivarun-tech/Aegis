"use client";

import { useEffect, useRef } from "react";

/**
 * Decorative desktop-only cursor halo. Does not replace the system pointer.
 * No continuous animation loop: transforms are updated only when the pointer moves.
 */
export function CursorAura() {
  const aura = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const element = aura.current;
    if (!element) return;
    let frame = 0;
    let x = 0;
    let y = 0;
    let active = false;

    const update = () => {
      element.style.transform = `translate3d(${x - 11}px, ${y - 11}px, 0)`;
      element.dataset.active = active ? "true" : "false";
      frame = 0;
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      x = event.clientX;
      y = event.clientY;
      element.dataset.visible = "true";
      const target = event.target;
      active = target instanceof Element && Boolean(target.closest("a, button, summary"));
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    const hide = () => { element.dataset.visible = "false"; };
    const onOut = (event: PointerEvent) => { if (!event.relatedTarget) hide(); };

    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerout", onOut, { passive: true });
    window.addEventListener("blur", hide);
    return () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerout", onOut);
      window.removeEventListener("blur", hide);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="cursor-aura" ref={aura} aria-hidden="true" data-visible="false" />;
}
