import './Yelp.css';

import yelp from '../../assets/business/yelp.png';

function Yelp({link}) {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} className="elements-yelp">
            <img src={yelp} style={{width: '20%', height: 'auto'}}/>
            <a href={link} target="blank" style={{textDecoration: 'none', color: 'white', fontWeight: 'bold', marginRight: '20px'}}>open in Yelp</a>
        </div>
    )
}
export default Yelp;