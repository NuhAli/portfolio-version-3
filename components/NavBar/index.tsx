import React, {useEffect, useRef, useState} from 'react';
import styles from "./NavBar.module.scss"
import {CgDarkMode} from "react-icons/cg"
import {gsap, Power2} from 'gsap';

const NavBar = () => {
    const [theme,setTheme] = useState("dark")
    const navRaf = useRef(null)

    useEffect(() => {
        gsap.to(navRaf.current,{css: {opacity: 1, top: 0}, duration: 0.5, delay: 0.5, ease: Power2.easeInOut})
    }, []);

    return (
        <nav className={styles.NavBar} ref={navRaf}>
            <div className={styles.NavBar__container}>
                <ul className={styles.NavBar__links}>
                    <li className={styles.NavBar__link}>Projects</li>
                    <li className={styles.NavBar__link}>Contact</li>
                    <li className={styles.NavBar__link}>
                        {theme === "dark" ? <CgDarkMode />: null}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
