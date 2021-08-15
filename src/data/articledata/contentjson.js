import { Component } from "react";
import LatestArticles from "../../components/latestArticlesBlock/latestarticles";
import LatestStories from "../../components/latestStories/latest-stories";
import TheLatest from "../../components/thelatest";
import DataJSON from './data.json'


class ContentJson extends Component {

    state = {
        subheading: this.props.subheading,
        dataJson: DataJSON,
        keyId: 0
    }

    
    
    
    render() {
        

        const checkHeading = (subheading) => {
            var data = [];
            
            this.state.dataJson.map(item => {
                if(item.subheading == subheading){
                    data.push(item);
                } 
            })
            return data;
        }

        let checkType = checkHeading(this.state.subheading)
        switch(this.state.subheading){
            case 'The Latest': 
            return <TheLatest data={checkType}/>
            case 'Latest Articles': return <LatestArticles data={checkType}/>;
            case 'Latest Stories': return <LatestStories data={
            checkType} />;
            default: return null;
        }
    }
}

export default ContentJson
