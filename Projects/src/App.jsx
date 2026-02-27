import "./App.css";
import { GenarateColor } from "./components/Color Genarator/GenarateColor";
import { ImageSlider } from "./components/ImageSlider/ImageSlider";
import { LoadMore } from "./components/LoadMore/LoadMore";
import { StarRating } from "./components/star-rating/StarRating";
import { TreeView } from "./components/TreeView/TreeView";
import menus from "./components/TreeView/data";

function App() {
  return (
    <>
      {/* random color generator */}
      {/* <GenarateColor /> */}

      {/* star rating  */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image slider  */}
      {/* <ImageSlider url={`https://picsum.photos/v2/list`} limit={"10"} /> */}

      {/* Load more products component  */}
      {/* <LoadMore /> */}

      {/* tree view /menu ui/ recursive menu */}
      <TreeView menus={menus} />
    </>
  );
}

export default App;
