import { Component } from "react";
import logo from '../../assets/logos/logo.png'
import '../styles/nav-header.css'
class NavHeader extends Component{
    render(){
        return(
            <div className="nav-header-container">
                <div className="navbar">
                    <div className="logo">
                        <img src={logo} />
                    </div>
                    <button className="btn-cta">Get Started</button>
                </div>
                
            </div>
        )
    }
}

export default NavHeader