import React from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineHome,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className={styles.allFooters}>
      <div className={styles.allFooter}>
        <div className={styles.leftFooter}>
          <div className={styles.contactFooter}>
            <h5>Bizimle iletişime geçebilirsiniz</h5>
            <h5>Yasin Tekin Keskin</h5>
            <div className={styles.dividerFooter} />
            <div className={styles.socialIconsFooter}>
              <Link href="https://www.facebook.com/people/Yasin-Tekin-Keskin/pfbid0wAh6XD5LJDFpGptW5YbdpKRUBdNubYn7Gr9CVx1JgMqL4R5ajuL6UdwxVXTbNW74l/?mibextid=2JQ9oc">
                <AiOutlineFacebook color="#9B9B9B" size={30} />
              </Link>
              <Link href="https://www.instagram.com/blue.life.peyzaj">
                <AiOutlineInstagram color="#9B9B9B" size={30} />
              </Link>
            </div>
            <div className={styles.dividerFooter} />
            <div className={styles.personalContact}>
              <div className={styles.phone}>
                <BsTelephone color="#9B9B9B" size={25} />
                <span> +90 (532) 480 10 67 </span>
              </div>
              <div className={styles.mail}>
                <TfiEmail color="#9B9B9B" size={25} />
                <span> blue.life.peyzaj@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.rightFooter}>
          <div className={styles.addressIcon}>
            <AiOutlineHome color="#9B9B9B" size={25} />
            <div className={styles.address}>
              <span>Merkez Mh. Şahinpaşa Cd.</span>
              <span>No: 14/2 İç Kapı No: 11</span>
              <span>Lalapaşa / Edirne</span>
            </div>
          </div>
        </div>
      </div>

      <span className={styles.copyRight}>© 2023 - Blue & Life Peyzaj - Her Hakkı Saklıdır.</span>
    </div>
  );
};

export default Footer;
