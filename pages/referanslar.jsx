import Meta from "@/components/GlobalComponents/Meta";
import React from "react";
import styles from "../styles/References.module.css";
import References from "@/components/ReferencesPageComponents/References";

const references = () => {
  return (
    <>
      <Meta
        title={"Referanslar"}
        keywords={
          "peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"
        }
      />
      <div className={styles.container}>
        <References />
      </div>
    </>
  );
};

export default references;
