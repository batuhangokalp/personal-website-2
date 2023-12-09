import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import styles from "../../styles/Home.module.css";
const SwiperReferences = () => {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.swiperReferenceContainer}>
      <Slider {...settings}>
        <div>
          <Image
            src="/pictures/logo-peyzaj2.jpeg"
            alt="peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"
            width={300}
            height={150}
          />
        </div>
        <div>
          <Image
            src="/pictures/logo-peyzaj.jpg"
            alt="peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"
            width={300}
            height={150}
          />
        </div>
        <div>
          <Image
            src="/pictures/logo-peyzaj.jpg"
            alt="peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"
            width={300}
            height={150}
          />
        </div>
        <div>
          <Image
            src="/pictures/logo-peyzaj2.jpeg"
            alt="peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"
            width={300}
            height={150}
          />
        </div>
        <div>
          <Image
            src="/pictures/logo-peyzaj.jpg"
            alt="peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"
            width={300}
            height={150}
          />
        </div>
        <div>
          <Image
            src="/pictures/logo-peyzaj.jpg"
            alt="peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"
            width={300}
            height={150}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SwiperReferences;
