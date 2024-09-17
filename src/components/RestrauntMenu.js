import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../Constants";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurant, menuList } = useRestaurant(id);

  const dispatch = useDispatch();

  const handleAddItem = (menu) => {
    dispatch(addItem(menu));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/3">
          <img
            className="w-full h-full object-cover"
            src={IMG_CDN_URL + restaurant.cloudinaryImageId}
            alt={restaurant?.name}
          />
        </div>
        <div className="md:w-2/3 p-4">
          <h1 className="text-2xl font-bold">{restaurant?.name}</h1>
          <p className="text-gray-600">{restaurant?.city}</p>
        </div>
      </div>

      <div className="mt-6 bg-white shadow-lg rounded-lg p-4">
        <h1 className="text-xl font-semibold mb-4">Menu</h1>
        <ul className="flex flex-col gap-4" data-testid="menu">
          {Object.values(menuList).map((menu) => (
            <li
              key={menu?.id}
              className="flex font-semibold justify-between p-2 border rounded"
            >
              {menu?.name}
              <button
                data-testid="addBtn"
                className="p-2 font-bold rounded bg-green-200 cursor-pointer"
                onClick={() => handleAddItem(menu)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
