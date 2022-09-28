/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../../styles/ProjectIntroduction.module.scss";
import { Introduction } from "../../types/project";
import Link from "next/link";

const ProjectIntroduction = ({
  description,
  projectLink,
  svgImage,
  color,
}: Introduction) => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(titleRef.current, {
      css: { width: "0%" },
      duration: 0.8,
      scrollTrigger: buttonRef.current,
      ease: Power2.easeInOut,
    });
    gsap.to(subTitleRef.current, {
      css: { width: "0%" },
      delay: 0.1,
      duration: 0.8,
      scrollTrigger: buttonRef.current,
      ease: Power2.easeInOut,
    });
    gsap.to(buttonRef.current, {
      css: { opacity: 1 },
      scrollTrigger: buttonRef.current,
      delay: 0.7,
      duration: 0.2,
    });
  }, []);

  return (
    <div
      className={styles.ProjectIntroduction}
      style={{ backgroundColor: color }}
    >
      <div className={styles.ProjectIntroduction__textContainer}>
        <img src={svgImage} alt="project-svg" />
        <div className={styles.ProjectIntroduction__textContainer__title}>
          <p>Introduction</p>
          <div
            className={
              styles.ProjectIntroduction__textContainer__title__overCard
            }
            ref={titleRef}
            style={{ backgroundColor: color }}
          />
        </div>
        <div className={styles.ProjectIntroduction__textContainer__description}>
          <p>{description}</p>
          <div
            className={
              styles.ProjectIntroduction__textContainer__title__overCard
            }
            ref={subTitleRef}
            style={{ backgroundColor: color }}
          />
        </div>
        <div className={styles.ProjectIntroduction__buttonContainer}>
          <Link href={projectLink}>
            <button ref={buttonRef}>See Website</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectIntroduction;
