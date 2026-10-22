'use client';

import React, { useEffect, useRef, useState } from 'react';

type RevealTag = 'div' | 'li' | 'article';

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  as?: RevealTag;
  delay?: number;
}

/**
 * Fades content in as it scrolls into view. The server renders it visible, and it is only
 * hidden after mount when it starts below the fold, so it never depends on JavaScript to show.
 */
export default function Reveal({ as = 'div', delay = 0, style, children, ...props }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<'static' | 'hidden' | 'shown'>('static');

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (element.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    setState('hidden');
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setState('shown');
      observer.disconnect();
    }, { rootMargin: '0px 0px -8% 0px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return React.createElement(as, {
    ...props,
    ref,
    'data-reveal': state,
    style: { ...style, '--reveal-delay': `${delay}ms` } as React.CSSProperties
  }, children);
}
