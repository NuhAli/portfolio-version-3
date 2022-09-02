/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/ProjectHero.module.scss";
import NavBar from "../NavBar";

const ProjectHero = () => {
  return (
    <header className={styles.ProjectHero}>
      <img src="/image-hero.webp" alt="project-hero" />
      <div className={styles.ProjectHero__container}>
        <NavBar type="project" />
        <div className={styles.ProjectHero__textContainer}>
          <div>
            <h1>Audiophile e-commerce website</h1>
            <h2>A full stack React and Express application</h2>
          </div>
          <div className={styles.ProjectHero__projectDescription}>
            <p>
              <span>Role</span> Frontend Develoepr/Backend Developer
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
