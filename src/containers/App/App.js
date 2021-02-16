import logo from '../../assets/logo.svg';
import './App.css';

import React, {useState} from 'react';

import CuisineCard from '../../components/CuisineCard';

function App() {
  const [state, setState] = React.useState({
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
      <div className="Cuisines">
        {
          state.cuisine.map(item => {
            console.log(item)
            return (
              <div className="card" key={item}>
              <CuisineCard cuisine={item}/>
              </div>
            )
          })
        }
      </div>
      <h1 style={{fontFamily: 'phosphate', fontSize: '5rem'}}>What's For Lunch</h1>
      <div className="Cuisines">
        {
          state.cuisine.map(item => {
            console.log(item)
            return (
              <div className="card" key={item}>
              <CuisineCard cuisine={item}/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
