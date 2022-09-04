/* eslint-disable @next/next/no-img-element */
import { HiArrowNarrowRight } from "react-icons/hi";
import NavBar from "../NavBar";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { useEffect, useMemo, useRef, useState } from "react";
import { gsap, Power2 } from "gsap";
import styles from "../../styles/Header.module.scss";
import Background from "../Background";
import Sidebar from "../Sidebar";
import AboutMe from "../AboutMe";
import aboutMeVisible$ from "../../observables/aboutMeVisible$";
import Link from "next/link";
import { useRouter } from 'next/router';

const Header = (): JSX.Element => {
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const timeline = useMemo(() => gsap.timeline({ paused: true }), []);
  const iconsRef = useRef(null);
  const titleCardRef = useRef(null);
  const subTitleCardRef = useRef(null);
  const buttonRef = useRef(null);
  const buttonIconRef = useRef(null);
  const arrowIconRef = useRef(null);
  const navRef = useRef(null);

  const router = useRouter()

  useEffect(() => {
    aboutMeVisible$.subscribe((status) => {
      setAboutMeVisible(aboutMeVisible);
    });
    gsap.to(titleCardRef.current, {
      css: { width: "0%" },
      duration: 0.8,
      ease: Power2.easeInOut,
    });
    gsap.to(subTitleCardRef.current, {
      css: { width: "0%" },
      duration: 0.8,
      delay: 0.1,
      ease: Power2.easeInOut,
    });
    gsap.to(buttonRef.current, {
      css: { width: "0%" },
      duration: 0.8,
      delay: 0.2,
      ease: Power2.easeInOut,
    });
    gsap.to(iconsRef.current, {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: Power2.easeInOut,
    });
  }, []);

  useEffect(() => {
    if (!aboutMeVisible) {
      gsap.to(titleCardRef.current, {
        css: { width: "0%" },
        duration: 0.8,
        ease: Power2.easeInOut,
      });
      gsap.to(subTitleCardRef.current, {
        css: { width: "0%" },
        duration: 0.8,
        delay: 0.1,
        ease: Power2.easeInOut,
      });
      gsap.to(buttonRef.current, {
        css: { width: "0%" },
        duration: 0.8,
        delay: 0.2,
        ease: Power2.easeInOut,
      });
      gsap.to(iconsRef.current, {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: Power2.easeInOut,
      });
    }
  }, [aboutMeVisible]);

  const bottomArrowMouseOver = () => {
    gsap.to(arrowIconRef.current, {
      css: { bottom: 0, scaleY: 1 },
      duration: 0.3,
      ease: Power2.easeInOut,
    });
  };

  const bottomArrowMouseOut = () => {
    gsap.to(arrowIconRef.current, {
      css: { bottom: -30, scaleY: 5 },
      duration: 0.3,
      ease: Power2.easeInOut,
    });
  };

  const openAboutMe = () => {
    setAboutMeVisible(true);
  };

  const navigateTo = () => {
    router.push("/#projects")
  }

  return (
    <header className={styles.Header}>
      {aboutMeVisible && <AboutMe />}
      <Sidebar />
      <div className={styles.Header__background}>
        <Background height={1080} width={1920} />
      </div>
      {!aboutMeVisible && <NavBar type="home" target={navRef} />}
      <div className={styles.Header__wrapper}>
        <div className={styles.Header__title}>
          <div className={styles.innerCard} ref={titleCardRef} />
          <h1>Nuh Mohamed Ali</h1>
        </div>
        <div className={styles.Header__subTitle}>
          <div className={styles.innerCard} ref={subTitleCardRef} />
          <h3>Frontend Engineer</h3>
        </div>
        <div className={styles.Header__button}>
          <div className={styles.innerCard} ref={buttonRef} />
          <button onClick={openAboutMe}>About me</button>
        </div>
      </div>
      {!aboutMeVisible && (
        <div className={styles.Header__links} ref={iconsRef}>
          <FaTwitter className={styles.Header__links__twitter} />
          <FaLinkedinIn className={styles.Header__links__linkedin} />
          <FaGithub className={styles.Header__links__github} />
          <SiUpwork className={styles.Header__links__upwork} />
        </div>
      )}
      <div
        className={styles.Header__container}
        onMouseEnter={bottomArrowMouseOver}
        onMouseLeave={bottomArrowMouseOut}
        onClick={navigateTo}
      />
      
        <img
          src={"/arrow-down.svg"}
          alt={"arrow pointing down"}
          ref={arrowIconRef}
          className={styles.Header__arrowDown}
        />
    </header>
  );
};

export default Header;
function useNavigation() {
  throw new Error("Function not implemented.");
}

