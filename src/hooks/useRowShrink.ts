import { useEffect, useRef, useState } from 'react';

/**
 * Drives a single scroll-linked "pin then shrink" effect for one row/section,
 * so a following row can slide up over it (see the fusionai.framer.website
 * reference). Kept separate from per-card stacking so a whole grid row
 * (unchanged internally) can be the thing that shrinks.
 *
 * Also measures the sticky content's real rendered height (it may be taller
 * or shorter than 100vh depending on how much is in the row) so the wrapper
 * height and the following row's cover offset can match it exactly instead
 * of assuming a fixed viewport height.
 */
export function useRowShrink(extraPx = 420) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const ro = new ResizeObserver(([entry]) => {
      setContentHeight(entry.contentRect.height);
    });
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let raf = 0;

    const measure = () => {
      raf = 0;
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top > 0) {
        setScale(1);
        return;
      }
      const progress = Math.min(1, Math.max(0, -rect.top / extraPx));
      setScale(1 - progress * 0.4);
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(measure);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    measure();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [extraPx]);

  return { wrapperRef, contentRef, scale, contentHeight, extraPx };
}
