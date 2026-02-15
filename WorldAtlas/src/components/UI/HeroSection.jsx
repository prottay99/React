import { FaArrowRightLong } from "react-icons/fa6";

export const HeroSection = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World, One Country at a Time.
          </h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and fillter through countries to find the details you need.
          </p>
          <button className="btn btn-darken">
            Start Exploring <FaArrowRightLong />
          </button>
        </div>
        <div className="hero-img">
          <img
            src="/images/world_atlas.png"
            alt="hero image"
            className="banner-img"
          />
        </div>
      </div>
    </main>
  );
};
