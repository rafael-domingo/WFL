import logo from '../../assets/logo.svg';
import './App.css';

import React, {useState} from 'react';
import Axios from 'axios';
import { Switch, Route } from "react-router-dom";
import CuisineList from '../CusineList';
import RestaurantDetail from '../RestaurantDetail';
import Header from '../Header';
import ReactLoading from 'react-loading';

function App() {
  const [cuisine, setCuisine] = React.useState({
    cuisine: [
      'hamburger',
      'pizza',
      'chicken',
      'vegetarian',
      'vegan',
      'fries',
      'seafood',
      'breakfast',
      'tacos',
      'asian'
    ]})

    const [location, setLocation] = React.useState();
    const [locationError, setLocationError] = React.useState();
    const [search, setSearch] = React.useState();
    const [changeCity, setChangeCity]  = React.useState();

    React.useEffect(() => {
      console.log(location);
      console.log(locationError);
    }, [location])

    if (location) {
      return (
        <div className="App">
          <button className="button" placeholder="Change city" onClick={() => {
            setChangeCity(true) 
            setLocation(null)
            setLocationError(null)} }>Change city</button>
            <Switch>
                  <Route exact path ='/'>
                    <CuisineList cuisine={cuisine} location={location}/>
                  </Route>
                  <Route exact path ='/:cuisine'>
                    <RestaurantDetail location={location}/>
                  </Route>
              </Switch>
         
        </div>
      )
    } else if (locationError) {
      return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', flexWrap: 'wrap', width: '100%'}}>
          <div className="App">
            <Header text="What's For Lunch?"/>
            <h1 style={{color: 'white', width: '100%', textAlign: 'center'}}>Hmm, seems like I can't get your location.</h1>         
          </div>
        <div className="container-form">
          <div className="form">
            <input name="location" type="text" onChange={(e) => setSearch(e.target.value)} required></input>
            <label htmlFor="location" className="label-name">
              <span className="content-name">Where do you want to eat lunch?</span>
            </label>
          </div>
          </div>
          <button className="button" style={{width: '80%', height: '2em', margin: '2em'}} onClick={() => setLocation({name: search})}>Search</button>
        </div>
   
      )
    } else if (changeCity) {
      return (
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', width: '100%'}}>
        <div className="App">
          <Header text="What's For Lunch?"/>
        </div>
      <div className="container-form">
        <div className="form">
          <input name="location" type="text" onChange={(e) => setSearch(e.target.value)} required></input>
          <label htmlFor="location" className="label-name">
            <span className="content-name">Where do you want to eat lunch?</span>
          </label>
        </div>
        </div>
        <button className="button" style={{width: '80%', height: '2em', margin: '2em'}} onClick={() => setLocation({name: search})}>Search</button>
        <button className="button" style={{width: '80%'}} onClick={() => setChangeCity(false)}>Get my Location</button>
      </div>

      )
    }     
    else {
      console.log('waiting')
      setTimeout(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          if (position) {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            })
          }
        }, (err) => {
          setLocationError(err);
        })
      }, 500);
      return(
        <div className="App">
          <Header text="What's For Lunch?"/>
          <h1 style={{color: 'white', width: '100%', textAlign: 'center'}}>Getting your location</h1>
          <ReactLoading type={'spin'} height={'10%'} width={'10%'} />
        </div>
      )
    
   

    };
}

export default App;
