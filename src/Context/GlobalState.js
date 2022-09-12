import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


//INITIAL STATE
const initialState = {
    transactions: [
        { id: 1, text: 'Books', amount: -2600 },
        { id: 2, text: 'Wage', amount: 10000 },
        { id: 3, text: 'Food', amount: -3500 },
        { id: 4, text: 'Photos', amount: 2000 }
    ]
}

//CREATE CONTEXT
export const GlobalContext = createContext (initialState);


//PROVIDER COMPONENT
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

 //ACTIONS
 function deleteTransaction(id){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    })
 }

 function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    })
 }



    return (<GlobalContext.Provider value={{
        transactions:state.transactions, 
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider> );
}