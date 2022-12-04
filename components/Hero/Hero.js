import React from 'react'
import styles from "./Hero.module.css"
import { AiFillGithub } from 'react-icons/ai';
const Hero = () => {
  return (
    <div className={styles.container}><h2>Welcome to my Personal Portfolio</h2>
    <p > A Front-End Developer having advance experience in technologies such as JavaScript, React JS, Next JS,  Redux and
Bootstrap, HTML, CSS. Equipped with a diverse and promising skill set. Able to effectively self-manage during
independent projects, as well as collaborate in a team setting.</p>
<div className={styles.gitHubWrapper}><h3>100+ Open Source Projects on GitHub</h3>  <AiFillGithub size="3rem" /></div>
    </div>
  )
}

export default Hero