import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import styles from "../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__container}>
        <ul className={styles.Footer__footerList}>
          <div className={styles.Footer__footerLink}>
            <FaTwitter className={styles.Footer__footerLink__twitter} />
            <p>Twitter</p>
          </div>
          <div className={styles.Footer__footerLink}>
            <FaLinkedinIn className={styles.Footer__footerLink__linkedin} />
            <p>Linkedin</p>
          </div>
          <div className={styles.Footer__footerLink}>
            <FaGithub className={styles.Footer__footerLink__github} />
            <p>GitHub</p>
          </div>
          <div className={styles.Footer__footerLink}>
            <SiUpwork className={styles.Footer__footerLink__upwork} />
            <p>UpWork</p>
          </div>
        </ul>
        <div className={styles.Footer__footerText}>
          <p>Portfolio Project | Nuh Mohamed Ali</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
