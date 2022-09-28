/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../../styles/ProjectDescription.module.scss";
import { Description } from "../../types/project";

const ProjectDescription = ({
  title,
  subTitle,
  body,
  descriptionImage,
  colors,
  designImage,
  accentColor,
  designArea,
}: Description) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const colorAreaRef = useRef(null);
  const designTitleRef = useRef(null);
  const designImageRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(titleRef.current, {
      css: { top: 0, opacity: 1 },
      duration: 0.8,
      scrollTrigger: descriptionRef.current,
      ease: Power2.easeInOut,
    });
    gsap.to(descriptionRef.current, {
      css: { bottom: 0, opacity: 1 },
      duration: 0.8,
      scrollTrigger: descriptionRef.current,
      ease: Power2.easeInOut,
    });
    gsap.to(colorAreaRef.current, {
      css: { bottom: 0, opacity: 1 },
      delay: 0.3,
      duration: 0.8,
      scrollTrigger: colorAreaRef.current,
      ease: Power2.easeInOut,
    });
    gsap.to(designTitleRef.current, {
      css: { top: 0, opacity: 1 },
      duration: 0.8,
      scrollTrigger: designImageRef.current,
      ease: Power2.easeInOut,
    });
    gsap.to(designImageRef.current, {
      css: { bottom: 0, opacity: 1 },
      duration: 0.8,
      scrollTrigger: designImageRef.current,
      ease: Power2.easeInOut,
    });
  }, []);

  const createMarkup = () => {
    return { __html: body };
  };

  const renderColors = () => {
    return colors.map((color, index) => {
      return (
        <div className={styles.ProjectDescription__color} key={index}>
          <div
            className={styles.ProjectDescription__color__black}
            style={{ backgroundColor: color.color }}
          />
          <p>${`${color.name}`}</p>
        </div>
      );
    });
  };

  return (
    <section className={styles.ProjectDescription}>
      <div className={styles.ProjectDescription__container}>
        <div className={styles.ProjectDescription__title} ref={titleRef}>
          <h3>{title}</h3>
          <h2 style={{ color: accentColor }}>Description & Design</h2>
        </div>
        <div
          className={styles.ProjectDescription__description}
          ref={descriptionRef}
        >
          <div className={styles.ProjectDescription__textContainer}>
            <h3>{subTitle}</h3>
            <div className={styles.ProjectDescription__textContainer__border} />
            <div dangerouslySetInnerHTML={createMarkup()} />
          </div>
          <div className={styles.ProjectDescription__description__image}>
            <img src={descriptionImage} alt="audiophile" />
          </div>
        </div>
        <div
          className={styles.ProjectDescription__colorContainer}
          ref={colorAreaRef}
        >
          {renderColors()}
        </div>
        {designArea && (
          <div className={styles.ProjectDescription__designArea}>
            <div
              className={styles.ProjectDescription__designArea__titleArea}
              ref={designTitleRef}
            >
              <h3>UI & Components</h3>
              <h2 style={{ color: accentColor }}>Design</h2>
            </div>
            <div
              className={styles.ProjectDescription__designArea__image}
              ref={designImageRef}
            >
              <img src={designImage} alt={"audiophile design"} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDescription;
