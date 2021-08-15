import { Component } from "react"
import MetaDisplay from "../meta-display"
class Article extends Component {

    state = {
        className: "column-image"
    }


    componentDidMount() {
        if(this.props.article.type == "small-image") {
            this.setState({
                className: "row-image-container"
            })
        }
        
    }

    
    render() {
        
        return(
            <div className={this.state.className}>
                <img src={this.props.article.img}></img>
                <span className="text-container">
                    <div className="title">
                        {this.props.article.title}
                    </div>
                                            
                    <MetaDisplay meta={this.props.article} />
                    <hr className="text-divider" />

                     
                                            
                </span>
                <div className="nav_dots">
                        <span className="dots"></span>
                        <span className="dots"></span>
                        <span className="dots"></span>
                        <span className="dots"></span>
                    </div>
            </div>
        )
    }
    
}

export default Article
    