import { title } from "process";
import React from "react";
import ReactDOM from "react-dom/client";
import logo from './assets/cheese.png';

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - RestaurantContainer
 *  - RestaurantCard
 * 
 * Footer
 *  -Copyright
 *  - Links
 *  -Address
 *  - Contact
 * 
 * 
 */

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>

    )

}

//Direct Attack using style={{backgroundColor: "#f0f0f0"}}
const RestaurantCard = (props) =>{

    // const RestaurantCard = ({resName, cuisine}) => { //Another way where we are directly "destructuring on the fly" 
    console.log(props); //JS object
    // const{resName, cuisine} = props; //short for const resName = props.resName; and const cuisine = props.cuisine;
    const {resName, cuisine} = props;
    const{ resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRatingString, costForTwo} = resData?.info; //here 1️⃣'const { cloudinaryImageId } = resData?.info;' is same as 2️⃣'const cloudinaryImageId = resData.info.cloudinaryImageId' but with optional chaining ?., basically 1️⃣ is 2️⃣ with optional chaining ?. //similarly for these as well ---> name, cuisines, avgRatingString, costForTwo
    //?. optional chaining stops if value is null and avoids further errors
    return(
        <div className="res-card" style = {{backgroundColor:"#f0f0f0"}}>
            <img 
            className="res-logo" alt="res-logo" src="https://cdn.iconscout.com/icon/free/png-256/free-logo-1889525-1597585.png?f=webp"
            />
            
            {/* <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes
            </h4> */}

        <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} ⭐</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>

    )
}



