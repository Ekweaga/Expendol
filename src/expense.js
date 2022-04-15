import React from 'react'
import { useState, useEffect } from 'react';
import  Balance from './balance';
import Summary from './summary';
import Transactionlist from './transactionlist';
import {  push, ref, set, onValue} from "firebase/database";
import {database} from './firebase';

const Expense = () => {
    let id = 0;
    const [transactions, settransactions] = useState([]);
    const [exp, updateexp] = useState(0);
    const [inc, updateinc]  = useState(0);
    const [exps ,updateexps] = useState(0)

    const addtransactions = (payload)=>{
        let transactionsarray = [...transactions];
        transactionsarray.push(payload)
        settransactions(transactionsarray);
       // console.log(transactions)


    }
   // const addfirebase = ( desc,amount,type)=> {
     //   id = id + 1
      //  const db = database;
      //  push(ref(db, 'Transactions/' + id), {
        //  Description: desc,
         //  price: amount,
         // type:type
         
      //  } 
      //  )
      //  ;
   // const starCountRef = ref(db, 'Transactions/' + id);
  // onValue(starCountRef, (snapshot) => {
  //const data = snapshot.val();
 
 
//});
       // ;
     // }
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
        <div className='top' style={{backgroundColor:'brown', width:'100%',height:'50px', display:'flex',flexDirection:'column',justifyContent:'center',
    marginBottom:'20px',alignItems:'center'}}>
           <span style={{marginLeft:'40px',fontSize:'20px',color:'white'}}> Viewing {exps} expenses</span>
        </div>
        <div className='app' style={{display:'flex',flexDirection:'column',gap:'30px'}}>
       
            <header style={{textAlign:'center'}}>
                <h1>Expense Tracker</h1>
            </header>
      
           <Balance addtransactions={addtransactions} income={inc} expense={exp}/> 
           <Summary  income={inc} expense={exp}/>
           <Transactionlist transactions={transactions}/>
           </div>


          
        </>
       
    )
}

export default Expense;
