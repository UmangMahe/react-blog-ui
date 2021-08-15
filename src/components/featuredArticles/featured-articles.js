import './../styles/featured-articles.css'
import latestArticlesJSON from '../../data/latestarticles.json'
import { Component } from 'react';
import FeaturedArticlesRender from './featured-articles-render';

class FeaturedArticles extends Component {
    state = {
        latestArticles: latestArticlesJSON,
        bigImageArticle: [],
        smallImageArticle: []
    }

    constructor(){
        super();
        this.state.latestArticles.map((item)=>{
            if(item.type=="main-image"){
                this.state.bigImageArticle.push(item);

            }
            else if(item.type=="small-image") {
                this.state.smallImageArticle.push(item)
            }
        })
    }

    
    render() {
        
        
        
        return(
            <>
                <div className="component-container">
                    <div className="big">
                        <FeaturedArticlesRender articleMain={this.state.bigImageArticle} />
                    </div>
                    <div className="small">
                        <FeaturedArticlesRender articleMain={this.state.smallImageArticle} />
                    </div> 
                </div>
                
                
            </>
        )
    }
    }   
    

export default FeaturedArticles;
