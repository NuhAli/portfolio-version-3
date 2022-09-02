/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../../styles/ProjectIntroduction.module.scss";

const ProjectIntroduction = () => {
  return (
    <div className={styles.ProjectIntroduction}>
      <div className={styles.ProjectIntroduction__textContainer}>
        <img src="/pattern-circles.svg" alt="project-svg" />
        <h3>Introduction</h3>
        <p>
          A self-sufficient settlement, where you can spend your time with no
          hurry or constraint. Tourists, who nowadays are more and more desirous
          to discover landscapes, scents and natural flavours, find in La
          Francesca the ideal place for a stay in all seasons.
        </p>
        <div className={styles.ProjectIntroduction__buttonContainer}>
            <button>See Website</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectIntroduction;
