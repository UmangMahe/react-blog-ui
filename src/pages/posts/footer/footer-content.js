import { Component } from 'react'
import FooterContentJSON from '../../../data/footer-content.json'
import '../footer/footer-content.css'

class FooterContent extends Component {


    state = {
        content: FooterContentJSON,
    }
    
    spliceDate=(date)=>{
        var arrayDate = date.split(",")
        return arrayDate[0]
    }

    

    render(){
        
        return(
            <>
            <div className="footer-content-container">
                {this.state.content.map((item, index)=>(
                    <div key={index} className="footer-content">
                        
                        <p>{item.context}</p>
                        <img className="content-img" src={item.img} />
                        <div className="content">
                        <h2>{item.title}</h2>
                        <div className="author-box">
                            <img src={item['author-img']} />
                            <div className="post-meta-container">
                                <h6>{item.author}</h6>
                                <p className="date">
                                    <span>{this.spliceDate(item.date)}</span> 
                                    <span>&middot;</span>
                                    <span>{item.readtime} read</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            
            </>
        )
    }
    
}

export default FooterContent