/* eslint-disable @next/next/no-img-element */
import { gsap, Power2 } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import aboutMeVisible$ from "../../observables/aboutMeVisible$";
import styles from "../../styles/ProjectHero.module.scss";
import NavBar from "../NavBar";

interface IProjectHero {
  title: string;
  subTitle: string;
  projectImage: string;
  role: string;
  context: string;
  period: string;
  backgroundColor: string;
}

const ProjectHero = ({
  title,
  subTitle,
  projectImage,
  role,
  context,
  period,
  backgroundColor,
}: IProjectHero) => {
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
    <header className={styles.ProjectHero} id={"top"}>
      <div className={styles.ProjectHero__container}>
        <div className={styles.ProjectHero__textContainer}>
          <NavBar type="project" target={projectNavRef} accentColor={backgroundColor} />
          <div>
            <div className={styles.ProjectHero__textContainer__title}>
              <h1>{title}</h1>
              <div ref={titelRef} style={{ backgroundColor }} />
            </div>
            <div className={styles.ProjectHero__textContainer__subTitle}>
              <h2>{subTitle}</h2>
              <div ref={subTitleRef} style={{ backgroundColor }} />
            </div>
          </div>
          <div
            className={styles.ProjectHero__projectDescription}
            ref={descriptionRef}
          >
            <p>
              <span style={{ color: backgroundColor }}>Role</span> {role}
            </p>
            <p>
              <span style={{ color: backgroundColor }}>Context</span> {context}
            </p>
            <p>
              <span style={{ color: backgroundColor }}>Period</span> {period}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProjectHero;
