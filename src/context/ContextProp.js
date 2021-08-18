import React from 'react';

const ContextProp = React.createContext({
    valueShow:false,
    click: () => {},
    height:window.innerHeight,
    showB:false,
    number:0,
    
})

export default ContextProp