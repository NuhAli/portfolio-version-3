import React, { useEffect, useRef, useState } from "react";
import { gsap, Power4 } from "gsap";
import styles from "../../styles/PageTransition.module.scss";
import router from "next/router";
import { IPageTransition } from "../../types/pageTransition";

export const PageTransition = ({
  backgroundColor,
  backgroundColor1,
}: IPageTransition) => {
  const overlayRef = useRef(null);
  const underlayRef = useRef(null);

  const pageReveal = () => {
    gsap.to(overlayRef.current, {
      css: { width: "0%" },
      duration: 0.8,
      ease: Power4.easeInOut,
    });
    gsap.to(underlayRef.current, {
      css: { width: "0%" },
      duration: 0.8,
      delay: 0.7,
      ease: Power4.easeInOut,
    });
    console.log("Reveal");
  };

  const pageCover = () => {
    gsap.to(overlayRef.current, {
      css: { width: "100%" },
      duration: 0.8,
      ease: Power4.easeInOut,
    });
    gsap.to(underlayRef.current, {
      css: { width: "100%" },
      duration: 0.8,
      delay: 0.7,
      ease: Power4.easeInOut,
    });
    console.log("Cover");
  };

  useEffect(() => {
    pageReveal();
    return () => {
      router.events.on("routeChangeStart", () => {
        pageCover();
      });
    };
  }, []);

  const renderSlides = () => {
    if (backgroundColor !== "") {
      <>
        <section
          style={{ backgroundColor }}
          className={styles.GenericOverlay}
          ref={overlayRef}
        />
        <section
          style={{ backgroundColor: backgroundColor1 }}
          className={styles.GenericUnderlay}
          ref={underlayRef}
        />
      </>;
    }

    return (
      <>
        <section className={styles.Underlay} ref={overlayRef} />
        <section className={styles.Overlay} ref={underlayRef} />
      </>
    );
  };

  return renderSlides()
};

export default PageTransition;
