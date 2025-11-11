import "./App.css";
import Heading from "./components/Heading/Heading";
import Container from "./components/Container/Container";
import FoodItems from "./components/FoodItems/FoodItems";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  let foodItems = [];
  return (
    <>
      <Container>
        <Heading />
        <FoodItems items={foodItems} />
        <ErrorMessage items={foodItems} />
      </Container>
    </>
  );
}

export default App;
