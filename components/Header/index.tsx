import {HiArrowNarrowRight} from "react-icons/hi"
import NavBar from "../NavBar";
import {FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import {SiUpwork} from "react-icons/si"
import {useEffect, useMemo, useRef} from "react";
import {gsap, Power2} from 'gsap';
import styles from "./Header.module.scss"

const Header = (): JSX.Element => {
    const timeline = useMemo(() => gsap.timeline({paused: true}), []);
    const iconsRef = useRef(null)
    const titleCardRef = useRef(null);
    const subTitleCardRef = useRef(null);
    const buttonRef = useRef(null);
    const buttonIconRef = useRef(null)
    const arrowIconRef = useRef(null)

    useEffect(() => {
        gsap.to(titleCardRef.current, {css: {width: "0%"}, duration: 0.8, ease: Power2.easeInOut})
        gsap.to(subTitleCardRef.current, {css: {width: "0%"}, duration: 0.8, delay: 0.1, ease: Power2.easeInOut})
        gsap.to(buttonRef.current, {css: {width: "0%"}, duration: 0.8, delay: 0.2, ease: Power2.easeInOut})
        gsap.to(iconsRef.current, {opacity: 1, duration: 1, delay: 0.5, ease: Power2.easeInOut})
    }, []);

    const mouseOver = () => {
        gsap.to(buttonIconRef.current, {x: 10, duration: 0.3, ease: Power2.easeInOut})
    }

    const mouseOut = () => {
        gsap.to(buttonIconRef.current, {x: 0, duration: 0.3, ease: Power2.easeInOut})
    }

    const bottomArrowMouseOver = () => {
        gsap.to(arrowIconRef.current, {css: {bottom: 0, scaleY: 1}, duration: 0.3, ease: Power2.easeInOut})
    }

    const bottomArrowMouseOut = () => {
        gsap.to(arrowIconRef.current, {css: {bottom: -30, scaleY: 5}, duration: 0.3, ease: Power2.easeInOut})
    }

    return (
        <header className={styles.Header}>
            <NavBar/>
            <div className={styles.Header__wrapper}>
                <div className={styles.Header__title}>
                    <div className={styles.innerCard} ref={titleCardRef}/>
                    <h1>Nuh Ali</h1>
                </div>
                <div className={styles.Header__subTitle}>
                    <div className={styles.innerCard} ref={subTitleCardRef}/>
                    <h3>Frontend Engineer</h3>
                </div>
                <div className={styles.Header__button}>
                    <div className={styles.innerCard} ref={buttonRef}/>
                    <button onMouseEnter={mouseOver} onMouseLeave={mouseOut}>
                        About me<span ref={buttonIconRef}><HiArrowNarrowRight/></span>
                    </button>
                </div>
            </div>
            <div className={styles.Header__links} ref={iconsRef}>
                <FaTwitter/>
                <FaLinkedinIn/>
                <FaGithub/>
                <SiUpwork/>
            </div>
            <div className={styles.Header__container} onMouseEnter={bottomArrowMouseOver}
                 onMouseLeave={bottomArrowMouseOut}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={"/arrow-down.svg"} alt={"arrow pointing down"} ref={arrowIconRef}
                     className={styles.Header__arrowDown}/>
            </div>
        </header>
    )
}

export default Header