import type { NextPage } from 'next'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import Head from "next/head";

const Home: NextPage = () => {
    const pageRef = useRef(null)

    useEffect(() => {
        gsap.to(pageRef.current,{duration: 0, css: {visibility: 'visible'}})
    },[])

  return (
    <div className={styles.container} ref={pageRef}>
        <Head>
            <title>Nuh Mohamed Ali | Portfolio v3</title>
        </Head>
      <Header />
    </div>
  )
}

export default Home
