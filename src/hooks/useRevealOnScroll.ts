import { useEffect } from 'react';

const REVEAL_SELECTOR = '[data-reveal]';
const REVEALED_CLASS = 'is-revealed';
const FALLBACK_MS = 4000;

function revealElement(el: Element) {
  el.classList.add(REVEALED_CLASS);
}

/**
 * Observes all [data-reveal] elements with a single IntersectionObserver.
 * Adds .is-revealed once when they enter the viewport, then unobserves.
 * Does not store observed state in React, so it does not re-render on scroll.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    if (elements.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      elements.forEach(revealElement);
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          revealElement(entry.target);
          obs.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -6% 0px',
      },
    );

    elements.forEach((el) => observer.observe(el));

    const fallbackId = window.setTimeout(() => {
      elements.forEach((el) => {
        revealElement(el);
        observer.unobserve(el);
      });
    }, FALLBACK_MS);

    return () => {
      window.clearTimeout(fallbackId);
      observer.disconnect();
    };
  }, []);
}
