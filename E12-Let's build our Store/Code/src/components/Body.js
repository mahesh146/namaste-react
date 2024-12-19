import RestaurantCard,{withDiscountInfo} from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import mock from "../utils/mock.json";
import {Link} from "react-router-dom"
import UserContext from "../utils/context/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  //console.log({listOfRestaurants})
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardWithDiscount = withDiscountInfo(RestaurantCard);
  const [noTopRatedMessage, setNoTopRatedMessage] = useState("");
  const  { setUserName, loggedInUser } = useContext(UserContext);

  // Whenever state variables get updated (here 'listOfRestaurants' and 'searchText' are state variables), react triggers a reconciliation cycle i.e. react re-renders the component again
 // console.log("full body component got rendered again");

  //useEffect hook gets triggered after initial render i.e after <Shimmer/> gets displayed
  useEffect(() => {
    // console.log("useEffect called 3")
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    // await new Promise(resolve => setTimeout(resolve, 1000));

    // const json = mock;


    //use in case of trying to bypass cors without using cors chrome plugin
    const data = await fetch(
      "https://corsproxy.io?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    
    //console.log(data);
    
    const json = await data.json();
    //console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // ⬇️ Conditional Rendering ⬇️
  // if(listOfRestaurants.length === 0){
  //   return <h1>Loading......please be patient 1 ❤️</h1>
  //   return <Shimmer/>
  // }
  // console.log("Body rendered 1");
  return( listOfRestaurants.length === 0 ? (<Shimmer/>) : (
    <div className="body">
      {/* {  console.log("Body rendered 2") } */}
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input 
            type="text" 
            className="border border-solid border-black"  
            placeholder="Search a restaurant" 
            value={searchText} 
            onChange={(event) => {
              setSearchText(event.target.value);
              // console.log(event.target.value)
            }}
          />

          <button  className="px-4 py-2 bg-orange-400 m-4 rounded-full"
            onClick={() => {
              // Filter the restaurant cards and update the UI accordingly
              // console.log(searchText);
              if (!searchText) {
                // Display popup if searchText is empty
                alert("Please enter a restaurant name!");
              }
              const filteredRestaurant = listOfRestaurants.filter((restaurant) => 
                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
              filteredRestaurant.length === 0 ? alert("Restaurant not found") : setFilteredRestaurant(filteredRestaurant);
              // filteredRestaurant.length === 0 ? (setFilteredRestaurant([]), alert("Restaurant not found")) : setFilteredRestaurant(filteredRestaurant);
            }}
          >Search</button>
        </div>

       <div className="search m-4 p-4 flex items-center"> <button 
          className="px-4 py-2 bg-gray-100 rounded-lg" 
          onClick={() => {
            //Filter logic here ⬇️
            const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating >= 4.5)
            setFilteredRestaurant(filteredList);
            setNoTopRatedMessage(filteredList.length === 0 ? "No top-rated restaurants available" : "");
          }}
        > Top Rated Restaurants
        </button>
        </div>

       < div className="ml-28">
            <label>UserName : </label>
            <input 
              className="border border-black p-2"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
    </div>




    {noTopRatedMessage && <p className="m-4 p-4 text-red-500">{noTopRatedMessage}</p>}
      <div className="flex flex-wrap">
        {/* {
          filteredRestaurant.map((restaurant, index) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>        
          ))} */}

{filteredRestaurant.map((restaurant, index) => {
    //console.log("Aggregated Discount Info:", restaurant.info?.aggregatedDiscountInfoV3); // Log the info
    return (
      <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
        {restaurant.info?.aggregatedDiscountInfoV3?.header && restaurant.info?.aggregatedDiscountInfoV3?.subHeader ? (
          < RestaurantCardWithDiscount resData={restaurant} />
        ) : (
          <RestaurantCard resData={restaurant} />
        )}
      </Link>
    );
  })}
      </div>
    </div>
  ))
}

export default Body