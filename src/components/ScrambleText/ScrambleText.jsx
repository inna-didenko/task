import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/all";
import { useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrambleTextPlugin);

export default function ScrambleText({ text }) {
  const ref = useRef(null);
  const [fixedWidth, setFixedWidth] = useState(null);

  useEffect(() => {
    const span = ref.current;
    if (!span) return;

    const width = span.offsetWidth;
    setFixedWidth(width);
  }, []);

  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleHover = () => {
      gsap.to(el, {
        duration: 1.2,
        scrambleText: {
          text,
          chars: text,
          speed: 0.5,
          revealDelay: 0.1,
        },
        ease: "power2.out",
      });
    };

    el.addEventListener("mouseenter", handleHover);
    return () => el.removeEventListener("mouseenter", handleHover);
  }, [text]);

  return (
    <span
      ref={ref}
      style={{
        display: "inline-block",
        width: fixedWidth ? fixedWidth + "px" : "auto",
      }}
    >
      {text}
    </span>
  );
}
