import React, { useState } from 'react'


const Balance = ({addtransactions,income,expense,addfirebase}) => {
    const [isinputvisible, setVisible] =useState(false)

    const display = ()=>{
        setVisible(!isinputvisible)
    }



    
    return (
       <> <div className='balance' style={{display:'flex',justifyContent:'space-around',flexDirection:'column',alignItems:'center',gap:'20px', Width:'100%'}} >
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <span style={{fontWeight:'800',fontSize:'20px'}}>Balance:${income - expense}</span>
                <button style={{backgroundColor:'brown',border:'none',padding:'10px 20px', marginLeft:'30px',color:'white'}} onClick={()=>setVisible(!isinputvisible)}>{isinputvisible?"CANCEL":"ADD"}</button>
            </div>
           
          { isinputvisible && <Addtrans addview = {display} addtransactions={addtransactions} addfirebase={addfirebase}/>} 
           
        </div>
       

         </>
    )
}

const Addtrans = ({addtransactions,addview,addfirebase})=>{

    const [desc, settext] = useState('');
    const [ num, setnum] = useState('')
    const [type,settype] = useState('EXPENSE')
    const addtransaction = ()=>{
        
        addtransactions({desc,num:Number(num),id:Date.now(),type})
        console.log({desc,num,type,id:Date.now()})
        addview();
       // addfirebase( desc,num,type);
    
    }
    return(

      <> <div style={{display:'flex', flexDirection:'column', width:'300px', gap:'15px',border:'1px solid  gray',padding:'15px 30px', transition:'all ease-in 0.6s',alignItems:'center'}} >
            <input type="number" placeholder='Enter amount'value={num}  onChange={(e)=>setnum(e.target.value)} style={{width:'100%',padding:'8px 5px'}}/>
            <input type="text" placeholder='Desc' value={desc} onChange={(e)=>settext(e.target.value)} style={{width:'100%',padding:'8px 5px'}}/>
            <div style={{width:'100%'}}>
                <label htmlFor='radio'>Expense</label>
                <input type="radio" id="radio"  value="EXPENSE" name="type" checked={type === "EXPENSE"} onChange={(e)=>settype(e.target.value)}/>
                <label htmlFor='income'>Income</label>
                <input type="radio" id="income"  value="INCOME" name="type" onChange={(e)=>settype(e.target.value)} checked={type === "INCOME"}/>
            </div>
            <div style={{width:'100%'}}>
                <button onClick={addtransaction} style={{width:'100%',backgroundColor:'brown',color:'white',border:'none',padding:'8px 5px',borderRadius:'5px',cursor:'pointer'}}>Add Transaction</button>
            </div>


           
        </div>
       </>
    )
}

export default Balance;
