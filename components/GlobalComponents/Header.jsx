import Link from "next/link";
import React from "react";
import styles from "../../styles/Home.module.css";
import AccordionData from "./AccordionData";
import Image from "next/image";

const Header = () => {
  return (
    <nav className={styles.allHeader}>
      <Link href="/" className={styles.img}>
        <Image
          src="/pictures/logo-peyzaj22.jpeg"
          alt="peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"
          layout="responsive"
          objectFit="cover"
          quality={100}
          width={450}
          height={88}
        />
      </Link>
      <ul className={styles.navigationLinks}>
        <Link href="/">
          <li>Ana Sayfa</li>
        </Link>
        <Link href="/hakkimizda">
          <li>Hakkımızda</li>
        </Link>
        <Link href="/hizmetler">
          <li>Hizmetler</li>
        </Link>
        <Link href="/referanslar">
          <li>Referanslar</li>
        </Link>
        <Link href="/projeler">
          <li>Projeler</li>
        </Link>
        <Link href="/iletisim">
          <li>İletişim</li>
        </Link>
      </ul>
      <AccordionData />
    </nav>
  );
};

export default Header;
