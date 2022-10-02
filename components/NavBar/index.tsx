import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import styles from "../../styles/NavBar.module.scss";
import { gsap, Power2 } from "gsap";
import { data } from "./navBarData";
import { projectNavData } from "./projectNavData";
import NavBarLink from "../NavBarLink";
import { FaTimes, FaBars } from "react-icons/fa";
import sideBarVisible$ from "../../observables/sideBarVisible$";
import aboutMeVisible$ from "../../observables/aboutMeVisible$";

interface NavBarProps {
  type: "home" | "project";
  target: MutableRefObject<null>;
  accentColor?: string;
}


const NavBar = ({ type, target, accentColor }: NavBarProps) => {
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [sideBarVisible, setSidebarVsibile] = useState(false);
  const sideBarRef = useRef(null);
  const navRef = useRef(null);

  const sideBarIconBackgroundColor = {
    backgroundColor: sideBarVisible ? "transparent": accentColor,
    padding: "0.5rem",
    borderRadius: "10px"
  }

  useEffect(() => {
    aboutMeVisible$.subscribe((status) => {
      setAboutMeVisible(status);
    });
    sideBarVisible$.subscribe((visible) => {
      setSidebarVsibile(visible);
    });

    gsap.to(navRef.current, {
      css: { opacity: 1, top: 0 },
      duration: 0.8,
      delay: 1.1,
      ease: Power2.easeInOut,
    });
  }, []);

  const renderNavLinks = () => {
    return data.map((item, index) => {
      return (
        <NavBarLink
          key={index}
          label={item.label}
          to={item.to}
          accentColor={accentColor}
        />
      );
    });
  };

  return (
    <nav
      className={type === "home" ? styles.NavBar : styles.NavBar__Project}
      ref={navRef}
    >
      <div className={styles.NavBar__container}>
        <ul className={styles.NavBar__links}>{renderNavLinks()}</ul>
        <div className={styles.NavBar__sideMenuIcons} style={sideBarIconBackgroundColor}>
          {clicked && sideBarVisible ? (
            <FaTimes
              onClick={() => {
                setClicked(false);
                sideBarVisible$.next(false);
              }}
            />
          ) : (
            <FaBars
              onClick={() => {
                setClicked(true);
                sideBarVisible$.next(true);
              }}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
