import { Component } from "react"
import Article from './article'
class FeaturedArticlesRender extends Component {

    render(){
        return(
            <>  
                {this.props.articleMain.map((item,index) => (
                    <Article key={index} article={item} />
                ))}
            </>
        )
    }
    
}

export default FeaturedArticlesRender