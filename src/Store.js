import React from 'react';
import { checkPropTypes } from 'prop-types';


const CTX = React.createContext();

/*
    msg { 
        from:   'user'
        msg:    'hi'
        topic:  'general'


   }

   state    {
        general:     [
            {msg},  {msg},  {msg}, {newmsg}
        ] 
        topic2:

   }

*/

function reducer(state, action){
    const {from, msg, topic} = action.payload;
    switch(action.type){
        case 'RECEIVE MESSAGE' :
            return {
                ...state,
                [action.payload.topic]:     {
                    ...state[topic].
                    {
                        from:   action.payload.from,
                        msg:    action.payload.msg

                    }
                }

            }
        default :
            return state 
    }
}

export default function Store(props) {
    
    const reducerHook = React.useReducer(reducer, initState);
    
    return(
        <CTX.Provider value = {}>
            {props.children}
        </CTX.Provider>
    )
}