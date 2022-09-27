import { useState, useRef, useEffect } from "react";
import "./index"
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js";
import { BackgroundProps } from "../../types/background";

export default function Background({ width, height, children }: BackgroundProps) {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);

    const [theme,setTheme] = useState(true)
    
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(
          NET({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 2000,
            minWidth: 2560,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xe6e2e3,
            backgroundColor: 0x1d1a2d
          })
        );

        setTimeout(() => {
          setTheme(false)
        },5000)
      }
    }, [vantaEffect,theme]);

  return <div style={{height,width}} ref={vantaRef}>{children}</div>;
}
