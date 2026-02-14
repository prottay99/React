import { FaArrowRightLong } from "react-icons/fa6";

export const Home = () => {
  return (
    <main className="hero-section main">
      <div className="container gird grid-two-cols">
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
        <div className="hero-image"></div>
      </div>
    </main>
  );
};
