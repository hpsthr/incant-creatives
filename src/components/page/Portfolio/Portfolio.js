import React, {useContext} from 'react';
import FullPage from '../../../ScrollSection/index'
import PortfolioPage from './ScrollLogic/PPage'
import "./carousel.css"
// import Aux from '../../../hoc/Auxillary'
import Carousel from './imagescript/Slider'
import Context from '../../../context/ContextProp'
import {motion} from 'framer-motion'
import transition from '../Transition/TransitionProp'

const Portfolio = () => {
    const {valueShow} = useContext(Context)
    return(
        
            <motion.div
           name="work"
            initial = "initial"
            animate ="in"
            exit = "out"
            variants = {transition}
            transition = { {
                type:"tween",
                ease:"easeIn",
                duration:0.3,
                delay:-0.1
            }}
            >
                <Carousel/>
                    <FullPage offScroll = {valueShow}>
                        <PortfolioPage/>
                    </FullPage>
            </motion.div>
            
        
    )
}

export default Portfolio