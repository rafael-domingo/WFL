import './restaurantDetail.css';

import React from 'react';
import Axios from 'axios';

import Rating from '../../elements/Rating';
import Price from '../../elements/Price';
import RestaurantInfo from '../../elements/RestaurantInfo';
import Yelp from '../../elements/Yelp';

import back from '../../assets/business/back.png';

import {YelpAPI} from '../../util/YelpAPI';

import { useParams, Link } from "react-router-dom";
import ReactLoading from 'react-loading';
import { motion, AnimatePresence } from "framer-motion";


function RestaurantDetail({restaurant}) {
    const cuisine = useParams().cuisine;
    const [detail, setDetail] = React.useState();

    // Fetch API data on first render
    React.useEffect(() => {
        const restaurantInfo = async() => {
            var response = await YelpAPI.search(cuisine);
            console.log(response);
            setDetail(response);
        };    

        const example = async() => {
            const exResponse = await YelpAPI.new(cuisine);
            console.log(exResponse);
        }
        example();
        restaurantInfo();
    }, [0])
 
    
    const variants = {
        initial: { opacity: 0, x: '100%'},
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '100%', transition: {duration: 1.5}}
    }

    if (detail) {
        const {name, address, price, phone, rating, image, link} = restaurant[cuisine];
        return (
            <AnimatePresence>
                <div className="components-restaurantcontainer">
                    <Link to="/">
                        <motion.div
                        className="components-backbutton"
                        whileHover={{
                            backgroundColor: '#E0BE2F',
                            boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.5);',
                            transition: '0.3s ease'
                        }}
                        animate={{
                            rotate: [180, 0],
                            opacity: [0, 1]
                        }}>
                            <img src={back}/>
                        </motion.div>
                    </Link>

                <motion.div
                initial = "initial"
                animate="enter"
                transition={{ duration: 0.5 }}
                exit="exit"
                variants={variants}
                className="components-restaurantcontainer">
                    <div className="components-restaurantdetail">
                        <img src={detail.image_url} style={{ width: '100%'}}/>
                        <Rating rating={detail.rating} />
                        <Price price={detail.price} />
                        <RestaurantInfo name={detail.name} address={address} phone={detail.phone} />
                        <Yelp link={detail.url} />
                    </div>
                </motion.div>
                </div>
                
            </AnimatePresence>
        )
    } else {
        return (
            <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ReactLoading type={'spin'} height={'10%'} width={'10%'} />
            </div>
        )
    }
 
}

export default RestaurantDetail;