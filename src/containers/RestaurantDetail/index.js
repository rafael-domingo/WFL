import './restaurantDetail.css';

import Rating from '../../elements/Rating';
import Price from '../../elements/Price';
import RestaurantInfo from '../../elements/RestaurantInfo';
import Yelp from '../../elements/Yelp';

import { useParams } from "react-router-dom";

// destructured syntax
function RestaurantDetail({restaurant}) {
    const cuisine = useParams().cuisine;
    if (restaurant[cuisine]) {
        const {name, address, price, phone, rating, image, link} = restaurant[cuisine];
        return (
            <div className="components-restaurantdetail">
                <img src={image} />
                <Rating rating={rating} />
                <Price price={price} />
                <RestaurantInfo name={name} address={address} phone={phone} />
                <Yelp link={link} />
            </div>
        )
    } else {
        return (
            <div>
                Couldn't find restaurant
            </div>
        )
    }
 
}

export default RestaurantDetail;