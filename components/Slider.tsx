/* eslint-disable @next/next/no-img-element */
import { images } from "@/utils/constants";
import { useEffect, useState } from "react";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const nextImage = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };

  const prevImage = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
        nextImage();
    }, 5000);
    return () => clearTimeout(timer);
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeImage]);

  return (
    <div className="slider relative w-full shadow-2xl rounded-2xl ">
      <div className="w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500">
        {images.map((image, indx) => {
          return (
            <div
              className={`${
                indx === activeImage ? "block w-full h-[60vh] object-cover transition-all duration-500 ease-in-out" : "hidden"
              }`}
              key={image.id}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          );
        })}
      </div>
      <button
        className="slider__button left-4 transform -translate-y-1/2 rounded-full p-2 w-10 h-10"
        onClick={prevImage}
      >
        {"<"}
      </button>
      <button
        className="slider__button right-4 transform -translate-y-1/2 rounded-full p-2 w-10 h-10"
        onClick={nextImage}
      >
        {">"}
      </button>
    </div>
  );
};

export default Slider;
