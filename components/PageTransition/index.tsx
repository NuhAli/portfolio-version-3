import React, { useEffect, useRef } from 'react'
import { gsap, Power4 } from "gsap";
import styles from "../../styles/PageTransition.module.scss"


export const PageTransition = () => {

    const overlayRef = useRef(null)
    const underlayRef = useRef(null)

    useEffect(() => {
        gsap.to(overlayRef.current,{css:{width: "0%"},duration: 0.8,ease: Power4.easeInOut})
        gsap.to(underlayRef.current,{css:{width: "0%"},duration: 0.8, delay: 0.7,ease: Power4.easeInOut})
    },[])

  return (
    <>
        <section className={styles.Underlay} ref={overlayRef} />
        <section className={styles.Overlay} ref={underlayRef}/>
    </>
  )
}

export default PageTransition
