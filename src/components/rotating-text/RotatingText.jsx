import { useState, useEffect } from "react";

export default function RotatingText() {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrases = [
      "Content Writer",
      "News Writer",
      "Content Editor",
      "Web Developer",
    ];
    const currentPhrase = phrases[wordIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
      } else {
        setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
      }

      if (!isDeleting && displayedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 3500);
      }

      if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % phrases.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex]);

  return <span className="text-aurora-nord13">{displayedText}</span>;
}
