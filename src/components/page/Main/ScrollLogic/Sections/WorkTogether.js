import React, {useContext} from 'react';
import classes from '../../Main.module.css'

import {motion} from 'framer-motion'

import Context from '../../../../../context/ContextProp';
import ContainerInline from '../../../SectionTemplate/ContainerInline';
import {Left, Right} from '../../../SectionTemplate/Container'
import ButtonArrow from "../../../../Animation/ButtonAnimation/ButtonArrow"

import Aux from '../../../../../hoc/Auxillary';




const wrapperVariants = {
    initial: {
      clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', 
      opacity:0,
      transition: { 
        
        duration: .6 }
    },
    animate: {
      clipPath: 'polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)',
      opacity:1,
      transition: { 
       
      duration: .6,}
    }
  }

const WorkTogether = props => {

    const {number, setDrop, setForm} = useContext(Context)


    return (
      <Aux>
      
        <ContainerInline>
          
            <Left leftstyle ={{width:"40vw"}} >

            </Left>
            <Right rightstyle = {{width:"60vw"}}>
                <div className = {classes.Shapewrap}>
            <motion.div 
            initial = "initial"
            animate = {number === 5 ? "animate" : "initial"}
            variants = {wrapperVariants}
            
            
            className = {classes.Shape}>
              <div className = {classes.Button}>
            <ButtonArrow click = {() => {setDrop(); setForm(true)}}/>
            
            </div>

             </motion.div>
             </div>
             
            </Right>
        </ContainerInline>
        </Aux>
    )
}

export default WorkTogether;