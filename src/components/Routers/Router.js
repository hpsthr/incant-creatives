import React from 'react';
import {Route, Switch, useLocation} from 'react-router-dom'
import './fade.css'

import Main from '../page/Main/Main'
import About from '../page/About/About'
import Work from '../page/Portfolio/Portfolio'
import Contact from '../page/Contact/Contact.js'
import Service from '../page/Service/Service.js'


import {AnimatePresence} from 'framer-motion'


const Router = () => {

    const location = useLocation()
   
    
    return(
        // <TransitionGroup>
        // <CSSTransition
        // key = {location.key}
        // timeout= {200}
        // classNames = "fade"
        // >
        <AnimatePresence exitBeforeEnter >
        <Switch location = {location} key = {location.key}>
        <Route path = "/" exact  component ={Main}/>
        <Route path = "/about" exact  component ={About}/>
        <Route path = "/work" exact  component ={Work}/>
        <Route path = "/service" exact  component ={Service}/>
        <Route path = "/contact" exact  component ={Contact}/>
        
        </Switch>
        </AnimatePresence>
        // </TransitionGroup>
        
        
    
    )
}

export default Router