import { Component } from "react";

import './styles/sub-heading.css'

class SubHeading extends Component {
    render() {


        return(
            <>
            <div className="container">
                <h2 className="sub-heading">{this.props.subheading}</h2>
                <hr className="divider"/>
            </div>
            </>
        )
    }
}

export default SubHeading