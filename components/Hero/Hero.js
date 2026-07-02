import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>

      <div className={styles.titleWrapper}>
        <h1 className={styles.firstName}>Chintan</h1>
        <h1 className={styles.lastName}>Chawla.</h1>
      </div>

      <div className={styles.footer}>
        <div>
          <div className={styles.footerLabel}>ABOUT ME</div>
          <div className={styles.footerText} style={{ maxWidth: '600px' }}>
            I'm a Full Stack MERN Developer with 5+ years of experience architecting and delivering scalable web applications. I specialize in building robust backend systems with Node.js and TypeScript, paired with dynamic React and Next.js interfaces.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
