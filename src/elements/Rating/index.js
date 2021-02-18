import './rating.css';

import fill from '../../assets/business/star-filled.png';
import half from '../../assets/business/star-half-fill.png';
import empty from '../../assets/business/star-empty.png';

function Rating({rating}) {
    var numFill = Math.floor(rating);
    if (rating - numFill > 0) {
        var halfFill = true;
    }
    var emptyFill = 5 - Math.ceil(rating);
    var starArray = [];
    for (var i = 0; i < numFill ; i++) {
        starArray.push(<img src={fill} key={i}/>);
    };
    
    if(halfFill) {
        starArray.push(<img src={half} key={'halfstar'}/>);
    };

    for (var i = 0; i < emptyFill; i++) {
        starArray.push(<img src={empty} key={i+10}/>);
    }

    return (
        <div>
            {starArray}
        </div>
    )
}

export default Rating;