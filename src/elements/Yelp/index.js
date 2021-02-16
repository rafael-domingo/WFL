import './Yelp.css';

import yelp from '../../assets/business/yelp.png';

function Yelp({link}) {
    return (
        <div>
            <img src={yelp}/>
            <a href={link}>open in Yelp</a>
        </div>
    )
}
export default Yelp;