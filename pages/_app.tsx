import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {useRouter} from "next/router";
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import {useEffect, useState} from 'react'
import PageTransition from '../components/PageTransition'
import {pageTransition$} from "../observables/pageTransition$";



function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  return (
    <main style={{position: "relative"}}>
      <PageTransition />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
