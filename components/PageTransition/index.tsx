import React, {useEffect, useRef, useState} from 'react'
import { useRouter } from 'next/router';
import { gsap, Power4 } from "gsap";
import styles from "../../styles/PageTransition.module.scss"
import {pageTransition$} from "../../observables/pageTransition$";


export const PageTransition = () => {
    const [pageChanging,setPageChanging] = useState(false)
    const router = useRouter()
    const overlayRef = useRef(null)
    const underlayRef = useRef(null)

    const pageReveal = () => {
        gsap.to(overlayRef.current,{css:{width: "0%"},duration: 0.8,ease: Power4.easeInOut})
        gsap.to(underlayRef.current,{css:{width: "0%"},duration: 0.8, delay: 0.7,ease: Power4.easeInOut})
        console.log("Reveal")
    }

    const pageCover = () => {
        gsap.to(overlayRef.current,{css:{width: "100%"},duration: 0.8,ease: Power4.easeInOut})
        gsap.to(underlayRef.current,{css:{width: "100%"},duration: 0.8, delay: 0.7,ease: Power4.easeInOut})
        console.log("Cover")
    }

    useEffect(() => {
        pageReveal()
        pageTransition$.subscribe(status => setPageChanging(status))
    },[])


    useEffect(() => {
        router.events.on('routeChangeStart', pageCover);
        router.events.on('routeChangeComplete', pageReveal);
        return () => {
            router.events.off('routeChangeStart', pageReveal);
            router.events.off('routeChangeComplete', pageCover);
        };
    },[router])

  return (
    <>
        <section className={styles.Underlay} ref={overlayRef} />
        <section className={styles.Overlay} ref={underlayRef}/>
    </>
  )
}

export default PageTransition
