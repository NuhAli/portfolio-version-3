import "../styles/globals.css";
import styles from "../styles/Layout.module.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useCallback, useEffect, useState } from "react";
import aboutMeVisible$ from "../observables/aboutMeVisible$";
import AboutMe from "../components/AboutMe";

function MyApp({ Component, pageProps }: AppProps) {
  const [aboutMeVisible, setAboutMeVisible] = useState(false);
  const Router = useRouter();
  const resetWindowScrollPosition = useCallback(
    () => window.scrollTo(0, 0),
    []
  );

  useEffect(() => {
    aboutMeVisible$.subscribe((status) => {
      setAboutMeVisible(status);
    });

    Router.events.on("routeChangeComplete", resetWindowScrollPosition);

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
      Router.events.off("routeChangeComplete", resetWindowScrollPosition);
    };
  }, []);

  return (
    <main className={styles.Main}>
      {aboutMeVisible && <AboutMe />}
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
