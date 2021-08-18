import React, {useContext} from 'react';
import Context from '../../../context/ContextProp'
import classes from './NavigationBar.module.css'
import {motion} from 'framer-motion'
import {NavLink} from 'react-router-dom'


const spanMotion1 = {
    rest: {
      rotate:"0deg",
      
      
      
      transition: {
          
        duration:0.23, 
        type: "spring",
        ease: "easeIn"
      }
    },
    hover: {
      rotate:"90deg",
      
      transition: {
        
        duration: 0.2,
        type: "spring",
        ease: "easeOut"
      }
    }
  };


const Navigation = (props) => {
const {valueShow , click, setNumber, setPath, setNav, setBackDrop} = useContext(Context)

let classItm = classes.Items



const clicked = (name) => {
click();
setNumber(0)
setBackDrop(false)
setPath(name)
setNav({
    translateY:0,
    pageYOffset:0,
})
}


return(
    <div className= {classes.NavigationBar} style = {{height: valueShow ? "100% ": "0"}} >
        {valueShow ?
         <ul className={classItm}>
            
            <motion.li initial="rest" whileHover="hover" animate="rest"   name = {"about"}><NavLink  activeStyle={{transform:"rotate(0deg)"}}   onClick= {(main) => {clicked(main.target.name)}} name = "about" to = "/about"><motion.span variants = {spanMotion1}>About</motion.span ></NavLink></motion.li>
            <motion.li initial="rest" whileHover="hover" animate="rest"  name = {"work"}><NavLink  activeStyle={{transform:"rotate(0deg)"}}    onClick= {(main) => {clicked(main.target.name)}} name = "work" to = "/work"><motion.span variants = {spanMotion1}>Portfolio</motion.span></NavLink></motion.li>
            <motion.li initial="rest" whileHover="hover" animate="rest"  name = {"service"}><NavLink  activeStyle={{transform:"rotate(0deg)"}} onClick= {(main) => {clicked(main.target.name)}} name = "service" to = "/service"><motion.span variants = {spanMotion1}>Service</motion.span></NavLink></motion.li>
            <motion.li initial="rest" whileHover="hover" animate="rest"  name = {"contact"}><NavLink  activeStyle={{transform:"rotate(0deg)"}} onClick= {(main) => {clicked(main.target.name)}} name = "contact" to = "/contact"><motion.span variants = {spanMotion1}>Contact</motion.span></NavLink></motion.li>
            
        </ul> 
        : null}
    </div>
)

}



export default React.memo(Navigation)