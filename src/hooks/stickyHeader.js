import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the page has been scrolled past a threshold
 * @param {number} threshold - The scroll position threshold (default: 0)
 * @returns {boolean} - True if scrolled past the threshold
 */
export function useIsScrolled(threshold = 0) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
