import React, {useContext} from 'react';
import classes from '../../Portfolio.module.css'
import ContextProp from '../../../../../context/ContextProp';
import {motion} from 'framer-motion'


const First = (props) => {
const {number}  = useContext(ContextProp)
return(
        <motion.div
        initial = "init"
        onClick = {props.click}
         style = {{position:'relative', transition:"transform 500ms easeInOut", border: props.num === number ?"3px solid red":"none" , ...props.style}} 
         className = {classes.PortfolioBox}>
            
             {props.children}
        </motion.div>
    )
}

export default First;