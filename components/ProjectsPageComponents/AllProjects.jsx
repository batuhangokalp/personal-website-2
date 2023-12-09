import React from "react";
import styles from "../../styles/Projects.module.css";
import Image from "next/image";
import Link from "next/link";

const AllProjects = ({RealProjects}) => {
  return (
    <div className={styles.allProjectsContainer}>
      <h1>PROJELERİMİZ</h1>
      <div className={styles.allProjects}>
        <div className={styles.projects}>
          {RealProjects.map((realproject) => {
            return (
              <>
                <div className={styles.eachProject} key={realproject.id}>
                  <Image
                    src={realproject.imgSrc}
                    alt="peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"
                    width={realproject.imgWidth}
                    height={realproject.imgHeight}
                    className={styles.imgProjects}
                  />
                  <div className={styles.projectsContent}>
                    <h3>{realproject.h3Header}</h3>
                    <h4>{realproject.h4Content}</h4>
                    <span>{realproject.span}</span>
                    <div className={styles.linkDiv}>
                      <div className={styles.behanceLink}>
                      <Link href={`/projeler/${realproject.id}`}>
                          <span>Detaylara git</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
