import './cuisineList.css';

import CuisineCard from '../../components/CuisineCard';

function CuisineList({cuisine}) {
    return (
        <div>
            <div className="Cuisines">
                {
                cuisine.cuisine.map((item, index) => {
                    return (
                        <div className="card" key={item}>
                        <CuisineCard cuisine={item}/>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default CuisineList;