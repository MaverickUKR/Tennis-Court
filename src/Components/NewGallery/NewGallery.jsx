// import React, { useState } from "react";
// import "./NewGallery.css"; // Make sure you create and import your CSS styles
// import photo1 from "../../assets/images/PhotoCarousel/court1.jpg";
// import photo2 from "../../assets/images/PhotoCarousel/court2.jpg";
// import photo3 from "../../assets/images/PhotoCarousel/court3.jpg";
// import photo4 from "../../assets/images/PhotoCarousel/court4.jpg";
// import photo5 from "../../assets/images/PhotoCarousel/court5.jpg";

// const images = [
//   {
//     src: `${photo1}`,
//     alt: "Image 1",
//   },
//   {
//     src: `${photo2}`,
//     alt: "Image 2",
//   },
//   {
//     src: `${photo3}`,
//     alt: "Image 3",
//   },
//   {
//     src: `${photo4}`,
//     alt: "Image 4",
//   },
//   {
//     src: `${photo5}`,
//     alt: "Image 5",
//   },
//   // Add more images as per your original gallery
// ];

// const LightboxGallery = () => {
//   const [lightboxVisible, setLightboxVisible] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const openLightbox = (index) => {
//     setLightboxVisible(true);
//     setCurrentIndex(index);
//   };

//   const closeLightbox = () => {
//     setLightboxVisible(false);
//   };

//   const slideImage = (direction) => {
//     let newIndex = currentIndex + direction;
//     if (newIndex < 0) {
//       newIndex = images.length - 1;
//     } else if (newIndex >= images.length) {
//       newIndex = 0;
//     }
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <div>
//       <div className="gallery-container">
//         {images.map((image, index) => (
//           <div
//             className="gallery-item"
//             key={index}
//             onClick={() => openLightbox(index)}
//           >
//             <img src={image.src} alt={image.alt} />
//           </div>
//         ))}
//       </div>

//       {lightboxVisible && (
//         <div className="lightbox" onClick={closeLightbox}>
//           <div
//             className="lightbox-content"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img
//               src={images[currentIndex].src}
//               alt={`Tennis ${currentIndex + 1}`}
//             />
//             <div className="lightbox-prev" onClick={() => slideImage(-1)}>
//               &lsaquo;
//             </div>
//             <div className="lightbox-next" onClick={() => slideImage(1)}>
//               &rsaquo;
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LightboxGallery;

import React, { useState } from "react";
import "./NewGallery.css"; // Assuming you have your CSS in NewGallery.css
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
  );
};

export default NewGallery;
