import './price.css';

import fill from '../../assets/business/dollar-fill.png';
import empty from '../../assets/business/dollar-empty.png';

function Price({price}) {
    var priceArray = [];
    for (var i = 0; i < price.length; i++) {
        priceArray.push(<img src={fill} style={{fill: 'white'}} key={i} style={{width: '20%'}}/>);
    };

    for (var i = 4; i > price.length; i-- ) {
        priceArray.push(<img src={empty} key={i} style={{width: '20%'}}/>);
    };

    return (
        <div className="elements-price" style={{width: '60%', margin: '20px'}}>
            {priceArray}
        </div>
    )
}

export default Price;