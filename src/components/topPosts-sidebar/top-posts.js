import { Component } from "react";

import TopPostsJSON from './../../data/articledata/top-posts.json'
import TopPostsRender from "./top-posts-render";
import './../styles/top-posts.css'

class TopPosts extends Component {

    state = {
        topPostsJson: TopPostsJSON,
        topArticle: [],
        normalArticle: []
    }

    
    constructor(){
        super();
        this.top = []
        this.normal=[]
        TopPostsJSON.map((item)=>{
            if(item.top)
                this.top.push(item)
            else
                this.normal.push(item)
        })        
    }

    componentDidMount(){
        this.setState({
            topArticle: this.top,
            normalArticle: this.normal
        })
    }


    
    render(){


        return(
            <div className="top-posts-container">
                {this.state.topArticle.map((item, index)=>{
                    return <TopPostsRender key={index} data={item} index={1} className={"column"}/>
                })}
                {this.state.normalArticle.map((item, index) => {
                        return <TopPostsRender key={index} data={item} index={index+2}/>
                    })}
                
            </div>
        )
    }
}

export default TopPosts