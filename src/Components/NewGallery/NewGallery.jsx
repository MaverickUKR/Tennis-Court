import React, { useState } from "react";
import "./NewGallery.scss";
import photo1 from "../../assets/images/PhotoCarousel/court1.jpg";
import photo2 from "../../assets/images/PhotoCarousel/court2.jpg";
import photo3 from "../../assets/images/PhotoCarousel/court3.jpg";
import photo4 from "../../assets/images/PhotoCarousel/court4.jpg";
import photo5 from "../../assets/images/PhotoCarousel/court5.jpg";

const imageUrls = [
  `${photo1}`,
  `${photo2}`,
  `${photo3}`,
  `${photo4}`,
  `${photo5}`,
  // Add more image URLs as needed
];

const NewGallery = () => {
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxVisible(true);
  };

  const closeLightbox = () => {
    setLightboxVisible(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length
    );
  };

  return (
    <div className="gallery__wrapper">
      <h2 className="gallery-title">Галерея</h2>
      <div className="gallery-container" id="Gallery">
        {imageUrls.map((url, index) => (
          <div
            className="gallery-item"
            key={index}
            data-index={index + 1}
            onClick={() => openLightbox(index)}
          >
            <img
              style={{
                maxWidth: "300px",
                maxHeight: "250px",
                minWidth: "300px",
                minHeight: "250px",
              }}
              src={url}
              loading="lazy"
              alt={`Gallery item ${index + 1}`}
            />
          </div>
        ))}
        {lightboxVisible && (
          <div className="lightbox" onClick={closeLightbox}>
            <div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={imageUrls[currentImageIndex]}
                alt={`Gallery item ${currentImageIndex + 1}`}
              />
              <div className="lightbox-prev" onClick={prevImage}>
                &lsaquo;
              </div>
              <div className="lightbox-next" onClick={nextImage}>
                &rsaquo;
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewGallery;
