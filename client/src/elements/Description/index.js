import React from 'react';
import './description.css';

import popular from '../../assets/business/fire.png';
import cheap from '../../assets/business/cheap.png';
import rated from '../../assets/business/thumb.png';

function Description({description}) {
    switch (description) {
        case 'popular':
            var image = <img src={popular} />
            break;
        case 'cheap': 
            var image = <img src={cheap} />
            break;
        case 'highly rated':
            var image = <img src={rated} />
            break;
        default:
            break;
    }
    return(
        <div className="elements-description">
            {image}
            <p>{description}</p>
        </div>       
    )
}

export default Description;