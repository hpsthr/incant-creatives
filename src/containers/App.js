import React, {useState} from 'react'
import Class from './App.module.css';
import Context from '../context/ContextProp'


import Cockpit from '../components/cockpit/Cockpit'




function App() {
  
  
  

const [height, setHeight] = useState(window.innerHeight);
const [disable, setDesable] = useState({showBurger:true})
const [menuShow, menuShowState] = useState({showMenu:false})

React.useEffect(() => {
  window.addEventListener("resize", () => setHeight(window.innerHeight));
}, [])

React.useEffect(() => {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset < window.innerHeight){
      setDesable({
        showBurger:false
      })
    }
    if (window.pageYOffset > window.innerHeight){
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

  
  return (
    <div className={Class.App}>
      <Context.Provider value = {{valueShow:menuShow.showMenu, click:toggleMenuHandler , height:height, showB:disable.showBurger}}>
        <Cockpit panel = {menuShow.showMenu} click = {toggleMenuHandler}/>
      </Context.Provider>
    </div>
  );
}

export default App;
