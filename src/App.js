import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Cart from './components/cart/Cart';
import Default from './components/Default';
import Details from './components/Details';

import ProductList from './components/ProductList';
import Modal from './components/Modal'




class App extends Component{
  render () {
    return(
      <React.Fragment>
       <NavBar></NavBar>
       <Switch>
         <Route exact path="/" component={ProductList} />
        <Route path="/Details" component={Details} />
         <Route path="/Cart" component={Cart} />
         <Route  component={Default} />
       </Switch>
       <Modal />
    </React.Fragment>
    );
  }
}

export default App;
