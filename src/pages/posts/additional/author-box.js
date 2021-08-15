import { Component } from "react";
import './author-box.css'

class AuthorBox extends Component {
    state = {
        avatar: this.props.avatar,
        className: "author-box-container",
        socialClass: "social-icons",
        writtenBy: "written-by disable"
    }


    componentDidMount(){
        if(this.props.bottom){
            var value=this.state.className
            this.setState({
                className: value.concat(" bottom"),
                socialClass: "social-icons disable",
                writtenBy: "written-by"
            })
        }
    }
    render(){
        return(
            <div className={this.state.className}>
                <div className="author-box">
                    <img src={this.state.avatar} />
                    <div className="post-meta-container">
                        <p className={this.state.writtenBy}>Written By</p>
                        <h6>Author Name</h6>
                        <p className="date">
                            <span>Aug 10, 2019</span> 
                            <span>&middot;</span>
                            <span>10 min read</span>
                        </p>
                    </div>
                </div>
                    <div className={this.state.socialClass}>   
                            <span className="fab fa-facebook"></span>
                            <span className="fab fa-twitter"></span>
                            <span className="fab fa-instagram"></span>
                            <span className="fab fa-youtube"></span>
                            
                    </div>
            </div>
        )
    }
}

export default AuthorBox