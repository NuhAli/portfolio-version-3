import React, { useEffect, useState } from "react";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import ProjectDescription from "../components/ProjectDescription";
import ProjectHero from "../components/ProjectHero";
import ProjectIntroduction from "../components/ProjectIntroduction";
import Sidebar from "../components/Sidebar";
import aboutMeVisible$ from "../observables/aboutMeVisible$";
import sideBarVisible$ from "../observables/sideBarVisible$";

const Project = () => {
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [sidebarVisibile, setSidebarVisible] = useState(false);

  useEffect(() => {
    aboutMeVisible$.subscribe((status) => {
      setAboutMeVisible(status);
    });
    sideBarVisible$.subscribe((status) => {
      setSidebarVisible(status);
    });
  }, []);

  return (
    <>
      {aboutMeVisible && <AboutMe />}
      <Sidebar />
      <ProjectHero />
      <ProjectIntroduction />
      <ProjectDescription />
      <Footer />
    </>
  );
};

export default Project;
