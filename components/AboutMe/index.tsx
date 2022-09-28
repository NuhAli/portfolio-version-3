import React, { useEffect, useRef, useState } from "react";
import { gsap, Power2 } from "gsap";
import styles from "../../styles/AboutMe.module.scss";
import { FaAws, FaNodeJs, FaReact, FaSass, FaTimes } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiJest,
  SiMysql,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import aboutMeVisible$ from "../../observables/aboutMeVisible$";
import ContactForm from "../ContactForm";
import data from "./iconData";
import { Icon } from "../Icon";

const AboutMe = () => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    aboutMeVisible$.subscribe((status) => {
      setVisible(status);
    });
    gsap.to(aboutRef.current, {
      css: { marginTop: 0, opacity: 1 },
      duration: 0.6,
      delay: 0.2,
      ease: Power2.easeInOut,
    });
    gsap.to(contactRef.current, {
      css: { marginTop: 0, opacity: 1 },
      duration: 0.6,
      delay: 0.2,
      ease: Power2.easeInOut,
    });
  }, [visible]);

  const closeAboutMe = () => {
    gsap.to(aboutRef.current, {
      css: { marginTop: "200%", opacity: 0 },
      duration: 0.6,
      delay: 0.2,
      ease: Power2.easeInOut,
    });
    gsap
      .to(contactRef.current, {
        css: { marginTop: "-200%", opacity: 0 },
        duration: 0.6,
        delay: 0.2,
        ease: Power2.easeInOut,
      })
      .then(() => {
        aboutMeVisible$.next(false);
      });
  };

  const renderIcons = () => {
    return data.map((item, index) => {
      return <Icon key={index} name={item} />;
    });
  };

  return (
    <section className={styles.AboutMe} ref={containerRef}>
      <div className={styles.AboutMe__container}>
        <div ref={aboutRef} className={styles.AboutMe__description}>
          <h2>About Me</h2>
          <div className={styles.AboutMe__description__textArea}>
            <p>
              I am a commercially focused front end engineer with a passion for
              digital innovation. I have worked on a range of projects both
              commercially and personally ranging from websites, web
              applications, Smart TV applications and have contributed to
              creating an enterprise level monorepo with micro frontend
              architecture and AWS cloud deployment. I work with the following
              technologies:
            </p>
            <div className={styles.AboutMe__description__technology}>{renderIcons()}</div>
          </div>
        </div>
        <div ref={contactRef} className={styles.AboutMe__contact}>
          <FaTimes onClick={closeAboutMe} />
          <h2>Contact</h2>
          <div className={styles.AboutMe__contact__textArea}>
            <h3>Want to work with me ?</h3>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
