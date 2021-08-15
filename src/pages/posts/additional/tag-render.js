import { Component } from "react";
import './tags.css'
import TagsJson from '../../../data/tags.json'
class TagRender extends Component{
    state = {
        tags: TagsJson
    }
    render(){
        
        return(
            <div className="tags-container">
                {this.state.tags.map((item, index)=>{
                    return(
                    <div key={index} className="tag">
                        <span>{item.tag}</span>
                    </div>)
                })}
            </div>
        )
    }
}

export default TagRender