import React, {useContext} from 'react';
import MainPage from './ScrollLogic/MPage'
import Context from '../../../context/ContextProp'
import Fullpage from '../../../ScrollSection/index'
import {motion} from 'framer-motion'
import transition  from '../Transition/TransitionProp'
import {useLocation} from 'react-router-dom'





const Main = props => {
    const {valueShow, setPath} = useContext(Context)
    const location = useLocation()
     
    console.log(location.pathname)

React.useEffect(() => {
    setPath("main")
}, [setPath])
    return(
        <motion.div
        name = "main"
        initial = "initial"
            animate ="in"
            exit = "out"
            variants = {transition}
            transition = { {
                type:"tween",
                ease:"easeIn",
                duration:0.3,
                delay:-0.1
            }}
        >
        <Fullpage offScroll = {valueShow} >
            <MainPage/>
        </Fullpage>
        </motion.div>
    
        
        
    )
        
    
}


export default React.memo(Main);
