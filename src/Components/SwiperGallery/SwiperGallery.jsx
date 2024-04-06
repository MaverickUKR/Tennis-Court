import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import "./SwiperGallery.module.scss";
import photo1 from "../../assets/images/PhotoCarousel/court1.jpg";
import photo2 from "../../assets/images/PhotoCarousel/court2.jpg";
import photo3 from "../../assets/images/PhotoCarousel/court3.jpg";
import photo4 from "../../assets/images/PhotoCarousel/court4.jpg";
import photo5 from "../../assets/images/PhotoCarousel/court5.jpg";

register();
const smallItemStyles = {
  cursor: "pointer",
  objectFit: "cover",
  width: "300px",
  height: "250px",
  // marginLeft: "10%",
};
const Gallery = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <div className="gallery__container" id="Gallery">
      <h2>Photo Gallery</h2>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="2"
        centeredSlides="true"
        navigation="true"
        pagination="true"
      >
        <swiper-slide lazy="true">
          <img
            src={photo1}
            style={smallItemStyles}
            loading="lazy"
            alt="tennis"
          ></img>
        </swiper-slide>
        <swiper-slide lazy="true">
          <img
            src={photo2}
            style={smallItemStyles}
            loading="lazy"
            alt="tennis"
          ></img>
        </swiper-slide>
        <swiper-slide lazy="true">
          <img
            src={photo3}
            style={smallItemStyles}
            loading="lazy"
            alt="tennis"
          ></img>
        </swiper-slide>
        <swiper-slide lazy="true">
          <img
            src={photo4}
            style={smallItemStyles}
            loading="lazy"
            alt="tennis"
          ></img>
        </swiper-slide>
        <swiper-slide lazy="true">
          <img
            src={photo5}
            style={smallItemStyles}
            loading="lazy"
            alt="tennis"
          ></img>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Gallery;
