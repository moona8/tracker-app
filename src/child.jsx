import React, {useContext, useState} from 'react';
import {TransactionContext} from './transactionContext'


function Child() {
    let {transactions, addTransaction} = useContext(TransactionContext);
    let [newDesc, setDesc ]= useState("")
    let [newAmount, setAmount ]= useState(0)
    const handelAddition=(event)=>{
         event.preventDefault();
         if(Number(newAmount) === 0){
             alert("please Enter correct value")
             return false;
         }
         addTransaction({
             amount:Number(newAmount),
             desc:newDesc
             
         })
         setAmount('')
         setAmount(0)
    }
    const getIncome=()=>{
        let income = 0;
        for (var i=0; i<transactions.length; i++){
            if (transactions[i].amount>0)
            income =income+transactions[i].amount
        }
        return income;
    }
    const getExpense =()=>{
        let expense = 0;
        for (var i = 0; i < transactions.length; i++ ){
            if (transactions[i].amount<0)
           expense+=transactions[i].amount

        }
        return expense;
    }
  return (
    <div className="container">
     <h1 className="text-center">Expence Tracker</h1>

     <h3>Your Balance <br />{getIncome() + getExpense()}</h3>

     <div className="expense-container">
     <h3>INCOME <br /> {getIncome()} </h3>
     <h3>EXPENCE <br />{getExpense(  )}</h3>
     </div>

     <h3>History</h3><hr />
     <ul className="transaction-list">
         {transactions.map((transObj,ind)=>{
             return(<li key={ind}>
             <span>{transObj.desc}</span>
             <span>{transObj.amount }</span>
         </li>)
         })}
         
        
     </ul>

     <h3>Add New Transactions</h3><hr />
     <form className="transaction-form" onSubmit={handelAddition}>
         <label htmlFor="">
             Enter Discription <br />
             value={newDesc}
             <input type="text" required onChange={(ev)=>setDesc(ev.target.value)} />
         </label>
         <br />
         <label htmlFor="">
             Enter Amount <br />
             value={newAmount}
             <input type="number" required onChange={(ev)=>setAmount(ev.target.value)} />
         </label>
         <br />
         <input type="submit" value="add transaction" />
     </form>
    </div>
  );
}

export default Child;