import { Component } from "react";
import Spacer from "../../components/spacer";
import TagsJson from './../../data/tags.json'
import TagRender from "./additional/tag-render";
import FooterContent from "./footer/footer-content";
import shareIcon from '../../assets/icons/share.svg'
import clapsIcon from '../../assets/icons/clapping.png'
import avatar from '../../assets/icons/img_avatar.png'
import AuthorBox from "./additional/author-box";


class PostRender extends Component{

    state = {
        featuredImg: "/media/posts/react.png",
        otherImage: "/media/posts/react-code.png",
        tags: TagsJson,
        claps: 9300
    }

    clapsinDecimal=()=>{
        var claps = this.state.claps
        if(claps>999){
            return claps/1000+"K"
        }
        return claps
        
    }

    renderFooter=()=>{
        for(var i=0; i<3;i++){
            <FooterContent />
        }
    }

    render(){
        
        return(
            <>
            <div className="post-container">
                <div className="side-content">
                    <div className="claps-container"> 
                        <img className="claps-icon" src={clapsIcon} />
                        <div className="claps">
                            <span>{this.clapsinDecimal()}</span>
                           
                        </div>
                    </div>
                    <span>
                        <img src={shareIcon} />
                        <p>Share this article</p>
                    </span>
                </div>
                <div className="post">
                    <h3>5 Ways to animate a React app.</h3>
                    <AuthorBox avatar={avatar}/>
                    
                    <img className="featured-image" src={this.state.featuredImg}/>
                    <Spacer spacing={"30px"} />
                    <div className="post-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium pharetra interdum. Mauris interdum hendrerit sapien a elementum. Vivamus hendrerit sagittis hendrerit. Duis volutpat, quam et bibendum vehicula, enim dui rhoncus diam, eget laoreet nunc eros at leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lectus dui, ultrices eu rutrum et, convallis at dolor. Quisque ornare tristique lobortis. Aenean condimentum purus ligula, in sagittis nisi egestas vitae. </p>
                        <br />
                        <p>Let's Talk about them</p>
                        <br />
                        <img className="image" src={this.state.otherImage} />
                    </div>
                    <TagRender />
                    <div className="claps-container"> 
                        <img className="claps-icon" src={clapsIcon}/>
                        <div className="claps">
                            <span>{this.clapsinDecimal()}</span>
                            <span>claps</span>
                        </div>
                    </div>
                    <hr className="divider"/>
                    

                    <AuthorBox bottom={true} avatar={avatar}/>
                    <hr className="divider" />
                    
                </div>
            </div>
            <Spacer spacing={"20px"} />
            <div className="footer-block-container">
                <div className="footer-block">
                    <div className="heading">
                        <h3>More From The Siren</h3>
                        <hr className="divider"/>
                    </div>
                    <FooterContent />
                    <Spacer spacing={"60px"} />
                </div>
                
            </div>
            </>
        )
    }
}

export default PostRender 