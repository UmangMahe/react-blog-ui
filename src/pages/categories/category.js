import { Component } from "react"
import Sidebar from "../../components/sidebar"

class Category extends Component {
    render(){
        console.log(this.props)
        return(
            <>
            <h1>Categories</h1>
            <Sidebar />
            </>
        )
    }
}

export default Category