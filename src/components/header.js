import logo from './../assets/logos/logo.png'
import './styles/header.css'
import MenuLinks from '../data/menu-links.json'
import { BrowserRouter, Link, NavLink, useLocation} from 'react-router-dom'
import './styles/menu-links.css'
import { useState} from 'react'



const Header = () => {

    function hideMenu(){
        setMenuResp(menuResp+" hidden")
    }

    function showMenu() {
        let value = menuResp;
        if(value === "navigation"){
            setMenuResp(value+" responsive")
        }
        else if(value === "navigation responsive hidden"){
            setMenuResp("navigation responsive")
        }
        else {
            setMenuResp("navigation")
        }
        
    }
    
        if(useLocation().pathname == '/category/posts'){
            return null
        }

        let [menuResp, setMenuResp] = useState("navigation")

        
        return(
            
            <div className="header-container">
                <div className="header">
                <div className="logo">
                    <span>
                        <img src={logo} />
                    </span>
                </div>
                
                <div className="navigation-container">
                    <div className={menuResp}>
                    {MenuLinks.map((links, index)=>
                    (<span key={index}>
                    <NavLink activeClassName="active-link" key={index} to={links['url-alias']} onClick={hideMenu} exact>{links.name}</NavLink>
                    <hr className="divider" />
                    </span>
                    ))} 
                    </div>
                    
                    <a className="breadcrumb" onClick={showMenu}>
                    <i className="fa fa-bars"></i>
                    </a>
                </div>
                <hr className="divider"/>
                </div>
                
                
               
            </div>        
        )
    }

    
    



export default Header;