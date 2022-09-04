/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../../styles/ProjectDescription.module.scss";
import Image from "next/image";
import Link from "next/link";

const ProjectDescription = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const colorAreaRef = useRef(null);
  const designTitleRef = useRef(null);
  const designImageRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(titleRef.current, {
      css: { top: 0, opacity: 1 },
      duration: 0.2,
      scrollTrigger: descriptionRef.current,
    });
    gsap.to(descriptionRef.current, {
      css: { bottom: 0, opacity: 1 },
      duration: 0.2,
      scrollTrigger: descriptionRef.current,
    });
    gsap.to(colorAreaRef.current, {
      css: { bottom: 0, opacity: 1 },
      delay: 0.5,
      duration: 0.5,
      scrollTrigger: colorAreaRef.current,
    });
    gsap.to(designTitleRef.current, {
      css: { top: 0, opacity: 1 },
      duration: 0.2,
      scrollTrigger: designImageRef.current,
    });
    gsap.to(designImageRef.current, {
      css: { bottom: 0, opacity: 1 },
      duration: 0.2,
      scrollTrigger: designImageRef.current,
    });
  }, []);

  return (
    <section className={styles.ProjectDescription}>
      <div className={styles.ProjectDescription__container}>
        <div className={styles.ProjectDescription__title} ref={titleRef}>
          <h3>Audiophile</h3>
          <h2>Description & Design</h2>
        </div>
        <div
          className={styles.ProjectDescription__description}
          ref={descriptionRef}
        >
          <div className={styles.ProjectDescription__textContainer}>
            <h3>The power of sound.</h3>
            <div className={styles.ProjectDescription__textContainer__border} />
            <p>
              An incredible project from
              <Link href={"wwww.frontendmentors.com"}> Frontendmentors</Link>,
              who provided all the figma designs and assets. I used this project
              to practice my ability to translate designs into pixel perfect
              websites that are viewable on all devices.
              <br />
              <br />
              One of the really exciting parts of this project was making it a
              full stack application using a <span>Express</span> server and{" "}
              <span></span> database, I also used <span>Styled Components</span>{" "}
              as my main styling tool for the first time on any of my projects.
            </p>
          </div>
          <div className={styles.ProjectDescription__description__image}>
            <img src="/audiophile-description.png" alt="audiophile" />
          </div>
        </div>
        <div
          className={styles.ProjectDescription__colorContainer}
          ref={colorAreaRef}
        >
          <div className={styles.ProjectDescription__color}>
            <div className={styles.ProjectDescription__color__orange} />
            <p>$orange</p>
          </div>
          <div className={styles.ProjectDescription__color}>
            <div className={styles.ProjectDescription__color__fadedOrange} />
            <p>$faded-orange</p>
          </div>
          <div className={styles.ProjectDescription__color}>
            <div className={styles.ProjectDescription__color__black} />
            <p>$black</p>
          </div>
          <div className={styles.ProjectDescription__color}>
            <div className={styles.ProjectDescription__color__grey} />
            <p>$grey</p>
          </div>
          <div className={styles.ProjectDescription__color}>
            <div className={styles.ProjectDescription__color__white} />
            <p>$white</p>
          </div>
        </div>
        <div className={styles.ProjectDescription__designArea}>
          <div
            className={styles.ProjectDescription__designArea__titleArea}
            ref={designTitleRef}
          >
            <h3>UI & Components</h3>
            <h2>Design</h2>
          </div>
          <div
            className={styles.ProjectDescription__designArea__image}
            ref={designImageRef}
          >
            <img
              src={"/audiophile-design.png"}
              alt={"audiophile design"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
