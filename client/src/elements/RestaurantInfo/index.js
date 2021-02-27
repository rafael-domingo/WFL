import './restaurantInfo.css';

function RestaurantInfo({name, address, phone}) {

    return (
        <div className="elements-restaurantinfo" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
            <h1 style={{fontSize: '2em', width: '100%'}}>{name}</h1>
            <p style={{fontSize: '2em', width: '100%'}}>{address[0]}, {address[1]}</p>
            <p style={{fontSize: '2em', width: '100%'}}>{phone}</p>
        </div>
    )
}

export default RestaurantInfo;