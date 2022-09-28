import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import styles from "../../styles/Home.module.scss";
import Footer from "../../components/Footer";
import ProjectDescription from "../../components/ProjectDescription";
import ProjectHero from "../../components/ProjectHero";
import ProjectIntroduction from "../../components/ProjectIntroduction";
import Sidebar from "../../components/Sidebar";
import aboutMeVisible$ from "../../observables/aboutMeVisible$";
import sideBarVisible$ from "../../observables/sideBarVisible$";
import PageTransition from "../../components/PageTransition";
import { data } from "../../components/Projects/projectsData";
import { GetStaticPaths, GetStaticProps } from "next";
import { ProjectType } from "../../types/project";

interface IProjectPageProps {
  project: ProjectType;
}

const Project = ({ project }: IProjectPageProps) => {
  const router = useRouter();
  const pageRef = useRef(null);
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [sidebarVisibile, setSidebarVisible] = useState(false);

  const { introduction, description } = project;
  const accentColor = description.colors[0].color;

  useEffect(() => {
    aboutMeVisible$.subscribe((status) => {
      setAboutMeVisible(status);
    });
    sideBarVisible$.subscribe((status) => {
      setSidebarVisible(status);
    });
    gsap.to(pageRef.current, { duration: 0, css: { visibility: "visible" } });
  }, []);

  return (
    <div className={styles.Container}>
      <Sidebar />
      <PageTransition backgroundColor={project.backgroundColor} />
      <ProjectHero
        title={project.title}
        subTitle={project.subTitle}
        projectImage={project.projectImage}
        role={project.role}
        context={project.context}
        period={project.period}
        backgroundColor={project.backgroundColor}
      />
      <ProjectIntroduction
        description={introduction.description}
        projectLink={introduction.projectLink}
        svgImage={introduction.svgImage}
        color={accentColor}
      />
      <ProjectDescription
        title={description.title}
        subTitle={description.subTitle}
        body={description.body}
        descriptionImage={description.descriptionImage}
        colors={description.colors}
        designImage={description.designImage}
        accentColor={accentColor}
        designArea={description.designArea}
      />
      <Footer backgroundColor={accentColor} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const project = data.find(
    (item) => item.id.toString() === params?.id?.toString()
  );
  return {
    props: { project }, // will be passed to the page component as props
  };
};

export async function getStaticPaths() {
  const paths = data.map((item) => ({ params: { id: item.id.toString() } }));
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

export default Project;
