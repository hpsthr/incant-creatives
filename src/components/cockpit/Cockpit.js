import React from "react";
import NavigationPanel from "../Navigations/NavigationPanel/NavigationPanel";
import Aux from '../../hoc/Auxillary'
import Main from '../page/Main/Main'


const cockpit = props => {

    return(
        <Aux>
            <NavigationPanel/>
            <Main/>

        </Aux>

    )
}

export default cockpit;