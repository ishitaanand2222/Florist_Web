import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from "./About";
import Contact from './Contact';
import Services from './Services';
import Shop from "./Shop";
import Home from './Home';
import Navbar from './Navbar';
import Background from "./Background";
import Header from "./Header";
import { Switch,Route,Redirect, BrowserRouter } from "react-router-dom";
import './index.css';

const Appp=()=>{
return(
  <>
  <Header/>
  <Navbar/>
  <Background/>
  <BrowserRouter>
  <Switch>
  <Route exact path="/" component={Home}/>
  <Route exact path="/about" component={About}/>
  <Route exact path="/shop" component={Shop}/>
  <Route exact path="/services" component={Services}/>
  <Route exact path="/contact" component={Contact}/>
  <Redirect to="/"/>
  </Switch>
  </BrowserRouter>
  </>
)
}

export default Appp;