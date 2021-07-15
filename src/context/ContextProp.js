import React from 'react';

const ContextProp = React.createContext({
    valueShow:false,
    click: () => {},
   height:window.innerHeight,
   showB:true
})

export default ContextProp