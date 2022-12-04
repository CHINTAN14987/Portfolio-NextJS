import React from 'react'
import styles from "./Technologies.module.css"
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { BsBookmarkPlus } from 'react-icons/bs';


const Technologies = () => {
  return (
    <div className={styles.container}>
        <h2>Technical Skill Sets</h2>
        <p> I've worked with a range a technologies in the web development world.</p>
        <div className={styles.techWrapper}>
            <div >
                <div className={styles.iconWrapper}><h3>Front-End    </h3>
                <DiReact size="3rem" /></div>
                <ul className={styles.list}><li>Experience with React JS</li>
                <li>Experience with Next JS</li>
                <li>Experience with Redux</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>BootStrap</li>
                </ul>
            </div>
            <div >
                <div className={styles.iconWrapper}><h3>Backend</h3>
                <DiFirebase size="3rem" /></div>
                <ul className={styles.list}><li>Familiar with FireBase Authorization</li>
                
                </ul>
            </div>
            <div >
               <div className={styles.iconWrapper}> <h3>UI / UX Design</h3>
                <DiZend size="3rem" /></div>
                <ul className={styles.list}><li>Experience with Figma & PSD</li>
                </ul>
            </div>
            <div>
              <div className={styles.iconWrapper}>  <h3 >Others</h3>
                <BsBookmarkPlus size="1.5rem"/></div>
                <ul className={styles.list}><li>Experience with Semantic UI, Material UI & ANTD</li>
                <li>Experience with Visiualization Library like Chart JS</li>
                <li>Familiar with TypeScript</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Technologies