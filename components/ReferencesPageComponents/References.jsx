import React from "react";
import styles from "../../styles/References.module.css";
import Image from "next/image";

const References = () => {
  const images = [
    "/pictures/bim.png",
    "/pictures/bim.png",
    "/pictures/bim.png",
    "/pictures/bim.png",
    "/pictures/bim.png",
    "/pictures/bim.png",
    "/pictures/bim.png",
    "/pictures/bim.png",
    "/pictures/bim.png",

  ];

  return (
    <div className={styles.refContainer}>
      <h1>REFERANSLARIMIZ</h1>
      <div className={styles.imgContainer}>
        {images.map((src, index) => (
          <div key={index} className={styles.eachImage}>
            <Image
              src={src}
              alt="peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"
              width={218}
              height={117}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default References;
