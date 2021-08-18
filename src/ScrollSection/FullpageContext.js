import React from 'react';

const FullpageContext = React.createContext({
    number: 0,
    offsetHeight:0,
    onHover:0,
    count: 0,
  
    subscribe: null,
    unsubscribe: null,
    goto: null,
    back: null,
    next: null,
});

export default FullpageContext;
