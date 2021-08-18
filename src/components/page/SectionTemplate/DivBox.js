import React, {useContext} from 'react';
import Aux from "../../../hoc/Auxillary"
import Context from "../../../context/ContextProp"
import {motion} from 'framer-motion'
import { transitionBoxEl } from '../Transition/Motion';
import classes from "./StyleContainer.module.css"

const DivBox  = props => {

    const {number} = useContext(Context)
    return (
        <Aux>
        <motion.div style ={{...props.style }}
                        initial= "init"
                        animate = {number === props.number ? "animation" : "init"}
                        variants = {transitionBoxEl}
                        transition = {{
                            delay:0.1,
                            duration:0.6,
                            type:"tween",
                         }}
                        className = {classes.UpBox}></motion.div>
                            {props.children}
                        <motion.div style = {{...props.style}}
                        initial= "init"
                        animate = {number === props.number ? "animation" : "init"}
                        variants = {transitionBoxEl}
                        transition = {{
                            delay:0.1,
                            duration:0.6,
                            type:"tween",
                         }}
                        className = {classes.DownBox}></motion.div> 
                        </Aux>
    )
}

export default DivBox