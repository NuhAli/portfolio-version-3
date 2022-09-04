import React, { useRef } from "react";
import styles from "../../styles/Projects.module.scss";
import Project from "../Project";

const Projects = () => {
  const containerRef = useRef();
  return (
    <main className={styles.Main} id="projects">
      <div className={styles.Main__container}>
        <div className={styles.Main__textContainer}>
            <h3>My Latest Projects</h3>
        </div>
        <div className={styles.Main__borderMiddle}/>
        <Project />
      </div>
    </main>
  );
};

export default Projects;
