import React from "react";
import styles from "../../styles/Services.module.css";
import { FcNext } from "react-icons/fc";
import { AiOutlineDown } from "react-icons/ai";
import { GiTreeDoor } from "react-icons/gi";
import { MdAgriculture } from "react-icons/md";
import { GiBrickWall } from "react-icons/gi";
import { HiLightBulb } from "react-icons/hi";
import { FaBusinessTime } from "react-icons/fa";
import { GiParkBench } from "react-icons/gi";
import { FaWater } from "react-icons/fa";
import { GiStonePath } from "react-icons/gi";
import { GiWaterfall } from "react-icons/gi";

const Services = () => {
  return (
    <div className={styles.allExperienceAndSkillsContainer}>
      <h1>HİZMETLERİMİZ</h1>
      <div className={styles.rowExp}>
        <div className={styles.experiences}>
          <div className={styles.experiencesCard}>
            <GiTreeDoor  size={60} className={styles.iconHover} />
            <ul className={styles.list}>
              <li>Ağaçlandırma ve Budama</li>
              <li>Periyodik Bakım</li>
              <li>Hazır Rulo Çim</li>
            </ul>
          </div>
          <FcNext className={styles.iconRight} color="#55a7d9" size={30} />
          <AiOutlineDown
            className={styles.iconDown}
            color="#55a7d9"
            size={30}
          />
          <div className={styles.experiencesCard}>
            <MdAgriculture size={60} className={styles.iconHover} />
            <ul className={styles.list}>
              <li>Toprak Satışı</li>
              <li>Bitki Satışı</li>
            </ul>
          </div>
          <FcNext className={styles.iconRight} color="#55a7d9" size={30} />
          <AiOutlineDown
            className={styles.iconDown}
            color="#55a7d9"
            size={30}
          />
          <div className={styles.experiencesCard}>
            <GiBrickWall size={60} className={styles.iconHover} />
            <ul className={styles.list}>
              <li>İstinat Duvarı</li>
              <li>Gabion Duvarlar</li>
              <li>Beton Duvarlar</li>
              <li>Doğal Taş Duvarlar</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.rowExp}>
        <div className={styles.experiences}>
          <div className={styles.experiencesCard}>
            <GiWaterfall size={60} className={styles.iconHover} />
            <ul className={styles.list}>
              <li>Çatı Bahçesi</li>
              <li>Dikey Bahçe</li>
              <li>Bahçe Aydınlatmaları</li>
              <li>Otomatik Sulama</li>
            </ul>
          </div>
          <FcNext className={styles.iconRight} color="#55a7d9" size={30} />
          <AiOutlineDown
            className={styles.iconDown}
            color="#55a7d9"
            size={30}
          />
          <div className={styles.experiencesCard}>
            <FaWater size={60} className={styles.iconHover} />
            <ul className={styles.list}>
              <li>Su Bahçesi</li>
              <li>Havuz Uygulamaları</li>
              <li>Göletler</li>
            </ul>
          </div>
          <FcNext className={styles.iconRight} color="#55a7d9" size={30} />
          <AiOutlineDown
            className={styles.iconDown}
            color="#55a7d9"
            size={30}
          />
          <div className={styles.experiencesCard}>
            <GiStonePath size={60} className={styles.iconHover}/>
            <ul className={styles.list}>
              <li>Podima Sanatı</li>
              <li>Kaya Bahçeleri</li>
              <li>Doğal Taş Yollar</li>
              <li>Doğal Yürüme Yolları</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.rowExp}>
        <div className={styles.experiences}>
          <div className={styles.experiencesCard}>
            <GiParkBench size={60} className={styles.iconHover} />
            <ul className={styles.list}>
              <li>Oturma Bankları</li>
              <li>Piknik Masaları</li>
              <li>Kamelya / Çardak</li>
              <li>Bahçe Mobilyaları</li>
            </ul>
          </div>
          <FcNext className={styles.iconRight} color="#55a7d9" size={30} />
          <AiOutlineDown
            className={styles.iconDown}
            color="#55a7d9"
            size={30}
          />
          <div className={styles.experiencesCard}>
            <HiLightBulb size={60} className={styles.iconHover} />
            <ul className={styles.list}>
              <li>Plan ve Projelendirme</li>
              <li>Danışmanlık</li>
              <li>Tasarım</li>
              <li>Bütçelendirme</li>
            </ul>
          </div>
          <FcNext className={styles.iconRight} color="#55a7d9" size={30} />
          <AiOutlineDown
            className={styles.iconDown}
            color="#55a7d9"
            size={30}
          />
          <div className={styles.experiencesCard}>
            <FaBusinessTime size={60} className={styles.iconHover} />
            <ul className={styles.list}>
              <li>Bitki Oteli</li>
              <li>Bitki Hastanesi</li>
              <li>Bitki Kiralama</li>
              <li>Mezarlık Yapılandırma ve Bakımı</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
