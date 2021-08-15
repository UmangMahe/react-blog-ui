import { Component } from "react";
import SubHeading from "../components/subheading";
import SubHeadingJSON from '../data/subheading.json'
import ContentJson from '../data/articledata/contentjson'
import Spacer from "../components/spacer";
import FeaturedArticles from "../components/featuredArticles/featured-articles";

class Home extends Component {
    state = {
        subHeadingJson: SubHeadingJSON,
    }


    render(){
        return(
            <>
            
            <FeaturedArticles />
            {this.state.subHeadingJson.map(item => (
            <div key={item.id}>
                <Spacer />
                <SubHeading subheading={item.subheading}/>
                <ContentJson subheading={item.subheading} />
                </div>
            ))}
            </>
        )
    }
}

export default Home