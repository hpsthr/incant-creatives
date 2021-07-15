import React, {useContext} from 'react';
// import Aux from '../../../hoc/Auxillary'
import ToggleBtn from '../../UI/ToggleButton/ToggleButton'
import Navigation from '../NavigationBar/NavigationBar'
import Context from '../../../context/ContextProp'
import classes from './NavigationPanel.module.css'

const NavigationPanel = props => {

const menuContext = useContext(Context)
    
    return(
        <div className= {classes.NavigationPanel}>
            <div style = {menuContext.showB ? {display:"none"}: null} className={classes.Icon}>
            <ToggleBtn click = {menuContext.click}/>
            </div>
            
             <Navigation/> 
            </div>
        
        
    )
}

export default NavigationPanel;