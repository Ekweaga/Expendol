import React from 'react'
import facbk from "./icon-facebook.svg"
import insta from "./icon-instagram.svg"
import twt from "./icon-twitter.svg"
import ytube from "./icon-pinterest.svg"
import {Link} from "react-router-dom"

function Footer() {
  return (
    <>
    <footer className='md:h-[250px] mt-[200px] text-white' style={{background:'crimson'}}>
        <div className="flex flex-col md:flex-row items-center justify-around py-10">

        <div className='md:w-[500px] px-3'>
            <h1 className="font-bold mb-5">Expendol</h1>
            <p>Maximize your finances budgets and spending,Keep tracks of your bills and expenditures.<br/>See the total of your transactions and incomes for the current day, month, or year.</p>
        </div>
        <div>
            <div className="flex flex-col items-center justify-center -ml-[300px] md:ml-0 mt-4 md:mt-0">
            <h1 className="font-bold mb-5">LINKS</h1>
        <ul className="flex items-center justify-between  flex-col gap-[15px] text-sm">
            <li>Home</li>
            <li>Dashboard</li>
            <li><a href='#features'>Features</a></li>
            <li><button style={{padding:'4px',color:'white'}} className=" w-[150px] rounded"><Link to="signup">Sign Up</Link></button></li>
          </ul>
          </div>
        </div>
        <div className="flex gap-[20px] items-center justify-center -ml-[200px] md:ml-0 mt-4">
         <img src={facbk}/>
          <img src={insta}/>
           <img src={twt}/>
            <img src={ytube}/>
        </div>
        </div>
    </footer>
    
    </>
  )
}

export default Footer