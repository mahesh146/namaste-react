

import logo from '../../assets/cheese.png';

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


export default Header;