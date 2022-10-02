import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import {
  FaBars,
  FaGithub,
  FaLinkedinIn,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { data } from "../NavBar/navBarData";
import { projectNavData } from "../NavBar/projectNavData";
import NavBarLink from "../NavBarLink";
import styles from "../../styles/Sidebar.module.scss";
import Link from "next/link";
import sideBarVisible$ from "../../observables/sideBarVisible$";
import { gsap, Power2, Power4 } from "gsap";
import aboutMeVisible$ from "../../observables/aboutMeVisible$";

const Sidebar = () => {
  const router = useRouter();
  const [sideBarVisible, setSidebarVsibile] = useState(false);
  const sideBarRef = useRef(null);
  const listRef = useRef(null);
  const sideBarAccentRef = useRef(null);

  useEffect(() => {
    sideBarVisible$.subscribe((state) => {
      setSidebarVsibile(state);
    });
  }, []);

  useEffect(() => {
    if (sideBarVisible) {
      gsap.to(sideBarAccentRef.current, {
        css: { left: 0 },
        duration: 0.3,
        ease: Power2.easeIn,
      });
      gsap.to(sideBarRef.current, {
        css: { left: 0 },
        duration: 0.3,
        delay: 0.2,
        ease: Power2.easeIn,
      });
    } else {
      gsap.to(sideBarRef.current, {
        css: { left: "-100%" },
        duration: 0.3,
        ease: Power4.easeInOut,
      });
      gsap.to(sideBarAccentRef.current, {
        css: { left: "-100%" },
        duration: 0.3,
        delay: 0.2,
        ease: Power4.easeInOut,
      });
    }
  }, [sideBarVisible]);

  const openAboutMe = () => {
    sideBarVisible$.next(false);
    router.push("/#top")
    aboutMeVisible$.next(true);
  };

  const closeSideBar = () => {
    sideBarVisible$.next(false);
  }

  const renderHomeLinks = () => {
    return data.map((item, index) => {
      if (item.label !== "Contact") {
        return (
          <Link key={index} href={`${item.to}`}>
            <li
              className={styles.SidebarPage__link}
              onClick={closeSideBar}
              style={
                router.route === "/" && item.label === "Home"
                  ? { display: "none" }
                  : { display: "inline-block" }
              }
            >
              {item.label}
            </li>
          </Link>
        );
      } else if (item.label === "Contact") {
        return (
          <li
            key={index}
            className={styles.SidebarPage__link}
            onClick={openAboutMe}
          >
            {item.label}
          </li>
        );
      }
      return;
    });
  };

  const navigateToTwitter = () => {
    window.location.href = "https://twitter.com/NuhAli58506544";
  };

  const navigateToLinkedin = () => {
    window.location.href = "https://www.linkedin.com/in/nuhali/";
  };

  const navigateToGit = () => {
    window.location.href = "https://github.com/NuhAli";
  };

  const navigateUpwork = () => {
    window.location.href =
      "https://www.upwork.com/freelancers/~0163c32ccf29894331";
  };

  return (
    <>
      <div className={styles.Sidebar_accent} ref={sideBarAccentRef} />
      <section className={styles.SidebarPage} ref={sideBarRef}>
        <ul ref={listRef} className={styles.SidebarPage__list}>
          {renderHomeLinks()}
          <div className={styles.SidebarPage__socials}>
            <FaTwitter onClick={navigateToTwitter} />
            <FaLinkedinIn onClick={navigateToGit} />
            <FaGithub onClick={navigateToGit} />
            <SiUpwork onClick={navigateUpwork} />
          </div>
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
