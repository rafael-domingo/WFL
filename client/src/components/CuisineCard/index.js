import './cuisineCard.css';
import asian from '../../assets/cuisine/asian.png';
import breakfast from '../../assets/cuisine/breakfast.png';
import fastfood from '../../assets/cuisine/fastfood.png';
import friedchicken from '../../assets/cuisine/friedchicken.png';
import hamburger from '../../assets/cuisine/hamburger.png';
import pizza from '../../assets/cuisine/pizza.png';
import seafood from '../../assets/cuisine/seafood.png';
import tacos from '../../assets/cuisine/tacos.png';
import vegan from '../../assets/cuisine/vegan.png';
import vegetarian from '../../assets/cuisine/vegetarian.png';

import { motion, AnimatePresence } from "framer-motion";


function CuisineCard({cuisine}) {
    const variants = {
        initial: { opacity: 0, x: '-100%'},
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '-100%', transition: {duration: 1.5}}
    }
    switch (cuisine) {
        case 'asian':
            var image = asian;
            break;
        case 'breakfast':
            var image = breakfast;
            break;
        case 'fries':
            var image = fastfood;
            break;
        case 'chicken':
            var image = friedchicken;
            break;
        case 'hamburger':
            var image = hamburger;
            break;
        case 'pizza':
            var image = pizza;
            break;
        case 'seafood':
            var image = seafood;
            break;
        case 'tacos':
            var image = tacos;
            break;
        case 'vegan':
            var image = vegan;
            break;
        case 'vegetarian':
            var image = vegetarian;
            break;
        default:
            var image = '';
    }

    return (
        <AnimatePresence>
            <motion.div
            initial = "initial"
            animate="enter"
            transition={{ duration: 0.5 }}
            exit="exit"
            variants={variants}>
            <div className="components-cuisinecard">
                <img src={image}/>
                <p>{cuisine}</p>
            </div>
            </motion.div>
        </AnimatePresence>
        

    )
}

export default CuisineCard;