import React from 'react'
import { useState, useEffect } from 'react';
import  Balance from './balance';
import Summary from './summary';
import Transactionlist from './transactionlist';



const Expense = () => {
   
    const [transactions, settransactions] = useState([]);
    const [exp, updateexp] = useState(0);
    const [inc, updateinc]  = useState(0);
    const [exps ,updateexps] = useState(0)

    const addtransactions = (payload)=>{
        
        settransactions([...transactions,payload]);
       // console.log(transactions)


    }
  
    

    return (
        <>
       
        <div className='app' style={{display:'flex',flexDirection:'column',gap:'30px'}}>
       
          
      
           <Balance addtransactions={addtransactions} income={inc} expense={exp}/> 
           <Summary  income={inc} expense={exp}/>
           <Transactionlist transactions={transactions}/>
           </div>


          
        </>
       
    )
}

export default Expense;
