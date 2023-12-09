import React from "react";
import styles from "../../styles/About.module.css";
import { FcNext } from "react-icons/fc";
import { AiOutlineDown } from "react-icons/ai";

const ExperienceAndSkills = () => {
  return (
    <div className={styles.allExperienceAndSkillsContainer}>
      <h3>Faaliyet Alanlarımız</h3>
      <div className={styles.experiences}>
        <div className={styles.experiencesCard}>
          <ul className={styles.list}>
            <li>Ev ve Villa Bahçeleri</li>
            <li>Site ve Toplu Konutlar</li>
            <li>Oteller</li>
            <li>Tatil Köyleri</li>
            <li>Çocuk Oyun Alanları</li>
            <li>Park ve Bahçe Peyzaj Uygulamaları</li>
          </ul>
        </div>
        <FcNext className={styles.iconRight} color="#55a7d9" size={30} />
        <AiOutlineDown className={styles.iconDown} color="#55a7d9" size={30} />
        <div className={styles.experiencesCard}>
          <ul className={styles.list}>
            <li>Dış Mekan Spor Aletleri</li>
            <li>Kafe ve Restoranlar</li>
            <li>Belediyeler</li>
            <li>Tatil Köyleri</li>
            <li>Okul ve Hastaneler</li>
            <li>Spor Alanları ve Kompleksleri</li>
          </ul>
        </div>
        <FcNext className={styles.iconRight} color="#55a7d9" size={30} />
        <AiOutlineDown className={styles.iconDown} color="#55a7d9" size={30} />
        <div className={styles.experiencesCard}>
        <ul className={styles.list}>
            <li>Alışveriş Merkezleri</li>
            <li>Teras Bahçeleri</li>
            <li>Rekreasyon Alanları</li>
            <li>Kent Mobilyaları</li>
            <li>Peyzaj Uygulama</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAndSkills;
