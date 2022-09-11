import Link from "next/link";
import React, {useEffect, useRef, useState} from "react";
import {NavBarLinkProps} from "../../types/navBarLink";
import {gsap, Power2} from "gsap";
import {CgDarkMode} from "react-icons/cg";
import styles from "../../styles/NavBarLink.module.scss";
import aboutMeVisible$ from "../../observables/aboutMeVisible$";

const NavBarLink = ({label, to}: NavBarLinkProps) => {
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const hoverLineRed = useRef(null);
  const hoverLineBlue = useRef(null);
  const hoverContainer = useRef(null);

  useEffect(() => {
    aboutMeVisible$.subscribe((status) => {
      setAboutMeVisible(status);
    });
  }, [])

  const mouseOver = () => {
    gsap.to(hoverContainer.current, {
      css: {width: "100%"},
      delay: 0.1,
      duration: 0.3,
      ease: Power2.easeInOut,
    });
    gsap.to(hoverLineRed.current, {
      css: {width: "100%"},
      duration: 0.3,
      ease: Power2.easeInOut,
    });
    gsap.to(hoverLineBlue.current, {
      css: {width: 0},
      duration: 0.3,
      ease: Power2.easeInOut,
    });
  };

  const mouseOut = () => {
    gsap.to(hoverLineBlue.current, {
      css: {width: "100%"},
      duration: 0.3,
      ease: Power2.easeInOut,
    });
    gsap.to(hoverLineRed.current, {
      css: {width: 0},
      duration: 0.3,
      ease: Power2.easeInOut,
    });
    gsap.to(hoverContainer.current, {
      css: {width: 0},
      delay: 0.3,
      duration: 0.3,
      ease: Power2.easeInOut,
    });
  };

  const openAboutMe = () => {
    aboutMeVisible$.next(true)
  };

  const renderLink = () => {
    if (to === "open-about") {
      return (
          <li
              className={styles.NavLink}
              onClick={openAboutMe}
          >
            <span onMouseOver={mouseOver} onMouseOut={mouseOut}>{label && label}</span>
            <div
                ref={hoverContainer}
                className={styles.NavLink__hoverContainer}
            >
              <div ref={hoverLineRed} className={styles.NavLink__hoverLine1}/>
              <div ref={hoverLineBlue} className={styles.NavLink__hoverLine2}/>
            </div>
          </li>
      );
    } else {
      return (
          <Link href={`${to}`}>
            <li className={styles.NavLink}>
            <span onMouseOver={mouseOver} onMouseOut={mouseOut}>{label && label}</span>
              <div
                  ref={hoverContainer}
                  className={styles.NavLink__hoverContainer}
              >
                <div
                    ref={hoverLineRed}
                    className={styles.NavLink__hoverLine1}
                />
                <div
                    ref={hoverLineBlue}
                    className={styles.NavLink__hoverLine2}
                />
              </div>
            </li>
          </Link>
      );
    }
  };

  return renderLink()
};

export default NavBarLink;
