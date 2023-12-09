import React from "react";
import styles from "../../styles/Home.module.css";

const CustomSlider = ({ images, autoPlay = false }) => {
  return (
    <div className={styles.ref}>
      <h1>REFERANSLARIMIZ</h1>
      <div
        className={`${styles.customSliderContainer} ${
          autoPlay ? styles.autoPlay : ""
        }`}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img
              src={image.original}
              alt="peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default CustomSlider;
