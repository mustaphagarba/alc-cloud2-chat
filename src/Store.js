import React from 'react';
import { checkPropTypes } from 'prop-types';


export const CTX = React.createContext();

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

const initState = {
    general:     [
        {from: 'Mustapha', msg: 'Ohayo gozaimasu!'},
        {from: 'Ahmad', msg: 'Ahlan wa sahlan bikum.'},
        {from: 'Ladidi', msg: 'Barkan ku dai'},
        
    ],
    topic2: [
        {from: 'Mustapha', msg: 'Ohayo gozaimasu!'},
        {from: 'Mustapha', msg: 'Ohayo gozaimasu!'},
        {from: 'Mustapha', msg: 'Ohayo gozaimasu!'},

    ]

}

function reducer(state, action){
    const {from, msg, topic} = action.payload;
    switch(action.type){
        case 'RECEIVE MESSAGE' :
            return {
                ...state,
                [topic]:     [
                    ...state[topic],
                    {from, msg}
                ]

            }
        default :
            return state 
    }
}

export default function Store(props) {
    
    const reducerHook = React.useReducer(reducer, initState);
    
    return(
        <CTX.Provider value = {reducerHook}>
            {props.children}
        </CTX.Provider>
    )
}