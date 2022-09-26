/* eslint-disable @next/next/no-img-element */
import NavBar from "../NavBar";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { useEffect, useMemo, useRef, useState } from "react";
import { gsap, Power2, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "../../styles/Header.module.scss";
import Background from "../Background";
import Sidebar from "../Sidebar";
import { useRouter } from "next/router";
import aboutMeVisible$ from "../../observables/aboutMeVisible$";

const Header = (): JSX.Element => {
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const iconsRef = useRef(null);
  const textContainer = useRef(null);
  const titleCardRef = useRef(null);
  const subTitleCardRef = useRef(null);
  const buttonRef = useRef(null);
  const buttonIconRef = useRef(null);
  const arrowIconRef = useRef(null);
  const navRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    aboutMeVisible$.subscribe((status) => {
      setAboutMeVisible(status);
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(textContainer.current, {
      css: { top: 0, opacity: 1 },
      duration: 0.8,
      delay: 1.1,
      ease: Power4.easeInOut,
    });

    gsap.to(iconsRef.current, {
      css: { right: "2rem", opacity: 1 },
      duration: 0.8,
      delay: 1.1,
      ease: Power2.easeInOut,
    });
  }, []);

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
    aboutMeVisible$.next(true);
  };

  const navigateTo = () => {
    router.push("/#projects");
  };

  return (
    <header className={styles.Header}>
      <Sidebar />
      <div className={styles.Header__background}>
        <Background height={1080} width={1920} />
      </div>
      <NavBar type="home" target={navRef} />
      <div className={styles.Header__wrapper} ref={textContainer}>
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
      <div className={styles.Header__links} ref={iconsRef}>
        <FaTwitter className={styles.Header__links__twitter} />
        <FaLinkedinIn className={styles.Header__links__linkedin} />
        <FaGithub className={styles.Header__links__github} />
        <SiUpwork className={styles.Header__links__upwork} />
      </div>
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
