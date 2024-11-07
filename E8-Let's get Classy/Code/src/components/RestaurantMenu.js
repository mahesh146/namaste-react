import React from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  const {resId} = useParams(); //or simply const resId = useParams().resId; //when the resId value in the URL changes, the useParams hook will detect the change and trigger a re-render of the RestaurantMenu component. 
  //console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    // const data = await fetch(`${MENU_API}${resId}`); // this also works ✔️
    //console.log(data)

    const json = await data.json();
   // console.log(json);
    setRestaurantInfo(json.data);
  };

  
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
    <div className="menu">
        <h1>{name}</h1>
        <h2 style={{ display: 'inline-block'}}>{avgRatingString} ({totalRatingsString})</h2> 
        <h3 className="cost">{costForTwoMessage}</h3>
        <h3>{cuisines.join(', ')}</h3>
        <h2>Menu</h2>
        {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.defaultPrice}
          </li>
        ))} 
      </ul> */}
        <ul>
  {itemCards?.map((item) => (
    <li key={item.card.info.id}>
      {item.card.info.name} - ₹{item.card.info.price/100 || item.card.info.finalPrice||item.card.info.defaultPrice/100}
    </li>
  )) || <p>No menu items available</p>}
</ul>

      
    </div>
  );
};

export default RestaurantMenu;
