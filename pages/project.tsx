import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import styles from "../styles/Home.module.scss";
import Footer from "../components/Footer";
import ProjectDescription from "../components/ProjectDescription";
import ProjectHero from "../components/ProjectHero";
import ProjectIntroduction from "../components/ProjectIntroduction";
import Sidebar from "../components/Sidebar";
import aboutMeVisible$ from "../observables/aboutMeVisible$";
import sideBarVisible$ from "../observables/sideBarVisible$";
import PageTransition from "../components/PageTransition";

const Project = () => {
  const router = useRouter();
  const pageRef = useRef(null);
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [sidebarVisibile, setSidebarVisible] = useState(false);

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
      <PageTransition />
      <ProjectHero />
      <ProjectIntroduction />
      <ProjectDescription />
      <Footer />
    </div>
  );
};

export default Project;
