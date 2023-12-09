import React from "react";
import styles from "../../styles/About.module.css";
import Image from "next/image";
const AboutMe = () => {
  return (
    <div className={styles.aboutMeAllContainer}>
      <h1>HAKKIMIZDA</h1>
      <div className={styles.aboutMe}>
        <div className={styles.image}>
          <Image
            src="/pictures/pic1.jpg"
            alt="peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"
            width={487}
            height={400}
            layout="responsive"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className={styles.allInfo}>
          <div className={styles.brandHeader}>
            <h3>Blue & Life Peyzaj</h3>
          </div>
          <div className={styles.eachInfo}>
            <span className={styles.content}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <br />
              <br /> Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industrys standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
