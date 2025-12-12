import { useRef, useEffect } from "react";
import styles from "./BlurOnMouse.module.css";

export default function BlurOnMouse({ children }) {
  const fogRef = useRef(null);

  useEffect(() => {
    const fog = fogRef.current;

    const move = (e) => {
      fog.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div>
      <div className={styles.fogEffect} ref={fogRef}></div>
      {children}
    </div>
  );
}
