/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../../styles/ProjectIntroduction.module.scss";

const ProjectIntroduction = () => {
  const titleRef = useRef(null)
  const subTitleRef = useRef(null)
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
    <div className={styles.ProjectIntroduction}>
      <div className={styles.ProjectIntroduction__textContainer}>
        <img src="/pattern-circles.svg" alt="project-svg" />
        <div className={styles.ProjectIntroduction__textContainer__title}>
          <p>Introduction</p>
          <div className={styles.ProjectIntroduction__textContainer__title__overCard} ref={titleRef} />
        </div>
        <div className={styles.ProjectIntroduction__textContainer__description}>
          <p>A self-sufficient settlement, where you can spend your time with no
          hurry or constraint. Tourists, who nowadays are more and more desirous
          to discover landscapes, scents and natural flavours, find in La
          Francesca the ideal place for a stay in all seasons.</p>
          <div className={styles.ProjectIntroduction__textContainer__title__overCard} ref={subTitleRef} />
        </div>
        <div className={styles.ProjectIntroduction__buttonContainer}>
          <button ref={buttonRef}>See Website</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectIntroduction;
