import logo from '../../assets/logo.svg';
import './App.css';

import React, {useState} from 'react';

import Title from '../../elements/Title';
import CuisineCard from '../../components/CuisineCard';

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
      <div className="Cuisines">
        {
          cuisine.cuisine.map((item, index) => {
            if (index < 5) {
              return (
                <div className="card" key={item}>
                <CuisineCard cuisine={item}/>
                </div>
              )
            } else {
              return;
            }
            
          })
        }
      </div>
      <Title />
      <div className="Cuisines">
        {
          cuisine.cuisine.map((item, index) => {
            if (index >= 5) {
              return (
                <div className="card" key={item}>
                <CuisineCard cuisine={item}/>
                </div>
              )
            } else {
              return;
            }
            
          })
        }
      </div>
    </div>
  );
}

export default App;
