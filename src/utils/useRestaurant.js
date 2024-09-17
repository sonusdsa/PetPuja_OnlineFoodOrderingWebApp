import { useState, useEffect } from "react";

const RestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState({});
  const [menuList, setMenuList] = useState({});
  //Get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.9462838&lng=83.5610119&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const json = await data.json();

    console.log(json?.data?.cards[2]?.card?.card?.info);
    setRestaurant(json?.data?.cards[2]?.card?.card?.info);

    const itemCards =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards;

    const infos = itemCards.map((itemCard, index) => {
      return itemCard?.card?.info;
    });

    console.log(infos);
    setMenuList(infos);
  }

  //return restaurant data
  return { restaurant, menuList };
};

export default RestaurantMenu;
