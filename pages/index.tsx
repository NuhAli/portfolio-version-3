import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/Home.module.scss";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Head from "next/head";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import aboutMeVisible$ from "../observables/aboutMeVisible$";
import AboutMe from "../components/AboutMe";
import sideBarVisible$ from "../observables/sideBarVisible$";
import Sidebar from "../components/Sidebar";
import PageTransition from "../components/PageTransition";

const Home: NextPage = () => {
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [sidebarVisibile, setSidebarVisible] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    aboutMeVisible$.subscribe((status) => {
      setAboutMeVisible(status);
    });
    sideBarVisible$.subscribe((status) => {
      setSidebarVisible(status);
    });

    setSidebarVisible(false)
    gsap.to(pageRef.current, { duration: 0, css: { visibility: "visible" } });
  }, []);

  return (
    <div className={styles.container} ref={pageRef}>
      <Head>
        <title>Nuh Mohamed Ali | Portfolio v3</title>
      </Head>
      <Header />
      <PageTransition />
      <Sidebar />
      <Projects />
      <Footer backgroundColor={"#1d1a2d"}/>
    </div>
  );
};

export default Home;
