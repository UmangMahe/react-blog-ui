import { Component } from "react";

class LatestArticlesRender extends Component{

    state = {
        item: this.props.data,
        isBig: this.props.stateisBig,
        class: "content small",
        dividerClass: "divider",
        dividerHide: false
        
    }

    componentDidMount() {
        if(this.state.isBig){
            this.setState({
                class: "content"
            })
        }

        if(this.props.dividerHide){
            this.setState({
                dividerClass: "divider hide"
            })
        }
        
    }
    render() {
        

        
        return(
            
            <>
            <hr className={this.state.dividerClass}></hr>
                        <div className={this.state.class}>
                            <img src={this.state.item.img}></img>
                            <div className="card-content">
                                <h2>{this.state.item.title}
                                </h2>
                                <p className="description">{this.state.item.desc}</p>
                                <div className="meta-container">
                                <span className="meta">
                                    <p className="type">{this.state.item['blog-type']}</p>
                                    <div className="date">
                                    <p>/</p>
                                    <p>{this.state.item.date}</p>
                                    </div>
                                    
                                </span>
                                </div>
                            </div>
                            
                        </div>
        </>
        )
    }
}

export default LatestArticlesRender