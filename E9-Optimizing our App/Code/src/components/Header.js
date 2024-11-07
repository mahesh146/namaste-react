import logo from "../../assets/cheese.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
    let btn = "Login 0";
    const [btn2, setButton] = useState("Login");
    const onlineStatus = useOnlineStatus();

    console.log("full header component got rendered again");
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
        console.log("useEffect called 3");
    }, [btn2]);
    useEffect(() => {
        console.log("useEffect called");
    }, [btn2]); // if you add the value in dependency array header component gets rendered each time
    

    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src={logo} />
        </div>
        <div className="nav-items">
            <ul>
            <li>Online Status : {onlineStatus ? '🟢' : '🔴'}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to= "/about">About us</Link></li>
            <li ><Link to="/contact">Contact us </Link></li>
            <li><Link to ="">Cart</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            </ul>
            <button
            className="login-button"
            onClick={() => {
                btn2 === "Login" ? setButton("Logout") : setButton("Login");
            }}
            >
            {btn2}
            </button>
        </div>
        </div>
    );
    };

export default Header;
