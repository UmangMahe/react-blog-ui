import { Component } from "react";
import Header from './components/header'
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'
import './App.css'
import Home from "./pages/homepage";
import PageNotFound from "./pages/page-not-found";
import Category from "./pages/categories/category";
import CategoryTopic from "./pages/categories/category-topic";
import Posts from "./pages/posts/posts";


class App extends Component {


  state = {
    className: "App"
  }


  componentDidMount(){
    if(this.props.location.pathname == '/category/posts'){
      this.setState({
        className: "App max-width"
      })
    }
  }


  render() {
    String.prototype.capitalize = function(){
      return this.charAt(0).toUpperCase()+this.slice(1)
  }

  
  
    return(
      <div className = {this.state.className}>
         <BrowserRouter>
        
        <Header />

        <Switch>
          <Route path="/category/posts" component={Posts}/>
          <Route path="/category/:topic" component={CategoryTopic} />
          <Route path="/category" component={Category} />
          <Route path="/" component={Home} exact/>
          <Route component={PageNotFound}/>
        </Switch>
        
      </BrowserRouter>
      </div>

    )
  }

}

export default withRouter(App);