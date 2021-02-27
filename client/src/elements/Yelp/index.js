import './Yelp.css';

import yelp from '../../assets/business/yelp.png';
import { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function Yelp({link}) {
    const [isHovered, setHovered] = useState(true);
    // const { scrollYProgress } = useViewportScroll();
    // const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    // useEffect(() => yRange.onChange((v) => setHovered(v >= 0.9)), [yRange]);
    return (
        <motion.div   
            whileHover={{
            backgroundColor: '#E0BE2F'
        }}
        style={{borderRadius: '50px', width: '80%'}}>
            <a href={link} target="blank" style={{textDecoration: 'none'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}} className="elements-yelp">
            <motion.div
                style={{width: '20%', height: 'auto'}}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? 0 : 100 }}>
            <img src={yelp} style={{width: '100%', height: 'auto'}}/>
            </motion.div>
            <motion.div
                style={{width: '100%'}}
                animate={{
                    opacity: isHovered ? 1: 0,
                    y: isHovered ? 0 : 100 }}>
                <p style={{textDecoration: 'none', color: 'white', fontWeight: 'bold', fontSize: '2em'}}>open in Yelp</p>
            </motion.div>
        </div>
            </a>
   
        </motion.div>
    
    
    )
}
export default Yelp;