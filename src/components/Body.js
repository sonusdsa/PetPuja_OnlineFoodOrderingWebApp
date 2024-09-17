import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { SWIGGY_API } from "../Constants";

// Body Component for body section: It contains all restaurant cards
const Body = () => {
  const { user, setUser } = useContext(UserContext);
  // useState: To create state variables
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <h1 className="text-center text-red-500">
        Offline, please check your internet connection!
      </h1>
    );
  }

  // Conditional Rendering
  // if restaurant list is empty => shimmer UI
  // if restaurant list has data => actual data UI
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center items-center my-4">
        <input
          data-testid="search-input"
          type="text"
          className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          data-testid="search-btn"
          className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state of restaurants list
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-center" data-testid="res-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
              className="flex justify-center"
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
