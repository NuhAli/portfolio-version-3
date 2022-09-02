import React, { useEffect, useRef, useState } from "react";
import styles from "./NavBar.module.scss";
import { CgDarkMode } from "react-icons/cg";
import { gsap, Power2 } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { data } from "./navBarData";
import { projectNavData } from "./projectNavData";
import NavBarLink from "../NavBarLink";
import { FaTimes, FaBars } from "react-icons/fa";
import sideBarVisible$ from "../../observables/sideBarVisible$";

interface NavBarProps {
  type: "home" | "project";
}

const NavBar = ({ type }: NavBarProps) => {
  const [theme, setTheme] = useState("dark");
  const [clicked, setClicked] = useState(false);
  const [sideBarVisible, setSidebarVsibile] = useState(false);

  const navRaf = useRef(null);
  const sideBarRef = useRef(null);

  useEffect(() => {
    sideBarVisible$.subscribe((visible) => {
      setSidebarVsibile(visible);
    });

    gsap.to(navRaf.current, {
      css: { opacity: 1, top: 0 },
      duration: 0.5,
      delay: 0.5,
      ease: Power2.easeInOut,
    });
  }, []);

  const renderNavLinks = () => {
    return data.map((item, index) => {
      return (
        <NavBarLink
          key={index}
          label={item.label}
          icon={item.icon}
          to={item.to}
        />
      );
    });
  };

  const renderProjectLinks = () => {
    return projectNavData.map((item, index) => {
      return (
        <NavBarLink
          key={index}
          label={item.label}
          icon={item.icon}
          to={item.to}
        />
      );
    });
  };

  return (
    <nav
      className={type === "home" ? styles.NavBar : styles.NavBar__projects}
      ref={navRaf}
    >
      <div className={styles.NavBar__container}>
        <ul className={styles.NavBar__links}>
          {type === "home" ? renderNavLinks() : renderProjectLinks()}
        </ul>
        <div className={styles.NavBar__sideMenuIcons}>
          {clicked ? (
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
