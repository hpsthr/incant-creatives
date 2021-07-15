import React, {useContext} from 'react';
import classes from './ToggleButton.module.css'
import Context from '../../../context/ContextProp'

const ToggleBtn = props => {
    
    const menuContext = useContext(Context)

    return(
        <div onClick = {props.click} className = {!menuContext.valueShow ? classes.ToggleBtn : classes.ToggleBtnActive}> 
            <div> </div>
            <div> </div>
            <div> </div>
        </div>
    )
}

export default ToggleBtn