"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

export function Typewriter({
  words,
  className,
}: {
  words: string[];
  className?: string;
}) {
  const reduced = useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;

    const current = words[index] ?? "";
    const delay = deleting ? 25 : count === current.length ? 2200 : 70;

    const id = window.setTimeout(() => {
      if (!deleting) {
        if (count === current.length) {
          setDeleting(true);
          return;
        }
        setCount((value) => value + 1);
        return;
      }

      if (count === 0) {
        setDeleting(false);
        setIndex((value) => (value + 1) % words.length);
        return;
      }
      setCount((value) => value - 1);
    }, delay);

    return () => window.clearTimeout(id);
  }, [count, deleting, index, reduced, words]);

  const text = reduced ? (words[0] ?? "") : (words[index] ?? "").slice(0, count);

  return (
    <span className={className}>
      {text}
      {reduced ? null : (
        <span
          className="ml-1 inline-block h-[1em] w-[2.5px] translate-y-0.5 rounded-sm bg-cyan align-text-bottom"
          aria-hidden
        />
      )}
    </span>
  );
}

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}
