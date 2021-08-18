
import React, {useContext} from 'react';
import Text2 from '../../Animation/TextAnimation/Text2'
import classes from './StyleContainer.module.css'
import ContextProp from '../../../context/ContextProp';
import { motion } from 'framer-motion';
import Aux from '../../../hoc/Auxillary';

import { transitionAnimationText } from '../../Animation/Motion';

const ServiceTemp = (props) => {
const {number} = useContext(ContextProp)



   return(
        <div className = {classes.Box}>
           <div style = {{margin:"20vh 10vw", textAlign: "left"}}>
                        <h1>
                              {props.text.map(el => {return(<Aux><Text2 del = {0.05} dur={0.15} Y={"25px"} number = {props.number} text = {el}/> &nbsp;</Aux>)} )}
                              
                        </h1>
                        {props.paragraph.map(el => 
                        <motion.p 
                        initial= "init"
                        animate = { number === props.number ? "animation" : "init"}
                        variants = {transitionAnimationText}
                        transition = {{
                            delay:0.1,
                            duration:0.6,
                            type:"tween",
                         }}
                       >
                        {el}
                        
                       </motion.p>
                        ) }

            </div>
        </div>
   )

}

export default ServiceTemp;