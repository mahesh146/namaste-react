import React from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  // const [restaurantInfo, setRestaurantInfo] = useState(null); //so this will become redundant now as we are fetching data in the useRestaurantMenu hook now so we will use this same state variable in useRestaurantMenu.jsx hook now

  const {resId} = useParams(); //or simply const resId = useParams().resId; //when the resId value in the URL changes, the useParams hook will detect the change and trigger a re-render of the RestaurantMenu component. 
  //console.log(resId);




   //our custom hook #1 - useRestaurantMenu() hook
   const restaurantInfo = useRestaurantMenu(resId);
   console.log(restaurantInfo); //initially restaurantInfo value will be null
 
   // will be reduntant
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   // const data = await fetch(`${MENU_API}${resId}`); // this also works ✔️
  //   //console.log(data)

  //   const json = await data.json();
  //  // console.log(json);
  //   setRestaurantInfo(json.data);
  // };

  
  if (restaurantInfo === null) return <Shimmer />;
// const name = restaurantInfo?.cards[2]?.card?.card?.info.name;
  // const cuisines = restaurantInfo?.cards[2]?.card?.card?.info.cuisines;
  // const costForTwoMessage = restaurantInfo?.cards[2]?.card?.card?.info.costForTwoMessage;
   // const { name, cuisines, costForTwoMessage } = restaurantInfo?.cards[2]?.card?.card?.info; //const name = restaurantInfo?.cards[2]?.card?.card?.info.name  //but this is ❌ not working so we provide an extra '|| {}'
   const { name, cuisines, costForTwoMessage, totalRatingsString, avgRatingString, avgRating } = restaurantInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
  //console.log(name);
  console.log(itemCards)

  return (
    <div className="menu p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-2 text-gray-800">{name}</h1>
        <h2 className="text-lg text-gray-600 inline-block mb-2">{avgRatingString} ({totalRatingsString})</h2>
        {/* <h2 style={{ display: 'inline-block'}}>{avgRatingString} ({totalRatingsString})</h2>  */}
        <h3 className="cost text-xl font-semibold text-gray-700">{costForTwoMessage}</h3>
        <h3 className="text-blue-600-600 mb-4">{cuisines.join(', ')}</h3>
        <h2 className="text-xl font-bold mt-6 mb-2 text-gray-800">Menu</h2>
        {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.defaultPrice}
          </li>
        ))} 
      </ul> */}
        <ul className="list-disc pl-5">
  {itemCards?.map((item) => (
    <li key={item.card.info.id} className="mb-2 text-gray-700">
      {item.card.info.name} - ₹{item.card.info.price/100 || item.card.info.finalPrice||item.card.info.defaultPrice/100}
    </li>
  )) || <p className="text-red-500">No menu items available</p>}
</ul>

      
    </div>
  );
};

export default RestaurantMenu;
