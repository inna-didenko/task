import  { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AnimatedReveal.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedReveal({ title = "", img = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          ref.current,
          {
            WebkitMaskSize: "5% 5%",
            maskSize: "5% 5%",
          },
          {
            WebkitMaskSize: "400% 320%",
            maskSize: "400% 320%",
            ease: "power3.out",
            duration: img ? 6 : 9,
          }
        );
      },
    });
  }, [img]);

  return (
    <>
      {title && (
        <h1 ref={ref} className={styles.heroTitle}>
          {title}
        </h1>
      )}

      {img && (
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img ref={ref} src={img} alt="image" className={styles.heroImg} />
      )}
    </>
  );
}
