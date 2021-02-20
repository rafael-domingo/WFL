import './restaurantDetail.css';

import Rating from '../../elements/Rating';
import Price from '../../elements/Price';
import RestaurantInfo from '../../elements/RestaurantInfo';
import Yelp from '../../elements/Yelp';

import back from '../../assets/business/back.png';

import { useParams, Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

// destructured syntax
function RestaurantDetail({restaurant}) {
    const cuisine = useParams().cuisine;

    const variants = {
        initial: { opacity: 0, x: '100%'},
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '100%', transition: {duration: 1.5}}
    }

    if (restaurant[cuisine]) {
        const {name, address, price, phone, rating, image, link} = restaurant[cuisine];
        return (
            <AnimatePresence>
                <div className="components-restaurantcontainer">
                        <motion.div
                        className="components-backbutton"
                        whileHover={{
                            backgroundColor: '#E0BE2F'
                        }}
                        animate={{
                            rotate: [180, 0],
                            opacity: [0, 1]
                        }}>
                        <Link to="/">
                            <img src={back}/>
                        </Link>
                    </motion.div>
              

                <motion.div
                initial = "initial"
                animate="enter"
                transition={{ duration: 0.5 }}
                exit="exit"
                variants={variants}
                className="components-restaurantcontainer">
                    <div className="components-restaurantdetail">
                        <img src={image} style={{ width: '100%'}}/>
                        <Rating rating={rating} />
                        <Price price={price} />
                        <RestaurantInfo name={name} address={address} phone={phone} />
                        <Yelp link={link} />
                    </div>
                </motion.div>
                </div>
                
            </AnimatePresence>
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