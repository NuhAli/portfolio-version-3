import { gsap, Power2 } from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import styles from "../../styles/ProjectNavigation.module.scss";
import { INavigationProps } from "../../types/navigation";

export const ProjectNavigation = ({
  type,
  title,
  accentColor,
  link,
}: INavigationProps) => {
  const bottomCard = useRef(null);
  const topCard = useRef(null);
  const text = useRef(null);
  const heading = useRef(null);
  const icon = useRef(null);

  const mouseLeave = () => {
    gsap.to(bottomCard.current, {
      css: { top: "-100%" },
      duration: 0.3,
    });
    gsap.to(topCard.current, {
      css: { top: "-100%" },
      duration: 0.3,
    });
    gsap.to(text.current, {
      css: { color: "rgba(21, 21, 21, 0.6)" },
      duration: 0.3,
    });
    gsap.to(heading.current, {
      css: {
        color: "black",
        textDecorationColor: accentColor,
        textDecoration: "underline",
      },
      duration: 0.3,
    });
    gsap.to(icon.current, {
      css: { color: "black" },
      duration: 0.3,
    });
  };

  const mouseEnter = () => {
    gsap.to(bottomCard.current, {
      css: { top: 0 },
      duration: 0.3,
    });
    gsap.to(topCard.current, {
      css: { top: 0 },
      duration: 0.3,
      delay: 0.1,
    });
    gsap.to(text.current, {
      css: { color: "white" },
      duration: 0.3,
    });
    gsap.to(heading.current, {
      css: { color: "white", textDecoration: "none" },
      duration: 0.3,
    });
    gsap.to(icon.current, {
      css: { fill: "white" },
      duration: 0.3,
    });
  };

  return (
    <Link href={link}>
      <section
        className={styles.Navigation}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <div className={styles.Navigation__hoverCard} ref={bottomCard} />
        <div
          className={styles.Navigation__hoverCardTop}
          ref={topCard}
          style={{ backgroundColor: accentColor }}
        />
        <div className={styles.Navigation__container}>
          <div className={styles.Navigation__textContainer}>
            <p ref={text}>
              {type === "next" ? "Next Project" : "Previous Project"}
            </p>
            <h3 ref={heading} style={{ textDecorationColor: accentColor }}>
              {title}
            </h3>
          </div>
          <span ref={icon}>
            {type === "next" ? <HiArrowRight /> : <HiArrowLeft />}
          </span>
        </div>
      </section>
    </Link>
  );
};
