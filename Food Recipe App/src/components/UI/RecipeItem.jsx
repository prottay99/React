import { NavLink } from "react-router";

export const RecipeItem = ({ item }) => {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white cursor-pointer">
      <div className="h-40 justify-center overflow-hidden items-center rounded-xl">
        <img src={item?.image_url} alt="" />
      </div>
      <div>
        <h3 className="font-bold text-md">{item?.title}</h3>
        <span className="text-sm text-red-800 font-medium">
          {item?.publisher}
        </span>
      </div>
      <button>
        <NavLink
          to={`/recipe-item/${item?.id}`}
          className="btn bg-red-800 text-white py-2 px-5 rounded-sm"
        >
          Recipe Details
        </NavLink>
      </button>
    </div>
  );
};
