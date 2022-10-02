import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { NavBarLinkProps } from "../../types/navBarLink";
import { gsap, Power2 } from "gsap";
import { CgDarkMode } from "react-icons/cg";
import styles from "../../styles/NavBarLink.module.scss";
import aboutMeVisible$ from "../../observables/aboutMeVisible$";
import { useRouter } from "next/router";

const NavBarLink = ({ label, to, accentColor }: NavBarLinkProps) => {
  const router = useRouter();
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const hoverLineRed = useRef(null);

  useEffect(() => {
    aboutMeVisible$.subscribe((status) => {
      setAboutMeVisible(status);
    });
  }, []);

  const mouseOver = () => {
    gsap.to(hoverLineRed.current, {
      css: { width: "100%" },
      duration: 0.2,
      delay: 0.1,
      ease: Power2.easeInOut,
    });
  };

  const mouseOut = () => {
    setTimeout(() => {
      gsap.to(hoverLineRed.current, {
        css: { width: 0 },
        duration: 0.3,
        ease: Power2.easeInOut,
      });
    }, 250);
  };

  const openAboutMe = () => {
    aboutMeVisible$.next(true);
  };

  const renderLink = () => {
    if (to === "open-about") {
      return (
        <li className={styles.NavLink} onClick={openAboutMe}>
          <span onMouseOver={mouseOver} onMouseOut={mouseOut}>
            {label && label}
          </span>
          <div className={styles.NavLink__hoverContainer}>
            <div ref={hoverLineRed} className={styles.NavLink__hoverLine1} style={{ backgroundColor: accentColor }} />
          </div>
        </li>
      );
    } else {
      return (
        <Link href={`${to}`}>
          <li
            className={styles.NavLink}
            style={
              router.route === "/" && label === "Home"
                ? { display: "none" }
                : { display: "inline-block" }
            }
          >
            <span onMouseOver={mouseOver} onMouseOut={mouseOut}>
              {label && label}
            </span>
            <div
              className={styles.NavLink__hoverContainer}
            >
              <div ref={hoverLineRed} className={styles.NavLink__hoverLine1} style={{ backgroundColor: accentColor }} />
            </div>
          </li>
        </Link>
      );
    }
  };

  return renderLink();
};

export default NavBarLink;
