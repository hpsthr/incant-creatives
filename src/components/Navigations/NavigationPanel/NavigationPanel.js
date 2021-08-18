import React, {useContext} from 'react';
// import Aux from '../../../hoc/Auxillary'
import ToggleBtn from '../../UI/ToggleButton/ToggleButton'
import Navigation from '../NavigationBar/NavigationBar'
import Context from '../../../context/ContextProp'
import logo from '../../../Resources/logo/ico.png'
import classes from './NavigationPanel.module.css'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'


const NavigationPanel = props => {

const {showB, valueShow, number, path, setNumber, setPath} = useContext(Context)

const clicked = (name) => {
    
    setNumber(0)
    setPath(name)}
    
  
    return(
        <div className= {classes.NavigationPanel}>
            <div
            className = {classes.Transition}
            style= {{
                position:'fixed',
                top: "27px",
                right:"13px",
                transform:!valueShow ? "translate(-30px , 3px)" :"translate(200px, 3px)",
                
            }}
            >
            <motion.div
            
            whileHover = {{
                scale:"1.1",
                opacity:1,
                transition: {
                    duration:0.3,
                    type:"tween",
                    ease:"easeIn"
                }
            }}
            className = {classes.IMG}>
                <Link to = "/">
                     <img name = "main"  onClick= {(main) => {clicked(main.target.name)}} alt="" src={logo}/> 
                </Link>
            </motion.div></div>
            <div style = {path === "main" ? {transform: showB  || !number < 1 ? "translate( 5px , 3px)" :"translate(200px, 3px)"} : {transform:"translate(5px, 3px)"}} 
                className={classes.Icon}>
            <ToggleBtn />
            </div>
            
            
             <Navigation/> 
            </div>
        
        
    )
}

export default NavigationPanel;