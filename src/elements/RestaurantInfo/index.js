import './restaurantInfo.css';

function RestaurantInfo({name, address, phone}) {

    return (
        <div className="elements-restaurantinfo">
            <h1>{name}</h1>
            <p>{address}</p>
            <p>{phone}</p>
        </div>
    )
}

export default RestaurantInfo;