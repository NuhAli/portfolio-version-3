import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { NavBarLinkProps } from "../../types/navBarLink";
import { gsap, Power2 } from "gsap";
import { CgDarkMode } from "react-icons/cg";
import styles from "../../styles/NavBarLink.module.scss";
import aboutMeVisible$ from "../../observables/aboutMeVisible$";

const NavBarLink = ({ label, icon, to }: NavBarLinkProps) => {
  const hoverLineRed = useRef(null);
  const hoverLineBlue = useRef(null);
  const hoverContainer = useRef(null);

  const mouseOver = () => {
    gsap.to(hoverContainer.current, {
      css: { width: 100 },
      delay: 0.1,
      duration: 0.3,
      ease: Power2.easeInOut,
    });
    gsap.to(hoverLineRed.current, {
      css: { width: 300 },
      duration: 0.3,
      ease: Power2.easeInOut,
    });
    gsap.to(hoverLineBlue.current, {
      css: { width: 0 },
      duration: 0.3,
      ease: Power2.easeInOut,
    });
  };

  const mouseOut = () => {
    gsap.to(hoverLineBlue.current, {
      css: { width: 300 },
      duration: 0.3,
      ease: Power2.easeInOut,
    });
    gsap.to(hoverLineRed.current, {
      css: { width: 0 },
      duration: 0.3,
      ease: Power2.easeInOut,
    });
    gsap.to(hoverContainer.current, {
      css: { width: 0 },
      delay: 0.3,
      duration: 0.3,
      ease: Power2.easeInOut,
    });
  };

  const openAboutMe = () => {
    aboutMeVisible$.next(true)
  }

  return (
    <Link href={`/${to}`}>
      <li
        className={styles.NavLink}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        onClick={openAboutMe}
      >
        {label && label}
        {icon && <CgDarkMode />}
        {label && (
          <div ref={hoverContainer} className={styles.NavLink__hoverContainer}>
            <div ref={hoverLineRed} className={styles.NavLink__hoverLine1} />
            <div ref={hoverLineBlue} className={styles.NavLink__hoverLine2} />
          </div>
        )}
      </li>
    </Link>
  );
};

export default NavBarLink;
