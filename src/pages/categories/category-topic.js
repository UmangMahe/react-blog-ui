import {Component} from "react";
import LatestArticlesRender from "../../components/latestArticlesBlock/latestarticles-render";
import Sidebar from "../../components/sidebar";
import SubHeading from "../../components/subheading";
import ContentJson from '../../data/articledata/data.json'
import PageNotFound from "../page-not-found";
import '../../components/styles/category-page.css'

class CategoryTopic extends Component {
        
        constructor(props) {
            super(props);   
            this.state = {
                topic: this.props.match.params.topic.capitalize(),
                subheading: "",
                categoryData: [],
                isExist: false
            }
 
        }

        setDataforRender(topic){

            let data = []
            ContentJson.map(blog=>{
                if(topic === blog["blog-type"].capitalize()){
                    data.push(blog)
                } 
            })
            if(data.length){
                this.setState({
                    categoryData: data,
                    isExist:true,
                    subheading: topic.capitalize()
                })
            }
        }

        componentDidUpdate(prevProps){
            if(this.props.match.params.topic!==prevProps.match.params.topic){
                this.setState({
                    categoryData: [],
                    isExist: false,
                    subheading: ""
                })
                this.setDataforRender(this.props.match.params.topic.capitalize())
            } 
        }

        componentDidMount(){
            this.setDataforRender(this.state.topic)
        }
          
        render(){

            return(
                <div className="categorytopic-container">
                    <div className="categorytopic">
                        <SubHeading subheading={this.state.subheading}/>
                        <div className="category-content">
                            {this.state.isExist?(
                                
                                this.state.categoryData.map((item, index)=>{
                                    if(index==0){
                                        return <LatestArticlesRender key={index} data={item} stateisBig={false} dividerHide={true}/> 
                                    }
                                    else{
                                    return <LatestArticlesRender key={index} data={item} stateisBig={false}/> 
                                    }
                                })):<PageNotFound />}
                            {this.state.isExist?(<div className="load-more">
                                    <span>&darr;</span>
                                     <p>Load More</p>    
                                </div>):null}
                        </div>
                    </div>        
                <Sidebar />
                </div>
            )
        }

        
}



export default CategoryTopic