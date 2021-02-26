import React from 'react';
import './Header.css';
import Title from '../../elements/Title';

function Header({text}) {
    const [show, setShow] = React.useState(true);
    if (show) {
        return(           
            <Title text={text}/>               
        )
    } else {
        return(
            
            <div>
                <form>
                    <input placeholder="Search for a city"></input>                    
                </form>
            </div>
        )
    }
}

export default Header;