import "./App.css";
import { GenarateColor } from "./components/Color Genarator/GenarateColor";
import { ImageSlider } from "./components/ImageSlider/ImageSlider";
import { StarRating } from "./components/star-rating/StarRating";

function App() {
  return (
    <>
      {/* random color generator */}
      {/* <GenarateColor /> */}

      {/* star rating  */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image slider  */}
      <ImageSlider url={`https://picsum.photos/v2/list`} limit={"10"} />
    </>
  );
}

export default App;
