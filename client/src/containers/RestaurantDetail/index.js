import './restaurantDetail.css';

import React from 'react';

import Rating from '../../elements/Rating';
import Price from '../../elements/Price';
import RestaurantInfo from '../../elements/RestaurantInfo';
import Yelp from '../../elements/Yelp';
import Description from '../../elements/Description';
import Title from '../../elements/Title';
import back from '../../assets/business/back.png';

import {YelpAPI} from '../../util/YelpAPI';

import { useParams, Link } from "react-router-dom";
import ReactLoading from 'react-loading';
import { motion, AnimatePresence } from "framer-motion";


function RestaurantDetail({restaurant, location}) {
    const cuisine = useParams().cuisine;
    const [detail, setDetail] = React.useState();
    const [cheap, setCheap] = React.useState();
    const [high, setHigh] = React.useState();
    
    // Fetch API data on first render
    React.useEffect(() => {
        console.log(location);
        const restaurantInfo = async() => {
            var response = await YelpAPI.search(cuisine, 'review_count', location);
            console.log(response);
            setDetail(response);
        };    

        const high = async() => {
            const highResponse = await YelpAPI.cheap(cuisine, 'rating', location);
            console.log(highResponse);
            setHigh(highResponse);
        }

        const cheap = async() => {
            const cheapResponse = await YelpAPI.cheap(cuisine, 'best_match', location);
            console.log(cheapResponse);
            setCheap(cheapResponse);

        }
        cheap();
        high();
        restaurantInfo();
    }, [0])
 
    
    const variants = {
        initial: { opacity: 0, x: '100%'},
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '100%', transition: {duration: 1.5}}
    }

    if (detail && cheap && high) {
        return (
            <AnimatePresence>
                <div className="components-restaurantcontainer">
                    <Title text={cuisine} />
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
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap'}}>
                        <motion.div
                            initial = "initial"
                            animate="enter"
                            transition={{ duration: 0.5 }}
                            exit="exit"
                            variants={variants}
                            className="components-motion">
                                <div className="components-restaurantdetail">
                                    <Description description="popular" />
                                    <img src={detail.image_url} style={{ width: '100%'}}/>
                                    <Rating rating={detail.rating} />
                                    <Price price={detail.price} />
                                    <RestaurantInfo name={detail.name} address={detail.location.display_address} phone={detail.phone} />
                                    <Yelp link={detail.url} />
                                </div>
                            </motion.div>
                            <motion.div
                            initial = "initial"
                            animate="enter"
                            transition={{ duration: 0.5 }}
                            exit="exit"
                            variants={variants}
                            className="components-motion">
                                <div className="components-restaurantdetail">
                                    <Description description="cheap" />
                                    <img src={cheap.image_url} style={{ width: '100%'}}/>
                                    <Rating rating={cheap.rating} />
                                    <Price price={cheap.price} />
                                    <RestaurantInfo name={cheap.name} address={cheap.location.display_address} phone={cheap.phone} />
                                    <Yelp link={cheap.url} />
                                </div>
                            </motion.div>
                            <motion.div
                            initial = "initial"
                            animate="enter"
                            transition={{ duration: 0.5 }}
                            exit="exit"
                            variants={variants}
                            className="components-motion">
                                <div className="components-restaurantdetail">
                                    <Description description="highly rated" />
                                    <img src={high.image_url} style={{ width: '100%'}}/>
                                    <Rating rating={high.rating} />
                                    <Price price={high.price} />
                                    <RestaurantInfo name={high.name} address={high.location.display_address} phone={high.phone} />
                                    <Yelp link={high.url} />
                                </div>
                            </motion.div>
                        </div>
               
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