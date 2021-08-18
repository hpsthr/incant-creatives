import React from "react";
import NavigationPanel from "../Navigations/NavigationPanel/NavigationPanel";
import Aux from '../../hoc/Auxillary'

import Routes from '../Routers/Router'
// import MainClass from '../page/Main/ClassMain'


const cockpit = props => {

    return(
        <Aux>
            <NavigationPanel/>
                <main style = {{overflow: 'hidden', postion: "absolute"}}>
                    <Routes/>
                </main>
        </Aux>

    )
}

export default cockpit;