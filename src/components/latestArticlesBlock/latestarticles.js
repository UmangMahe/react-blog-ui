import { Component } from "react";
import Category2 from "../latestArticlesCategory2/category2";
import Sidebar from "../sidebar";
import './../styles/latest-articles.css'
import LatestArticlesRender from "./latestarticles-render";

class LatestArticles extends Component {

    state = {
        latestArticleBig: 1
    }

    

    render() {
        
        
        return(
            <div className="latestarticles-container">
                <div className="latestarticles">
                    {this.props.data.map((value, index) => {
                        if(index == 0){
                            return <LatestArticlesRender key={value.id} data={value} stateisBig={true}/>
                        }
                        else {
                            return <LatestArticlesRender key={value.id} data={value} stateisBig={false}/>
                        }
                        
                    })}
                    <div className="load-more">
                        <span>&darr;</span>
                        <p>Load More</p>
                        <span>&rarr;</span>
                        
                        
                    </div>

                    <Category2 />
                </div>


                
                <Sidebar />
            </div>
        )
    }
}

export default LatestArticles