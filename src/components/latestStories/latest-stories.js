import { Component } from "react";
import LatestStoriesRender from "./latest-stories-render";
import './../styles/latest-stories.css'

class LatestStories extends Component{
    render(){
        return(
            <div className="responsive">
            <hr className="divider" />
            <div className="latest-stories-container">
                {this.props.data.map((item, index) => (
                    <LatestStoriesRender key={item.id} data={item} index={index}/>
                ))}
            </div>
            <hr className="divider" />
            <div className="load-more view-more">
                <p>View More</p>
                <span>&rarr;</span>
            </div>
            </div>
        )
    }
}

export default LatestStories