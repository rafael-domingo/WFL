import './cuisineList.css';

import Header from '../../containers/Header';
import CuisineCard from '../../components/CuisineCard';

import { useParams, Link } from "react-router-dom";

function CuisineList({cuisine}) {

    return (
        <div>
            <div className="Cuisines">
            <Header text="What's For Lunch?"/>
                {
                cuisine.cuisine.map((item, index) => {
                    return (
                        <div className="card" key={item}>
                            <Link to={`/${item}`} style={{textDecoration: 'none', color: 'white'}}>
                                <CuisineCard cuisine={item}/>
                            </Link>
                        </div>
                      
                        
                    )
                })
                }
            </div>
        </div>
    )
}

export default CuisineList;


