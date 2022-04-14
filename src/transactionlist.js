import React, { useState,useEffect } from 'react'

const Transactionlist = ({transactions}) => {

    const [filteredtransactions, updatetransactions] = useState(transactions);
    const [text, searchtext] = useState("");

    const filterdata = (texts) =>{
        if(!texts || !texts.trim().length) {
            updatetransactions(transactions);
           // alert("god")
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
    useEffect(()=>{
        filterdata(text)
    },[transactions])

    
    return (
        <div style={{display:'flex',flexDirection:'column', alignItems:'center',width:'100%'}}>
            <div>
                <input type="text" placeholder="Search a transaction"  style={{width:'100%',backgroundColor:'#e6e8e9',border:'none',padding:'10px 25px',borderRadius:'10px'}} 
                value={text} onChange={(e)=>{searchtext(e.target.value);
                /*filterdata(e.target.value)*/}}/>
            </div>
              <>
              {
                 filteredtransactions?.length ?
                  
                  <table style={{width:'100%'}}>
                  <thead style={{width:'100%'}}>
                      <tr>
                          <th>Expense</th>
                          <th>Amount</th>
                      </tr>
                  </thead>
                  <tbody >
                  {filteredtransactions.map(
          (transaction) =>{
                          return (
                              <tr style={{ border: '1px solid black' }}>
                                  <td style={{ textAlign: 'center' }}>
                                      {transaction.desc.toLowerCase()}
                                  </td>
                                  <td style={{ textAlign: 'center' }}>
                                      #{transaction.num}
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
