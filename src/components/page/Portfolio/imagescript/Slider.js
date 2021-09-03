import React, {useContext} from 'react';
import Context from "../../../../context/ContextProp"
import classes from './Item.module.css'



import {Carousel} from 'react-responsive-carousel';
import {motion } from 'framer-motion'
import Aux from '../../../../hoc/Auxillary';

import one1 from '../../../../Resources/Portfolio/Images/one (1).jpg'
import one2 from '../../../../Resources/Portfolio/Images/one (2).jpg'
import one3 from '../../../../Resources/Portfolio/Images/one (3).jpg'

import two1 from '../../../../Resources/Portfolio/Images/two (1).jpg'
import two2 from '../../../../Resources/Portfolio/Images/two (2).jpg'
import two3 from '../../../../Resources/Portfolio/Images/two (3).jpg'

import three1 from '../../../../Resources/Portfolio/Images/three (1).jpg'
import three2 from '../../../../Resources/Portfolio/Images/three (2).jpg'
import three3 from '../../../../Resources/Portfolio/Images/three (3).jpg'

const IMGScroller = () => {

    const {number, height} = useContext(Context)
    const img =
        {
            0:[one1,one2,one3],
            1:[two1,two2,two3],
            2:[three1, three2, three3, three1],
            3:[one2],
            4:[one2],
            5:[one2],
               }
    
    
        
        

    return ( <Aux> 
        {number > 0 ? <motion.div
        initial = {{opacity: 0 }}
            animate = {{opacity: 1}}
            exit = {{opacity:0}}
            transition = {{type: "tween", ease: "easeIn", duration: 0.5, delay:0.2}}
        className={classes.IMG} style={{height:height, }}>
            <Carousel
                showIndicators = {false}
                showStatus={false}
                emulateTouch
                thumbWidth = {60}
                selectedItem= {number * 0.00001}
                // className={classes.Car}
                height={height}
                width={window.innerWidth - (window.innerWidth * 0.5)}
                dynamicHeight>
                {img[number].map((el, index) => 
                    
                        <img style={{maxHeight:height, maxWidth:window.innerWidth - (window.innerWidth * 0.5)}} key = {index} className = {classes.Pro}  alt = {index} src={el}></img>
                    )}
            </Carousel>
 
        </motion.div> : null }
        </Aux>
        

    )
}

export default IMGScroller
