import React, { lazy, Suspense, useState, useEffect ,useContext} from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Grocery from "./src/components/GroceryApp/Grocery";
import UserContext from "./src/utils/context/UserContext";
import Loading from "./src/components/Loading";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";
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

//Chunking / Code Splitting / Dynamic Bundling / Dynamic imports / Lazy Loading / On demand Loading - these are all different names for the same process and the process is to break down our app in smaller logical chunks
//MakeMyTrip Website - Logical separation of bundles example
//in our app we use Lazy Loading/On demand Loading for loading GroceryApp folder (contains all components related to grocery) only when we click on Grocery, i.e initially when the page loads, it will not include GroceryApp into our bundle JS file that we provide to our browser, only when I navigate to GroceryApp by clikcing on 'Grocery' button on the header, the GroceryApp folder will get loaded into the browser as a separate bundle
//Lazy loading the GroceryApp component is an excellent strategy to improve initial load times for your application, this approach is particularly useful in bigger codebases or websites with multiple distinct sections where we have a lot of components involved Eg. MakeMytrip website(separate bundle for Trains, Hotels, Flights..etc), Swiggy Website(separate bundle for Swiggy Instamart)
//How SPA(loads everything together) and Lazy Loading(loads as per requirement) Work Together

//Lazy Loading GroceryApp (folder containing all grocery related components)
const Grocery2 = lazy(() => import("./src/components/GroceryApp/Grocery")); //importing Grocery in a 'LAZY' way where Grocery will be sent to the browser as a separate bundle (and not gets included together with the Food App bundle)
const About = lazy(() => import("./src/components/About"));

const AppLayout = () => {
  const { loggedInUser } = useContext(UserContext);
  const [userName, setUserName] = useState(loggedInUser); //set initial value as loggedInUser as given in UserContext.jsx

  useEffect(() => {
    //Make API call do authentication if username password verify go below

    //afer autentication passed
    setTimeout(() => {
      const data = {
        name: "Mahesh Super Star",
      };
      setUserName(data.name);
    }, 4000);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          {/* <UserContext.Provider value={{loggedInUser: 'Elon Musk'}}>*/}{" "}
          {/* NESTED CONTEXT concept: here wrapping only header case: changes made in UserContext.Provider will only get reflected in Header, can also give different value here than the above UserContext.Provider */}
          <Header />
          {/* </UserContext.Provider> */}
          <Outlet />
        </div>
      </UserContext.Provider>
      </Provider>
  
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        // element:  <About/>
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        // element: <Grocery/> //normal loading when GroceryApp in same bundle
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Grocery />
          </Suspense>
        ), //lazy loading when GroceryApp is sent in a separate bundle //Loading... will be visible as fallback UI until <Grocery2/> gets fetched //By wrapping the <Grocery2/> component within a Suspense component with a fallback UI, you ensure a smooth user experience while the <Grocery2/> component is being fetched.
      },
      {
        path: "/restaurants/:resId", //":resId" will help us give a unique path to each restaurant, i.e. in this "/restaurants/:resId", ":resId" this part of the path is dynamic
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },

    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//root.render(jsxheading);
