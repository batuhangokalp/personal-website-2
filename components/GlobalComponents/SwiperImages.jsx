import React from "react";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from '../../styles/Home.module.css'
const images = [
  {
    original: "/pictures/slider1.jpeg",
    thumbnail: "/pictures/slider1.jpeg",
  },
  {
    original: "/pictures/slider2.jpeg",
    thumbnail: "/pictures/slider2.jpeg",
  },
  {
    original: "/pictures/slider3.jpeg",
    thumbnail: "/pictures/slider3.jpeg",
  },
  {
    original: "/pictures/slider4.jpeg",
    thumbnail: "/pictures/slider4.jpeg",
  },
  {
    original: "/pictures/slider5.jpeg",
    thumbnail: "/pictures/slider5.jpeg",
  },
];

const Slider = () => {
  return (
    <div className={styles.images}>
      <Gallery items={images} autoPlay={false} additionalClass={styles.x}/>
    </div>
  );
};

export default Slider;
