import React, {useContext} from 'react';
import classes from './ToggleButton.module.css'
import Context from '../../../context/ContextProp'

const ToggleBtn = props => {
    
    const {setDrop, valueShow , click, contact} = useContext(Context)
    
    return(
        <div style = {{transform: contact ?  "translate(200px, 3px)": "translate(0 , 0)"}} onClick = {() => {click(); setDrop();}} className = {!valueShow ? classes.ToggleBtn : classes.ToggleBtnActive}> 
            <div> </div>
            <div> </div>
            <div> </div>
        </div>
    )
}

export default ToggleBtn