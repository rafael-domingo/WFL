import './restaurantDetail.css';

import Rating from '../../elements/Rating';
import Price from '../../elements/Price';
import RestaurantInfo from '../../elements/RestaurantInfo';
import Yelp from '../../elements/Yelp';

function RestaurantDetail({image, name, address, phone, rating, price}) {

    return (
        <div className="components-restaurantdetail">
            <img src={image} />
            <Rating rating={rating} />
            <Price price={price} />
            <RestaurantInfo name={name} address={address} phone={phone} />
            <Yelp link={''} />
        </div>
    )
}

export default RestaurantDetail;