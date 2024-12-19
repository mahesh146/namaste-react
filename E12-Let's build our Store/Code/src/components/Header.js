import logo from "../../assets/cheese.png";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/context/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  let btn = "Login 0";
  const [btn2, setButton] = useState("Login");
  const onlineStatus = useOnlineStatus();

  //console.log("full header component got rendered again");
  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useeffect is called on initial render

  // 3 cases of useEffect
  //1) no dependency array [] => hence useEffect is called on every component render
  //2) if dependency array is empty = [] => useEffect is called on initial render(just once)
  //3) if we put somthing inside the dependency array = [btn2] => then useEffect will omly be called when the dependency changes i.e. here useEffect is called everytime btn2 is updated
  useEffect(() => {
    // console.log("useEffect called 1")
  }); //no dependency array [], hence useEffect hook will get triggered each time my Header component is rendered on the UI

  useEffect(() => {
    // console.log("useEffect called 2")
  }, []); //empty dependency array [], hence useEffect hook will get triggered just once only when my Header component is rendered for the first time

  useEffect(() => {
    //console.log("useEffect called 3");
  }, [btn2]);
  useEffect(() => {
    //console.log("useEffect called");
  }, [btn2]); // if you add the value in dependency array header component gets rendered each time
  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img className="w-56" src={logo} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us </Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart 🛒 ({cartItems.length} items)</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
        <button
          className="login-button"
          onClick={() => {
            btn2 === "Login" ? setButton("Logout") : setButton("Login");
          }}
        >
          {btn2}
        </button>
        <li className="px-4 font-bold">{loggedInUser}</li>
      </div>
    </div>
  );
};

export default Header;
