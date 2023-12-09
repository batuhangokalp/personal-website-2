import Meta from "@/components/GlobalComponents/Meta";
import React from "react";
import styles from "../styles/Contact.module.css";
import ContactHeader from "@/components/ContactPageComponents/ContactHeader";
import ContactForm from "@/components/ContactPageComponents/ContactForm";

const contact = () => {
  return (
    <>
      <Meta
        title={"İletişim"}
        keywords={"peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"}
      />
      <div className={styles.container}>
        <ContactHeader/>
        <ContactForm/>
      </div>
    </>
  );
};

export default contact;
