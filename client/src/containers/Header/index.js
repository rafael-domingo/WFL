import React from 'react';
import './Header.css';
import Title from '../../elements/Title';

function Header({text, location}) {
    const [show, setShow] = React.useState(true);
    if (!location) {
        return(
            <Title text={text}/>
        )
    } else if (location.name) {
        return(           
            <div style={{width: '100%'}}>
                <Title text={text}/> 
                <p>{location.name}</p>              
            </div>

            
        )
    } else if (location.latitude) {
        return(           
            <div style={{width: '100%'}}>
                <Title text={text}/> 
                <p>Your location</p>              
            </div>

            
        )
    } else {
        return(
            <Title text={text}/>
        )
    }
}

export default Header;