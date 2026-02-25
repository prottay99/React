import "./App.css";
import { GenarateColor } from "./components/Color Genarator/GenarateColor";
import { StarRating } from "./components/star-rating/StarRating";

function App() {
  return (
    <>
      {/* random color generator */}
      {/* <GenarateColor /> */}

      <StarRating noOfStars={10} />
    </>
  );
}

export default App;
