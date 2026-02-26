import { useEffect, useState } from "react";
import "./style.css";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, []);

  if (loading) {
    return <div>Loading data... Please wait</div>;
  }
  if (errorMsg !== null) {
    return <div>Error Occurred</div>;
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="container">
      <GoArrowLeft className="arrow arrow-left" onClick={handlePrevious} />

      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <GoArrowRight className="arrow arrow-right" onClick={handleNext} />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((imageItem, index) => (
              <button
                key={imageItem.id}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};
