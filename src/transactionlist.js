import React, { useState,useEffect } from 'react'

const Transactionlist = ({transactions}) => {

    const [filteredtransactions, updatetransactions] = useState([]);
    const [text, searchtext] = useState("");

    const filterdata = (texts) =>{
        if(!texts || !texts.trim().length) {
         
           alert("Filter")
            return;
        }
else{
    const txn = [...transactions]  ; 
    txn = txn.filter((item)=>{
       item.desc.toLowerCase().includes(texts.toLowerCase().trim())
    });

    updatetransactions(txn);
}
      

    }
   

    
    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'center',width:'100%'}}>
            <div className="mb-[30px] mt-[30px]">
                <input type="text" placeholder="Search a transaction"  className="md:w-[500px] w-[300px]" 
                value={text} onChange={(e)=>{searchtext(e.target.value);
                }}/>
                <button onClick={()=>filterdata(text)}>search</button>
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
                                      {transaction.id}
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
