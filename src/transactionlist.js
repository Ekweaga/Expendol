import React, { useState,useEffect, useContext } from 'react'
import { Auth } from './Context';
import {AiOutlineSearch} from "react-icons/ai"

const Transactionlist = () => {
    const {transactions,filterdata} = useContext(Auth)

    const [text,searchtext] = useState('')

   

  
    
    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'center',width:'100%'}}>
            <div className="mb-[30px] mt-[30px] flex flex-row-reverse items-center justify-center shadow rounded px-4">
                <AiOutlineSearch onClick={()=>filterdata(text)} className="h-[20px] cursor-pointer" style={{width:'40px'}}/>
                <input type="text" placeholder="Search a transaction"  className="md:w-[500px] w-[300px] border border-none" 
                value={text} onChange={(e)=>{searchtext(e.target.value);
                }}/>
              
            </div>
              <>
              {
                 transactions?.length ?
                  
                  <table style={{width:'100%'}}>
                  <thead style={{width:'100%'}}>
                      <tr>
                          <th>Expense</th>
                          <th>Amount</th>
                        <th>Date</th>
                      </tr>
                  </thead>
                  <tbody >
                  {transactions.map(
          (transaction) =>{
                          return (
                              <tr style={{  }}>
                                  <td style={{ textAlign: 'center' }}>
                                      {transaction.desc.toLowerCase()}
                                  </td>
                                  <td style={{ textAlign: 'center' }}>
                                      #{transaction.num}
                                  </td>
                                  <td style={{ textAlign: 'center' }}>
                                      {transaction.date}
                                  </td>

                              </tr>
                          );
                      }
      )}
                  </tbody>
                  </table> :<div><h1 style={{textAlign:'center'}}>No transactions Recorded</h1></div> 

              }
             
        
          </>
        </div>
    )
}

export default Transactionlist ;
