import './price.css';

import fill from '../../assets/business/dollar-fill.png';
import empty from '../../assets/business/dollar-empty.png';

function Price({price}) {
    var priceArray = [];
    for (var i = 0; i < price.length; i++) {
        priceArray.push(<img src={fill} style={{fill: 'white'}} key={i}/>);
    };

    for (var i = 4; i > price.length; i-- ) {
        priceArray.push(<img src={empty} key={i}/>);
    };

    return (
        <div className="elements-price">
            {priceArray}
        </div>
    )
}

export default Price;