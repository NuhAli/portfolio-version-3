/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/ProjectDescription.module.scss";
import Image from "next/image";
import Link from "next/link";

const ProjectDescription = () => {
  return (
    <section className={styles.ProjectDescription}>
      <div className={styles.ProjectDescription__container}>
        <div className={styles.ProjectDescription__title}>
          <h3>Audiophile</h3>
          <h2>Description & Design</h2>
        </div>
        <div className={styles.ProjectDescription__description}>
          <div className={styles.ProjectDescription__textContainer}>
            <h3>The power of sound.</h3>
            <div className={styles.ProjectDescription__textContainer__border} />
            <p>
              An incredible frontend project from{" "}
              <Link href={"wwww.frontendmentors.com"}>Frontendmentors</Link>,
              who provided all the figma designs and assets. This project
              allowed me to test my ability to translate designs into pixel
              perfect websites that are viewable on all devices.
              <br />
              <br />
              One of the really exciting parts of this project was making it a
              full stack application using a <span>Express</span> server and{" "}
              <span></span> database, I also used <span>Styled Components</span>{" "}
              as my main styling tool for the first time on any of my projects.
            </p>
          </div>
          <Image
            src={"/audiophile-description.png"}
            alt="project-description-image"
            height={550}
            width={650}
          />
        </div>
        <div className={styles.ProjectDescription__colorContainer}>
          <div className={styles.ProjectDescription__color}>
            <div className={styles.ProjectDescription__color__orange} />
            <p>$ebony</p>
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
          <div className={styles.ProjectDescription__color}>
            <div className={styles.ProjectDescription__color__fadedOrange} />
            <p>$faded-orange</p>
          </div>
        </div>
        <div className={styles.ProjectDescription__designArea}>
          <div className={styles.ProjectDescription__designArea__titleArea}>
            <h3>UI & Components</h3>
            <h2>Design</h2>
          </div>
          <div className={styles.ProjectDescription__designArea__image}>
            <Image
              src={"/audiophile-design.png"}
              height={800}
              width={1000}
              alt={"audiophile design"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
