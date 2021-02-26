import React, {useState} from 'react';
import './cuisine.css';

function Cuisine({cuisine}) {
    return (
        <div>
            {`Cuisine: ${cuisine}`}
        </div>
    )
}

export default Cuisine;