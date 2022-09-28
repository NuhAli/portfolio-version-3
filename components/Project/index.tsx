/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useMemo, useRef } from "react";
import styles from "../../styles/Project.module.scss";
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import { ProjectType } from "../../types/project";

interface IProjectProps {
  data: ProjectType
}

const Project = ({data}:IProjectProps) => {

  const {id,title,subTitle} = data

  const initalCardRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const numberRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(initalCardRef.current, {
      css: { width: "0%" },
      duration: 0.3,
      scrollTrigger: buttonRef.current,
    });
    gsap.to(textRef.current, {
      css: { marginTop: 0, opacity: 1 },
      delay: 0.3,
      duration: 0.2,
      scrollTrigger: buttonRef.current,
    });
  }, []);

  const onMouseOver = () => {
    gsap.to(overlayRef.current, { css: { width: "100%" }, duration: 0.2 });
    gsap.to(imageRef.current, {
      scale: 1.1,
      duration: 0.1,
    });
    gsap.to(numberRef.current, {
      css: { opacity: 1, bottom: 0 },
      duration: 0.1,
    });
    gsap.to(textRef.current, {
      scale: 1.05,
      duration: 0.1,
    });
  };

  const onMouseOut = () => {
    gsap.to(overlayRef.current, { css: { width: "0%" }, duration: 0.2 });
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.1,
    });
    gsap.to(numberRef.current, {
      css: { opacity: 0, bottom: 50, color: "white" },
      duration: 0.1,
    });
    gsap.to(textRef.current, {
      scale: 1,
      duration: 0.1,
    });
  };

  return (
    <section
      className={styles.Project}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOut}
    >
      <div className={styles.Project__imageContainer}>
        <img
          className={styles.Project__image}
          alt={"Project image"}
          src={data.projectImage}
          ref={imageRef}
        />
      </div>
      <div className={styles.Project__textContainer} ref={textRef}>
        <h3>{title}</h3>
        <p>{subTitle}</p>
        <Link href={`/projects/${id.toString()}`}>
          <button ref={buttonRef}>See Project</button>
        </Link>
      </div>
      <div className={styles.Project__hoverOverlay} ref={overlayRef} />
      <div className={styles.Project__overlay} ref={initalCardRef} />
    </section>
  );
};

export default Project;
