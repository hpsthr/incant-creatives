import React, {useContext} from 'react';
import classes from './ToggleButton.module.css'
import Context from '../../../context/ContextProp'

const ToggleBtn = props => {
    
    const {setDrop, valueShow , click} = useContext(Context)
    
    return(
        <div onClick = {() => {click(); setDrop();}} className = {!valueShow ? classes.ToggleBtn : classes.ToggleBtnActive}> 
            <div> </div>
            <div> </div>
            <div> </div>
        </div>
    )
}

export default ToggleBtn