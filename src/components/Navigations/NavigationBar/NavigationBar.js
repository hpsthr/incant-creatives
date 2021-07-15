import React, {useContext} from 'react';
import Context from '../../../context/ContextProp'
import classes from './NavigationBar.module.css'




const Navigation = (props) => {

const menuContext = useContext(Context)

return(
    <div className= {classes.NavigationBar} style = {{height: menuContext.valueShow ? "100% ": "0"}} >
        {menuContext.valueShow ?
         <ul className={classes.Items}>
            <li> Menu </li>
            <li> Item </li>
            <li> Contact </li>
            <li> Delication </li>
        </ul> 
        : null}
    </div>
)

}



export default Navigation