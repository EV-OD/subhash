
"use client";

import { useState, useLayoutEffect,useEffect, useRef } from "react";

interface UseElementAlignmentProps {
  targetSelector: string;
}

export function useElementAlignment({ targetSelector }: UseElementAlignmentProps) {
  const [alignmentStyle, setAlignmentStyle] = useState<React.CSSProperties>({
    opacity: 0,
  });
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateAlignment = () => {
      const targetElement = document.querySelector(targetSelector);
      
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        setAlignmentStyle({
          paddingLeft: `${rect.left + 10}px`,
          paddingRight: `${rect.left}px`,
          opacity: 1,
          transition: 'padding-left 0.4s ease-out, opacity 0.4s ease-out',
        });
      }
    };

    // Delay calculation slightly to ensure target is rendered
    // const timeoutId = setTimeout(calculateAlignment, 0);
    calculateAlignment()

    const resizeObserver = new ResizeObserver(calculateAlignment);
    const bodyElement = document.body;
    resizeObserver.observe(bodyElement);

    return () => {
      // clearTimeout(timeoutId);
      resizeObserver.unobserve(bodyElement);
    }
  }, [targetSelector]);

  return { alignmentStyle, targetRef };
}
