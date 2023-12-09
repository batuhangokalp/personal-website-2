import Meta from "@/components/GlobalComponents/Meta";
import React from "react";
import styles from "../../styles/Projects.module.css"
import AllProjects from "@/components/ProjectsPageComponents/AllProjects";
import RealProjects from './RealProjects';
const projects = () => {
  return (
    <>
      <Meta
        title={"Projeler"}
        keywords={"peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"}
      />
      <div className={styles.container}>
        <AllProjects RealProjects={RealProjects}/>
      </div>
    </>
  );
};

export default projects;
