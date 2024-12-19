
import resList from "../utils/mockData";
import { LOGO_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/context/UserContext";


const RestaurantCard = (props) =>{

    // const RestaurantCard = ({resName, cuisine}) => { //Another way where we are directly "destructuring on the fly" 
    //console.log(props); //JS object
    // const{resName, cuisine} = props; //short for const resName = props.resName; and const cuisine = props.cuisine;
    const {resName, cuisine} = props;
    const{ resData } = props;
    const{loggedInUser} =useContext(UserContext)
    const {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo} = resData?.info; //here 1️⃣'const { cloudinaryImageId } = resData?.info;' is same as 2️⃣'const cloudinaryImageId = resData.info.cloudinaryImageId' but with optional chaining ?., basically 1️⃣ is 2️⃣ with optional chaining ?. //similarly for these as well ---> name, cuisines, avgRatingString, costForTwo
    //?. optional chaining stops if value is null and avoids further errors
    return(
        <div className="m-4 p-4 w-[250px] rounded-xl bg-gray-200 hover:bg-gray-400">
            <img 
           className="rounded-3xl" alt="res-logo" src={LOGO_URL}
            />
            
            {/* <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes
            </h4> */}
        <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
      <h4>User : {loggedInUser}</h4>
        </div>
    )
};


export const withDiscountInfo = (WrappedComponent) => {
    return function WithDiscountInfo(props) {
      const { resData } = props;
      const discountInfo = resData?.info?.aggregatedDiscountInfoV3;
      
      return (
        <div className="relative">
          {discountInfo?.header && discountInfo?.subHeader && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-lg z-10">
              {discountInfo.header} {discountInfo.subHeader}
            </div>
          )}
          <WrappedComponent {...props} />
        </div>
      );
    };
  };

export default  RestaurantCard