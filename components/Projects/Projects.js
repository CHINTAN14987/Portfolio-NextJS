import React, { useState } from "react";
import data from "./data";
import styles from "./Projects.module.css";

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const visibleProjects = showAll ? data : data.slice(0, 6);

  return (
    <div className={styles.projectMainContainer}>
      <div className={styles.container}>
        {visibleProjects.map((item, index) => {
          const isExpanded = expandedIndex === index;
          
          // Generate a 0X id
          const projectId = index < 9 ? `0${index + 1}` : `${index + 1}`;
          
          // Create year logic from screenshot (just putting 2024 for recent, 2023 for others)
          const year = index === 0 || index === 5 ? "2024" : "2023";
          
          // Split responsibilities into an array based on periods
          const respArray = item.responsibilities
            .split('.')
            .map(r => r.trim())
            .filter(r => r.length > 0);
            
          // Split tech stack into chips
          const techArray = item.techStack
            .split(',')
            .map(t => t.trim());

          return (
            <div 
              key={index} 
              className={`${styles.projectRow} ${isExpanded ? styles.expanded : ''} ${styles.fadeIn}`}
              onClick={() => toggleExpand(index)}
              style={{ animationDelay: `${(index % 6) * 0.1}s` }}
            >
              <div className={styles.projectHeader}>
                <div className={styles.projectNumber}>{projectId}</div>
                <h3 className={styles.projectTitle}>{item.Project.split(' - ')[0]}</h3>
                <div className={styles.projectMeta}>
                  <span className={styles.expandIcon}>↓</span>
                </div>
              </div>

              <div 
                className={styles.projectDetailsWrapper}
                style={{ gridTemplateRows: isExpanded ? '1fr' : '0fr' }}
              >
                <div className={styles.projectDetailsInner}>
                  <div 
                    className={styles.projectDetails} 
                    onClick={(e) => e.stopPropagation()} 
                    onDoubleClick={() => setExpandedIndex(null)}
                  >
                    <p><strong>{item.description}</strong></p>
                    
                    <ul className={styles.responsibilitiesList}>
                      {respArray.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>

                    <div className={styles.techChips}>
                      {techArray.map((tech, i) => (
                        <span key={i} className={styles.chip}>{tech}</span>
                      ))}
                    </div>

                    {item.projectLink && (
                      <a href={item.projectLink} target="_blank" rel="noreferrer" className={styles.liveLink}>
                        Visit Project ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {!showAll && data.length > 6 && (
          <div className={styles.viewMoreContainer}>
            <button className={styles.viewMoreBtn} onClick={() => setShowAll(true)}>
              View other projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
