import { Component } from "react";
import MetaDisplay from "../meta-display";

class LatestStoriesRender extends Component {

    state = {
        dividerClass: "divider vertical"
    }

    componentDidMount(){
        if(this.props.index == 0){
            this.setState({
                dividerClass: "divider vertical hide"
            })
        }
    }

    render() {

        return(
            <div className="latest-stories">
                <hr className={this.state.dividerClass} />
                <div className="card-content">
                    <h2>{this.props.data.title}</h2>
                    <p className="description">{this.props.data.desc}</p>
                    <MetaDisplay meta={this.props.data} />
                </div>
                
            </div>
            
        )
    }
}

export default LatestStoriesRender;