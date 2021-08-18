import React, {useContext} from 'react';
import Context from "../../../../context/ContextProp"
import classes from './Slider.module.css'
import Aux from "../../../../hoc/Auxillary"
import ProgressiveImage from 'react-progressive-image'
import {motion} from 'framer-motion'

import {Carousel} from 'react-responsive-carousel';

import info from '../../../../Resources/Service/info.jpg'
import Ione from '../../../../Resources/Service/Ione.jpg'
import Itwo from '../../../../Resources/Service/Itwo.jpg'
import Ithree from '../../../../Resources/Service/Ithree.jpg'
import Ifour from '../../../../Resources/Service/Ifour.jpg'
import Ifive from '../../../../Resources/Service/Ifive.jpg'
import Isix from '../../../../Resources/Service/Isix.jpg'
import Iseven from '../../../../Resources/Service/Iseven.png'
import Ieight from '../../../../Resources/Service/Ieight.jpg'
import Inine from '../../../../Resources/Service/Inine.jpg'
import Iten from '../../../../Resources/Service/Iten.jpg'

const IMGScroller = () => {

    const {number, height} = useContext(Context)
    const img =
        {
            
            1:[info],
            2:[Ione],
            3:[Itwo],
            4:[Ithree],
            5:[Ifour],
            6:[Ifive],
            7:[Isix],
            8:[Iseven],
            9:[Ieight],
            10:[Inine],
            11:[Iten]
               }
    
    
        
        

    return (
        <Aux>
            {number > 0 ? <motion.div
        initial = {{opacity: 0 }}
            animate = {{opacity: 1}}
            exit = {{opacity:0}}
            transition = {{type: "tween", ease: "easeIn", duration: 0.5, delay:0.2}}
        className={classes.IMG} style={{
            height: height
        }}>
            <Carousel
                showThumbs= {false}
                showIndicators = {false}
                showStatus={false}
                autoPlay
                emulateTouch
                thumbWidth = {60}
                selectedItem= {number * 0.00001}
                // className={classes.Car}
                height={height -(height * 0.2)}
                width={window.innerWidth - (window.innerWidth * 0.70)}
                dynamicHeight>
                {img[number].map((el, index) => 
                    <div key= {index}  className = {classes.Car}>
                        <ProgressiveImage src={el} placeholder={el}>
                          {(src, loading) => (
                              <div className = {classes.BoxImg}>
                            <img style={{maxHeight:height, maxWidth:window.innerWidth - (window.innerWidth * 0.5), opacity: loading ? 0.5 : 1 }} src={src} alt="" />
                            </div>
                          )}
                        </ProgressiveImage>
                    </div>)}
            </Carousel>

        </motion.div> : null }
            
        
        </Aux>

    )
}

export default IMGScroller
