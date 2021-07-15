import React, {useContext} from 'react';
// import ReactDOM from 'react-dom';
// import ReactFullpage from '@fullpage/react-fullpage'
import VideoFl from './Video/Video'
import classes from './Main.module.css'
import Context from '../../../context/ContextProp'
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'
// import Aux from '../../../hoc/Auxillary'

const Main = props => {

    const menuContext = useContext(Context)
    
    
    return(
        <main  className = {classes.Main}>
           <Fullpage >
            <FullpageNavigation itemStyle = {{backgroundColor:"blue" , width:"35px", height:"35px", borderRadius:"20%"}} 
                                style = {{zIndex:1001, height:menuContext.height, cursor: 'pointer'}}>

            </FullpageNavigation>
            <FullPageSections>

                <FullpageSection className= {classes.Action} style={{height: menuContext.height, zIndex: -1}}>
                <VideoFl/>
                </FullpageSection>

                <FullpageSection style={{height: menuContext.height, zIndex: -1}}>
                1
                </FullpageSection>

                <FullpageSection style={{height: menuContext.height, zIndex: -1}}>
                1
                </FullpageSection>
  
  

            </FullPageSections>

            </Fullpage>
            
        </main>
    )
        
    
}


export default Main;
