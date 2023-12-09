import React from "react";
import styles from "../../styles/Home.module.css";

const MainTop = () => {
  return (
    <div className={styles.mainTopContainer}>
      <div className={styles.text}>
        <h1 className={styles.welcome}>HOŞ GELDİNİZ</h1>
        <h1 className={styles.blueLife}>BLUE & LIFE PEYZAJ</h1>
      </div>
    </div>
  );
};

export default MainTop;
