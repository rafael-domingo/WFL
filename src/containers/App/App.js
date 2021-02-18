import logo from '../../assets/logo.svg';
import './App.css';

import React, {useState} from 'react';

import { Switch, Route } from "react-router-dom";
import CuisineList from '../CusineList';
import RestaurantDetail from '../RestaurantDetail';
import Title from '../../elements/Title';

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
    ]})

    const [restaurantList, setRestaurantList] = React.useState({
          hamburger: {
          name: 'Fat Cow',
          address: '4350 Highland Rd Ste B1, Baton Rouge, LA 70808',
          phone: '(225) 761-9272',
          rating: '3.5',
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/jBQOg7ukrq6n_u_KihLj9A/l.jpg',
          price: '$$',
          link: 'https://www.yelp.com/biz/fat-cow-burgers-and-salads-baton-rouge?osq=fat+cow'
        },
         pizza: {
           name: 'Rocca Pizzeria',
           address: '3897 Government St, Baton Rouge, LA 70806',
           phone: '(225) 478-1286',
           rating: '4',
           image: 'https://s3-media0.fl.yelpcdn.com/bphoto/Zb8wkCjGX3lGGHBM5CNGvQ/l.jpg',
           price: '$$',
           link: 'https://www.yelp.com/biz/rocca-pizzeria-baton-rouge'
        },
        friedchicken: {
          name: 'The Blue Store',
          address: '12222 Plank Rd, Baton Rouge, LA 70811',
          phone: '(225) 448-3600',
          rating: '4.5',
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/YSnjT4k1SaRiiBm8rLZ-cQ/l.jpg',
          price: '$',
          link: 'https://www.yelp.com/biz/the-blue-store-baton-rouge'
        },
        vegetarian: {
          name: `MJ's Cafe`,
          address: '5162 Government st, Baton Rouge, LA 70806',
          phone: '(225) 412-4803',
          rating: '4.5',
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/N4HTiSPptlZxB3EiJiO1Yw/l.jpg',
          price: '$$',
          link: 'https://www.yelp.com/biz/mjs-cafe-baton-rouge?osq=vegetarian'
        },
        vegan: {
          name: 'Vegan Friendly Foods',
          address: '4608 Bennington Ave, Baton Rouge, LA 70808',
          phone: '(225) 246-8391',
          rating: '4.5',
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/7qd2XG2XGGyOj0vyx80olg/l.jpg',
          price: '$$',
          link: 'https://www.yelp.com/biz/vegan-friendly-foods-baton-rouge?osq=vegan'
        },
        fastfood: {
          name: 'MOOYAH Burgers, Fries & Shakes',
          address: '6555 Siegen Ln Ste 6, Baton Rouge, LA 70809',
          phone: '(225) 256-1350',
          rating: '4',
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/cYfiAqJeyTrBHiUNHr8DTw/l.jpg',
          price: '$',
          link: 'https://www.yelp.com/biz/mooyah-burgers-fries-and-shakes-baton-rouge'
        },
        seafood: {
          name: 'Beausoileil Coastal Cuisine',
          address: '7731 Jefferson Hwy, Baton Rouge, LA 70809',
          phone: '(225) 926-1172',
          rating: '4',
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/RHLxa-ye5jsTrN6od5EaOA/l.jpg',
          price: '$$',
          link: 'https://www.yelp.com/biz/beausoleil-coastal-cuisine-baton-rouge'
        },
        breakfast: {
          name: 'Batch 13 Biscuits & Bowls',
          address: '555 Lafayette St, Baton Rouge, LA 70801',
          phone: '(225) 424-6801',
          rating: '4.5',
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/jPstF92h6jW6w9wujxZ3lg/l.jpg',
          price: '$$',
          link: 'https://www.yelp.com/biz/batch-13-biscuits-and-bowls-baton-rouge-2?osq=breakfast'
        },
        tacos: {
          name: `Gov't Taco`,
          address: '5621 Government St, Baton Rouge, LA 70806',
          phone: '(225) 256-7651',
          rating: '4',
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/lNb0desIhrhc-IlFNC0kVQ/l.jpg',
          price: '$',
          link: 'https://www.yelp.com/biz/govt-taco-baton-rouge?osq=tacos'
        },
        asian: {
          name: 'Soji: Modern Asian',
          address: '5050 Government St, Baton Rouge, LA 70806',
          phone: '(225) 300-4448',
          rating: '4',
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/_ir0kV4f8qq21JfBt73Z4w/l.jpg',
          price: '$$$',
          link: 'https://www.yelp.com/biz/soji-modern-asian-baton-rouge?osq=asian'
        }
    })
    

  return (
    <div className="App">
      <Title />
      <Switch>
            <Route exact path ='/'>
              <CuisineList cuisine={cuisine} />
            </Route>
            <Route exact path ='/:cuisine'>
              <RestaurantDetail restaurant={restaurantList}/>
            </Route>
        </Switch>
    </div>
  );
}

export default App;
