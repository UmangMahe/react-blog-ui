import { Component } from "react"
import MetaDisplay from "../meta-display"

class TopPostsRender extends Component {

    state = {
        className: "top-posts",
        dividerClass: "divider",
        index: 0
    }

    

    componentDidMount(){

        if(this.props.data.top){
            let className = this.state.className
            this.setState({
                className: className.concat(" "+this.props.className),
                dividerClass: "divider hide"
            })
        }
    }

    

    

    render() {
        
        return(
            <>
            <hr className={this.state.dividerClass} />
            <div className={this.state.className}>
                    <img src={this.props.data.img}></img>
                    <div className="content-container">
                        <div>
                            <h2>{this.props.data.title}</h2>
                            <MetaDisplay meta={this.props.data} />
                        </div>
                        <p className="index">{this.props.index}</p>
                    </div>
                    
                    
                     
            </div>
            
            </>
        )
    }
    
    // let [class, setClass] = useState("");

    
}

export default TopPostsRender