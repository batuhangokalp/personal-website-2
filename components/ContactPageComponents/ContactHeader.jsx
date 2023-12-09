import React from "react";
import styles from "../../styles/Contact.module.css";

const ContactHeader = () => {
  return (
    <div className={styles.contactHeader}>
      <div className={styles.headerContent}>
        <h1 className={styles.firstHeader}>
          İLETİŞİME
          <br />
          <span>GEÇ</span>
        </h1>
      </div>
    </div>
  );
};

export default ContactHeader;
