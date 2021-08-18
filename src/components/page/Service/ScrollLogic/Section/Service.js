import React,{useContext} from 'react';
import Text from '../../../../Animation/TextAnimation/Text';
import classes from '../../Service.module.css'
import Aux from '../../../../../hoc/Auxillary'
import ProgressiveImage from 'react-progressive-image'
import {transitionAnimation, transitionLine} from '../../../../Animation/Motion'
import {motion} from 'framer-motion'

import ServiceImage from '../../../../../Resources/Service/OurService.png'
import ContextProp from '../../../../../context/ContextProp';



const Service = () => {
    const {number} = useContext(ContextProp)
return(
    <Aux>
       <div className = {classes.First}> 
       <motion.div
initial= "init"
animate = {number === 0 ? "animation" : "init"}
variants = {transitionLine}
transition = {{
    delay:0.2,
    duration:0.6,
    type:"tween",
    }}
className = {classes.LineBox}></motion.div>
<ProgressiveImage
                    src ={ServiceImage}
                    >
                    {(src, loading) => (
                    <motion.img 
                    initial= "init"
                    animate = {number === 0 ? "animation" : "init"}
                    variants = {transitionAnimation}
                    transition = {{delay:0.1, duration:0.6, type:"tween",}}
                    width="1920" height="auto" style={{ opacity: loading ? 0.5 : 1 }} src={src} alt="animage" />
                        )}
                    </ProgressiveImage>
                    </div>
    <div className = {classes.Text}>
        <Text text = "Service" number = {0}/>
    </div>
    </Aux>
)
}

export default Service