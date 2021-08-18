import React,{useContext} from 'react';
import classes from './Mouse.module.css'
import Context from '../../../../../context/ContextProp'
import ContextI from '../../../../../ScrollSection/FullpageContext';

const Mouse = () => {

    const scrollContext = useContext(ContextI)
    const menuContext = useContext(Context)

    return(
        <div style={{opacity:!scrollContext.number < 1 || menuContext.showB ? 0 : 1}} className = {classes.Mouse}>
            <span className = {classes.MouseShell} >
            <span className = {classes.MouseScroll}></span>
            </span>
        </div>
    )
}

export default Mouse