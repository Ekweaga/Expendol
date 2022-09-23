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
  
    const dew = ()=>{
        let expenses = 0;
         
        transactions.map((item)=>{
           
            item.type === "EXPENSE" ? expenses = expenses + 1 : expenses = 0;
      

    });
    updateexps(expenses)
    }
    const cal = ()=>{
        let inc = 0;
        let exp = 0;
       
        transactions.map((item)=>{
           
                item.type === "EXPENSE" ? exp = exp + item.num : inc = inc + item.num 
          

        })
        updateexp(exp);
        updateinc(inc)
      

    }

   useEffect(()=>{
        cal();
        dew();
   },[transactions])

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
