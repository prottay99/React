import { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router";
import { GlobalContext } from "../context";
import { FaCircle } from "react-icons/fa";

export const Details = () => {
  const params = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorite,
    favoritesList,
  } = useContext(GlobalContext);

  const getRecipeDetails = async () => {
    try {
      const res = await fetch(
        `https://forkify-api.jonas.io/api/v2/recipes/${params.id}`,
      );
      const result = await res.json();
      setRecipeDetailsData(result?.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-150 overflow-hidden rounded-xl group">
          <NavLink to="/" className="mb-5">
            Go Back
          </NavLink>
          <img
            src={recipeDetailsData?.recipe?.image_url}
            alt=""
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
        <div>
          <h5>
            Published By:{" "}
            <span className="text-red-500 font-bold">
              {recipeDetailsData?.recipe?.publisher}
            </span>
          </h5>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-4xl leading-[126%] font-bold text-red-800">
          {recipeDetailsData?.recipe?.title}
        </h2>
        <button
          className="px-5 py-2 bg-black text-white cursor-pointer rounded-lg w-max"
          onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
        >
          {favoritesList &&
          favoritesList.findIndex(
            (item) => item.id === recipeDetailsData?.recipe?.id,
          ) !== -1
            ? "Remove from Favorites"
            : "Add to Favorites"}
        </button>
        <div>
          <h3 className="text-2xl font-bold underline underline-offset-6 mb-3">
            Ingredients:
          </h3>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe?.ingredients?.map((item, index) => {
              return (
                <li key={index} className="flex gap-2 items-center">
                  <FaCircle />
                  <span className="text-xl font-500">
                    {item.quantity} {item.unit} {item.description}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
