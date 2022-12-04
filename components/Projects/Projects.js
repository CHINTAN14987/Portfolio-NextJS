
import React, { useEffect } from 'react'
import data from './data'
import styles from "./Projects.module.css"

const Projects = () => {
    useEffect(()=>{ 
      import("@lottiefiles/lottie-player");
},[])
  return (
    <div className={styles.projectMainContainer}>
     <h2 className={styles.heading}>Few Professional Projects made for Product Clients</h2>
    <div className={styles.container }>  {data.slice(0,3).map((item, index)=>{return (<div key={index} className={styles.card }>
    <div className={  styles.cardWrapper}>    
    <div className={styles.lottieWarpper}><h3>{item.Project}</h3>
    <lottie-player
  autoplay
  loop
  mode="normal"
  src={item.link}
style={{width:"180px"}}
>
</lottie-player>
    </div>
  
        <p> <strong>Description:-</strong> {item.description}</p>
   
        <p><strong>Technologies:-</strong> {item.techStack}</p></div>
        {<p> <strong>Responsibilities:-</strong> {item.responsibilities}</p>}

    </div>)})}</div>
    
    </div>
  )

}

export default Projects