import Meta from "@/components/GlobalComponents/Meta";
import React from "react";
import styles from "../styles/About.module.css";
import ExperienceAndSkills from "@/components/AboutPageComponents/ExperienceAndSkills";
import AboutMe from "@/components/AboutPageComponents/AboutMe";

const about = () => {
  return (
    <>
      <Meta
        title={"Hakkımızda"}
        keywords={"peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"}
      />
      <div className={styles.container}>
        <AboutMe />
        <ExperienceAndSkills />
      </div>
    </>
  );
};

export default about;
