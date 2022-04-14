import React from 'react'

const Summary = ({income,expense}) => {
    return (
        <div className='summary' style={{display:'flex',justifyContent:'space-evenly' ,Width:'600px',alignItems:'center'}} >
        <div style={{width:'200px' , height:'50px',boxShadow:'2px 2px 2px 2px rgba(0,0,0,0.2)',padding:'30px'}}>
          <span style={{textAlign:'center',fontSize:'20px',marginLeft:'40px'}}>Expense</span> <br/>
          <span style={{textAlign:'center',fontSize:'25px',marginLeft:'40px',color:'red'}}>${expense}</span>
        </div>
        <div style={{width:'200px' , height:'50px',boxShadow:'2px 2px 2px 2px rgba(0,0,0,0.2)', padding:'30px'}}>
        <span style={{textAlign:'center',fontSize:'20px',marginLeft:'40px'}}> Income</span><br/>
          <span style={{textAlign:'center',fontSize:'25px',marginLeft:'40px',color:'green'}}>${income}</span>
        </div>
    </div>
    )
}

export default Summary;
