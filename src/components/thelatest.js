import { Component } from "react";
import MetaDisplay from "./meta-display";
import './styles/thelatest.css'

class TheLatest extends Component {
    render() {
        // console.log(this.props.data)
        return(
            <div className="thelatest-container">
            {this.props.data.map(item=>(
                <div className="thelatest" key={item.id}>
                    <img src={item.img} />
                    <div className="card-content">
                        <h2>{item.title}</h2>
                        <p className="description">{item.desc}</p>
                        <MetaDisplay meta={item} />
                    </div>
                    
                </div>
            ))}
        
            </div>
        )
    }
}

export default TheLatest