import React, {useState} from 'react'
import Class from './App.module.css';
import Context from '../context/ContextProp'
import BackDrop from '../components/UI/BackDrop'
import {BrowserRouter} from 'react-router-dom'
import Form from "../components/Model/ContactUs"
import Cockpit from '../components/cockpit/Cockpit'

import ModalContact from '../components/UI/ContactUs';






function App() {

 
  

const [height, setHeight] = useState(window.innerHeight);
const [disable, setDesable] = useState({showBurger:false})
const [menuShow, menuShowState] = useState({showMenu:false})
const [backDrop, setBackDrop] = useState(false)
const [scrollOff, setScrollOff] = useState(false)
const [number , setNumber] = useState('0')
const [path , setPath] = useState(null)
const [contact, setContact] = useState(false)
const [nav, setNav] = useState({
  translateY:0,
  pageYOffset:0,
})
const [form, setForm] = useState(false)



React.useEffect(() => {
  window.addEventListener("resize", () => setHeight(window.innerHeight));
  setNumber(0)
}, [])

// React.useEffect(() => {
//   setPath(location)
// }, [location])


React.useEffect(() => {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset <= window.innerHeight - 5 ){
      setDesable({
        showBurger:false
      })
    }
    if (window.pageYOffset > window.innerHeight - 4  ){
      setDesable({
        showBurger:true
      })
    }
  });
}, [])

const toggleMenuHandler = () => {
 menuShowState({
    showMenu:!menuShow.showMenu
  })
   
}

const setDrop = () => {
  setBackDrop(!backDrop)
 
}

  
  return (
    <BrowserRouter>
    <div  className={Class.App}>
      
      <Context.Provider value = {{
        valueShow:menuShow.showMenu, 
        click:toggleMenuHandler, 
        menuShowState,
        height:height, 
        showB:disable.showBurger,
        backDrop, 
        setBackDrop,
        setDrop,
        number, 
        setNumber, 
        path, 
        setPath, 
        nav, 
        setNav,
        scrollOff, 
        setScrollOff, 
        setContact,
        contact,
        form, 
        setForm
         }}>
            <Form style = {{display: form ? "flex" : "none"}} click = {() => { setForm(false); setDrop(false)}}/>
           <BackDrop />
           <ModalContact show = {contact} setContact= {setContact} setDrop = {setBackDrop}/>
        <Cockpit panel = {menuShow.showMenu}  click = {toggleMenuHandler}/>
      
      </Context.Provider>
    </div>
    </BrowserRouter>
  );
}

export default App;
