import { Component } from "react";
import NavHeader from "../../components/nav-header/nav-header";
import PostRender from "./post-render";
import './posts.css'
class Posts extends Component {
    render(){
        return(
            <div>
                <NavHeader />
                <PostRender />
                
            </div>
        )
    }
}

export default Posts