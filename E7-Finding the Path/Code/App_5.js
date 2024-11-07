import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body/>

      },
      {
        path: "/about",
        element:  <About/>
      },
    
      {
        path: "/contact",
        element:  <Contact/>
      },
      {
        path: "/restaurants/:resId", //":resId" will help us give a unique path to each restaurant, i.e. in this "/restaurants/:resId", ":resId" this part of the path is dynamic
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//root.render(jsxheading);
