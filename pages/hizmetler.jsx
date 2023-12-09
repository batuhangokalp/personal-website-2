import Meta from "@/components/GlobalComponents/Meta";
import React from "react";
import styles from "../styles/Services.module.css";
import Services from "@/components/ServicePageComponents/Services";

const services = () => {
  return (
    <>
      <Meta
        title={"Hizmetler"}
        keywords={"peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"}
      />
      <div className={styles.container}>
        <Services />
      </div>
    </>
  );
};

export default services;
