

    import logo from '../../assets/cheese.png';
    import { useState } from 'react';
    const Header = () =>{

        let btn = "Login 0";
        const [btn2, setButton] = useState("Login");
        console.log("full header component got rendered again");
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
                    <button className="login-button" onClick={() => {
                    btn2 === "Login" ? setButton("Logout") : setButton("Login")
                  }}>{btn2}</button>
                </div>

            </div>

        )

    }


    export default Header;