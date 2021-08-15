import { Component } from "react";
import MetaDisplay from "../meta-display";
import './../styles/category2.css'


class Category2 extends Component{
    render(){
        
        let data = {
            date: "August 12 2017",
            'blog-type': "Travel" 
        }
        return(
            
            <div style={{backgroundImage: 'url("/media/articles/vertical-gallery-cover.jpg")'}} className="category2-container">
                <div className="category2">
                    <h2>Title of vertical gallery</h2>
                    <MetaDisplay meta={data}/>
                    <div className="navigation">
                        <span>&larr;</span>
                        <span>&rarr;</span>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Category2