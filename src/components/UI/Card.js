
import React, {useContext} from 'react';
import CardSlider from "../../Slider/CardSlider";
import CardItem from "../../Slider/CardItem";
import { items } from '../../Resources/Main/data';
import classes from "./Card.module.css"
import {motion} from 'framer-motion'
import Context from "../../context/ContextProp"

import { transitionAnimationText } from '../Animation/Motion';

const CardT = ({num}) => {
  const{number} = useContext(Context)
  
    return (
      <motion.div
      initial= "init"
                    animate = {number === num ? "animation" : "init"}
                    variants = {transitionAnimationText}
                    transition = {{
                        delay:0.1,
                        duration:0.6,
                        type:"tween",
                    }}
       className = {classes.CardBox}>
      <CardSlider
      list={items}
      renderItem={CardItem}
      width={100}
      boxWidth={500}
      opacity={0.9}
      scale={0.9}
      disableNext={false}
      disablePrev={false}
      
      
    />
      </motion.div>
        
    )
}

export default CardT