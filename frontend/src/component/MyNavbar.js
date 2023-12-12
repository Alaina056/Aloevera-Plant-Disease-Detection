import { React, Component } from "react";
import "./MyNavbarStyles.css";


class MyNavbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbarLogo">AloeVera Plant Disease Detection</h1>
            </nav>

        )
    }
}

export default MyNavbar;