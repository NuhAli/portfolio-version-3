import React, { useEffect, useRef } from "react";
import styles from "../../styles/Projects.module.scss";
import { ProjectType } from "../../types/project";
import Project from "../Project";
import {data} from "./projectsData"

const Projects = () => {

  const containerRef = useRef();

  const renderProjects = () => {
    return data.map((project,index) => {
      return <Project key={index} data={project as unknown as ProjectType} />
    })
  }

  return (
    <main className={styles.Main} id="projects">
      <div className={styles.Main__container}>
        <div className={styles.Main__textContainer}>
            <h3>My Latest Projects</h3>
        </div>
        <div className={styles.Main__borderMiddle}/>
        {renderProjects()}
      </div>
    </main>
  );
};

export default Projects;
