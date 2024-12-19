import React from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
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
  const [showIndex, setShowIndex] = useState(null);
  if (restaurantInfo === null) return <Shimmer />;
// const name = restaurantInfo?.cards[2]?.card?.card?.info.name;
  // const cuisines = restaurantInfo?.cards[2]?.card?.card?.info.cuisines;
  // const costForTwoMessage = restaurantInfo?.cards[2]?.card?.card?.info.costForTwoMessage;
   // const { name, cuisines, costForTwoMessage } = restaurantInfo?.cards[2]?.card?.card?.info; //const name = restaurantInfo?.cards[2]?.card?.card?.info.name  //but this is ❌ not working so we provide an extra '|| {}'
   const { name, cuisines, costForTwoMessage, totalRatingsString, avgRatingString, avgRating } = restaurantInfo?.cards[2]?.card?.card?.info || {};
  const { itemCards} = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || {};
  //console.log(name);
  //console.log("itemcards:",restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  const categories = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
  
    (c) => 
      c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

  );
  //console.log("categories:", categories)

  return (
    <div className="text-center">
        <h1 className="font-bold my-2 text-2xl">{name}</h1>
       <div  className="flex justify-center my-2"> 
        <h2 className="px-2">{avgRatingString} ({totalRatingsString})</h2>
        <h2 className="cost text-l font-semibold text-gray-700">{costForTwoMessage}</h2>  
      </div>
      <p className="font-bold text-lg text-gray-800">{cuisines.join(', ')} </p>
        <h2 className= "font-bold text-gray-700">Menu</h2>

        {/* categories accordions */}
        {categories?.map((category, index) => (
        <RestaurantCategory data={category?.card?.card}
        key={category?.card?.card?.title}
        showItems={index === showIndex } 
        setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          
        />
      ))}

    </div>
  );

};

export default RestaurantMenu;
