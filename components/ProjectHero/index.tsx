/* eslint-disable @next/next/no-img-element */
import { gsap, Power2 } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import aboutMeVisible$ from "../../observables/aboutMeVisible$";
import styles from "../../styles/ProjectHero.module.scss";
import NavBar from "../NavBar";

const ProjectHero = () => {
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const projectNavRef = useRef(null);
  const titelRef = useRef(null);
  const subTitleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    aboutMeVisible$.subscribe((status) => {
      setAboutMeVisible(status);
    });
    gsap.to(titelRef.current, {
      css: { width: "0%" },
      duration: 1,
      delay: 1.2,
      ease: Power2.easeInOut,
    });
    gsap.to(subTitleRef.current, {
      css: { width: "0%" },
      duration: 1,
      delay: 1.2,
      ease: Power2.easeInOut,
    });
    gsap.to(descriptionRef.current, {
      css: { opacity: 1, bottom: 0 },
      duration: 1,
      delay: 1.2,
      ease: Power2.easeInOut,
    });
  }, []);

  return (
    <header className={styles.ProjectHero} id={"audiophile"}>
      <img src="/image-hero.webp" alt="project-hero" />
      <div className={styles.ProjectHero__container}>
        <div className={styles.ProjectHero__textContainer}>
          <NavBar type="project" target={projectNavRef} />
          <div>
            <div className={styles.ProjectHero__textContainer__title}>
              <h1>Audiophile e-commerce website</h1>
              <div ref={titelRef} />
            </div>
            <div className={styles.ProjectHero__textContainer__subTitle}>
              <h2>A full stack React and Express application</h2>
              <div ref={subTitleRef} />
            </div>
          </div>
          <div
            className={styles.ProjectHero__projectDescription}
            ref={descriptionRef}
          >
            <p>
              <span>Role</span> Frontend Develoepr
            </p>
            <p>
              <span>Context</span> Frontend Mentor Challenge
            </p>
            <p>
              <span>Period</span> 2022
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProjectHero;
