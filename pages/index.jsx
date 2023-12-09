import styles from "../styles/Home.module.css";
import Meta from "@/components/GlobalComponents/Meta";
import SwiperImages from "@/components/GlobalComponents/SwiperImages";
import SwiperReferences from "@/components/GlobalComponents/SwiperReferences";
import SwiperSlide from "@/components/GlobalComponents/SwiperSlide";
import MainTop from "@/components/HomePageComponents/MainTop";

export default function Home() {
  const images = [
    { original: '/pictures/bim.png' },
    { original: '/pictures/bim.png' },
    { original: '/pictures/bim.png' },
    { original: '/pictures/bim.png' },
    { original: '/pictures/bim.png' },
    { original: '/pictures/bim.png' },
    { original: '/pictures/bim.png' },
    { original: '/pictures/bim.png' },
    { original: '/pictures/bim.png' },
    { original: '/pictures/bim.png' },
  ];
  return (
    <>
      <Meta
        title={"Blue & Life Peyzaj"}
        keywords={
          "peyzaj, mimarlık, çevre, bahçe, botanik, life, garden, environment, hayat"
        }
      />
      <div className={styles.container}>
        <MainTop />
        <SwiperImages />
        <SwiperSlide images={images} autoPlay={true}/>
      </div>
    </>
  );
}
