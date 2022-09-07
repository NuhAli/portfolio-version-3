import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { data } from "../NavBar/navBarData";
import { projectNavData } from "../NavBar/projectNavData";
import NavBarLink from "../NavBarLink";
import styles from "../../styles/Sidebar.module.scss";
import Link from "next/link";
import sideBarVisible$ from "../../observables/sideBarVisible$";
import { gsap, Power2, Power4 } from "gsap";

const Sidebar = () => {
  const router = useRouter()
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

  const renderHomeLinks = () => {
    return data.map((item, index) => {
      if (item.label) {
        return (
          <Link key={index} href={`/${item.to}`}>
            <li className={styles.SidebarPage__link}>{item.label}</li>
          </Link>
        );
      }
      return;
    });
  };

  const renderProjectLinks = () => {
    return projectNavData.map((item, index) => {
      if (item.label) {
        return (
          <Link key={index} href={`/${item.to}`}>
            <li className={styles.SidebarPage__link}>{item.label}</li>
          </Link>
        );
      }
      return;
    });
  };



  return (
    <>
      <div className={styles.Sidebar_accent} ref={sideBarAccentRef} />
      <section className={styles.SidebarPage} ref={sideBarRef}>
        <ul ref={listRef} className={styles.SidebarPage__list}>{renderHomeLinks()}</ul>
        <div className={styles.SidebarPage__socials}>
          <FaTwitter />
          <FaLinkedinIn />
          <FaGithub />
          <SiUpwork />
        </div>
      </section>
    </>
  );
};

export default Sidebar;
