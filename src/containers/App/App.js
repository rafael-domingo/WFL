import logo from '../../assets/logo.svg';
import './App.css';

import React, {useState} from 'react';

import { Switch, Route } from "react-router-dom";
import CuisineList from '../CusineList';
import RestaurantDetail from '../RestaurantDetail';

function App() {
  const [cuisine, setCuisine] = React.useState({
    cuisine: [
      'hamburger',
      'pizza',
      'friedchicken',
      'vegetarian',
      'vegan',
      'fastfood',
      'seafood',
      'breakfast',
      'tacos',
      'asian'
    ]
  })

  
  
  return (
    <div className="App">
      <Switch>
            <Route exact path ='/' render={() => (
              <CuisineList cuisine={cuisine} />
            )}/>
            <Route exact path ='/restaurant' render={() => (
              <RestaurantDetail image={''} name={'smashburger'} address={'address'} phone={'225 585 4949'} rating={4.5} price={'$$'}/>
            )} />
        </Switch>
    </div>
  );
}

export default App;