const resList = [
    {
      "info": {
        "id": "595197",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Sanathnagar",
        "areaName": "Ameerpet",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4,
        "parentId": "721",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 59,
          "lastMileTravel": 8.7,
          "serviceability": "SERVICEABLE",
          "slaString": "55-60 mins",
          "lastMileTravelString": "8.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-26 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-513324d2-8490-4552-a726-37b5d276ca4b"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-sanathnagar-ameerpet-hyderabad-595197",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "107827",
        "name": "Asoka Restaurant",
        "cloudinaryImageId": "fegei0e2nqd7svcdpwa0",
        "locality": "Koti",
        "areaName": "Koti",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Hyderabadi",
          "Fast Food",
          "Tandoor",
          "Seafood",
          "Snacks"
        ],
        "avgRating": 4,
        "parentId": "19704",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 4.4,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-26 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-513324d2-8490-4552-a726-37b5d276ca4b"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/asoka-restaurant-koti-hyderabad-107827",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "214809",
        "name": "Hotel Niagara - Since 1969",
        "cloudinaryImageId": "btea7jwuwkbgd0nebcyd",
        "locality": "Malakpet",
        "areaName": "Chaderghat",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Biryani",
          "Kebabs",
          "Mughlai"
        ],
        "avgRating": 4.1,
        "parentId": "472356",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 4.8,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-26 05:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-513324d2-8490-4552-a726-37b5d276ca4b"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-niagara-since-1969-malakpet-chaderghat-hyderabad-214809",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "416258",
        "name": "Arabian shawarma Burger",
        "cloudinaryImageId": "dd504e757ecdcc4c025ee2b03325c371",
        "locality": "Somajiguda & Khairtabad",
        "areaName": "Nampally",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Arabian",
          "Lebanese"
        ],
        "avgRating": 4.3,
        "parentId": "231580",
        "avgRatingString": "4.3",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 36,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-26 06:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-513324d2-8490-4552-a726-37b5d276ca4b"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/arabian-shawarma-burger-somajiguda-and-khairtabad-nampally-hyderabad-416258",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "529455",
        "name": "65 Corner Fast Food",
        "cloudinaryImageId": "fjgcrldjhllwbkublukz",
        "locality": "Lakdi-Ka-Pul",
        "areaName": "Banjara Hills",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese"
        ],
        "avgRating": 3.8,
        "parentId": "318822",
        "avgRatingString": "3.8",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 3.6,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-26 04:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-513324d2-8490-4552-a726-37b5d276ca4b"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/65-corner-fast-food-lakdi-ka-pul-banjara-hills-hyderabad-529455",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "699984",
        "name": "Blue Sea Hotel",
        "cloudinaryImageId": "7d1095da1ce231831b22a5f0ddc43279",
        "locality": "Gunfoundry",
        "areaName": "Himayath Nagar",
        "costForTwo": "₹450 for two",
        "cuisines": [
          "Hyderabadi",
          "Snacks",
          "Seafood"
        ],
        "avgRating": 4.3,
        "parentId": "418272",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 1.9,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "1.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-26 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹50 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-513324d2-8490-4552-a726-37b5d276ca4b"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/blue-sea-hotel-gunfoundry-himayath-nagar-hyderabad-699984",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "83598",
        "name": "Sultan Darbar",
        "cloudinaryImageId": "bzhrjueur3fkldiryfdf",
        "locality": "Mehdipatnam",
        "areaName": "Mehdipatnam",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "Tandoor",
          "North Indian",
          "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "19769",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 5.7,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "5.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-26 04:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-513324d2-8490-4552-a726-37b5d276ca4b"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/sultan-darbar-mehdipatnam-hyderabad-83598",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "74646",
        "name": "Riyan Hotel",
        "cloudinaryImageId": "wmnrzs0vet0nxnatecy2",
        "locality": "Nampally",
        "areaName": "Masab Tank",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Hyderabadi",
          "Mughlai",
          "Biryani",
          "Indian",
          "Chinese"
        ],
        "avgRating": 4,
        "parentId": "19805",
        "avgRatingString": "4.0",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 4.4,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-01 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-513324d2-8490-4552-a726-37b5d276ca4b"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/riyan-hotel-nampally-masab-tank-hyderabad-74646",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "571427",
        "name": "Ghar Pakwan",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/5/8510bf64-f37c-4e6d-9df6-54e21699f18e_571427.jpg",
        "locality": "Azampura",
        "areaName": "Malakpet",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Hyderabadi",
          "Indian"
        ],
        "avgRating": 4.3,
        "parentId": "343051",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-06-02 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹50 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-513324d2-8490-4552-a726-37b5d276ca4b"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/ghar-pakwan-azampura-malakpet-hyderabad-571427",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "131870",
        "name": "4M Biryani House",
        "cloudinaryImageId": "o685uklvqias8ez1qgxz",
        "locality": "Musheerabad",
        "areaName": "Musheerabad",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "Tandoor",
          "Chinese"
        ],
        "avgRating": 4.3,
        "parentId": "19646",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-26 05:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹75 OFF",
          "subHeader": "ABOVE ₹299",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-dc3ff478-24e5-443a-9503-e19c423ef83b"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/4m-biryani-house-musheerabad-hyderabad-131870",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "437775",
        "name": "AL Madina Shawarma",
        "cloudinaryImageId": "qm53m1k7mtglpyvio4ox",
        "locality": "Himayath Nagar",
        "areaName": "Sahifa Masjid Circleno 4",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Lebanese"
        ],
        "avgRating": 4,
        "parentId": "29280",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 35,
          "lastMileTravel": 4.9,
          "serviceability": "SERVICEABLE",
          "slaString": "35-40 mins",
          "lastMileTravelString": "4.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-26 05:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-dc3ff478-24e5-443a-9503-e19c423ef83b"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/al-madina-shawarma-himayath-nagar-sahifa-masjid-circleno-4-hyderabad-437775",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "36263",
        "name": "Veggie Chinese",
        "cloudinaryImageId": "jl1hru4ngw8ft1kzic1i",
        "locality": "Hari Vihar Colony",
        "areaName": "Old Mla Quarters",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Chinese"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "6567",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-26 05:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-dc3ff478-24e5-443a-9503-e19c423ef83b"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/veggie-chinese-hari-vihar-colony-old-mla-quarters-hyderabad-36263",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "807453",
        "name": "Shawarma Express",
        "cloudinaryImageId": "b6fb5a0d41200a54b88be85c7d28185b",
        "locality": "Kachiguda Road",
        "areaName": "Himayath Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Fast Food"
        ],
        "avgRating": 3.9,
        "parentId": "5220",
        "avgRatingString": "3.9",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2024-05-26 05:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        "context": "seo-data-dc3ff478-24e5-443a-9503-e19c423ef83b"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/shawarma-express-kachiguda-road-himayath-nagar-hyderabad-807453",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ]

  //destructuring directly as "{resName, cuisine}" instead of using word "props"
// const RestaurantCard = ({resName, cuisine}) => {
//   return(
//     <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
//       <img
//         className="res_logo"
//         alt="res_food_image"
//         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xxg1pthsrrxpd83in6r3"
//       />
//       <h3>{resName}</h3>
//       <h4>{cuisine}</h4>
//       <h4>⭐ 4.5</h4>
//       <h4>20-25 min</h4>
//     </div>
//   )
// }


const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">


            {/* <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian"/>
            <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/> */}
             
             {
          resList.map((restaurant, index) => ( //written index just for reference to the below point
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/> //good convention: whenever doing a .map always put a key in the functional component below //good practise wrt React render cycle //important for optimization and efficiency
                                                                            //never use key={index}, not recommended - bad practice as per React documentation ~ for more info https://react.dev/learn/rendering-lists, https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/, https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
          //unique id as key (BEST option) >>> index as key (can be used but not recommended) >>> not using key (NOT acceptable)                                                                  
          ))  

          // resList.map((restaurant) => {
          //   return <RestaurantCard key={restaurant.info.id} resData={restaurant}/>  
          // })  
            }
           </div>

        </div>



    )
}


const AppLayout = () =>{


    return( <div className="app">
            <Header/>
            <Body/>
            </div>
    )

};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
//root.render(jsxheading); 