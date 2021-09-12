import React,  { createContext , useReducer} from  "react";
import transactionReducer from './transactionProvider';

const initialTransaction=[
     {amount: 100, desc:"cash"},
        {amount:-40, desc:"book"},
        {amount:-200, desc:"camer"}
    ]


export const TransactionContext =createContext(initialTransaction);

export const TransactionProvider =({children})=>{
    let [state, dispatch]= useReducer(transactionReducer, initialTransaction)
     function addTransaction(transobj){
         dispatch({
             type:"ADD",
             payload:{
                 amount: transobj.amount, 
                 desc: transobj.desc     }
         })
     }
     return <TransactionContext.Provider value={{
         transactions:state,
         addTransaction
     }}>
         {children}

     </TransactionContext.Provider>
}