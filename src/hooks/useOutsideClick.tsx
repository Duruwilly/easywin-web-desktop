import { useEffect, useRef } from "react";

export const useOutsideClick = <T extends HTMLElement = HTMLDivElement>(
  callback: () => void
) => {
  const rootRef = useRef<T | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (rootRef.current && !rootRef.current.contains(target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return rootRef as React.RefObject<T>;
};
