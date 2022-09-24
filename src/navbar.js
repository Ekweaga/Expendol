import React, { useContext } from 'react'
import { Link,useHistory } from 'react-router-dom';

import './nabar.css';
import closeimg from './icon-close.svg';
import openimg from './icon-hamburger.svg'
import { useState,useEffect } from 'react';
import { Auth } from './Context';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from './firebase';
const Navbar = () => {
  const {user} = useContext(Auth)
  const [toggle,settoogle] = useState(false);
  const [close,setclose] = useState(true);
  const [open,setopen] = useState(false);
 const history = useHistory()

  const logout = async ()=>{
    await signOut(auth)
    history.replace("/login");
    localStorage.clear();
}
  const tooglenav=()=>{
    settoogle(true)
    setclose(false)
    setopen(true)
  }
  const toogleclose = ()=>{
    settoogle(false);
    setclose(true)
    setopen(false)
  }
 
  return (
    <><nav className=" p-[30px]  h-[50px] mb-[50px] relative  ">
      <div className="flex items-center justify-between mx-4 ">
        <div >
          <h3 className="font-extrabold text-2xl cursor-pointer" style={{color:'crimson'}}><Link to="/">EXPENDOL</Link></h3>
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center justify-between gap-[50px]">
            <li><Link to="/">Home</Link></li>
            <li><Link to="expense">Dashboard</Link></li>
            <li><a href='#features'>Features</a></li>
            <li><button style={{background:'crimson',padding:'4px',color:'white'}} className="shadow w-[150px] rounded" >
              {user ? <Link to="login" onClick={logout}>Logout</Link>:<Link to="signup">Sign Up</Link>}</button></li>
          </ul>
        </div>
        <div className='menubar md:hidden block'>
         {close &&(<button className='ham' onClick={tooglenav} style={{backgroundColor:'transparent',border:'none',color:'#2FC3B4'}}><img src={openimg} style={{width:'20px',height:'20px',cursor:'pointer' }} alt="img"/></button>)}  
        {open &&(<button className='close' onClick={toogleclose} style={{backgroundColor:'transparent',border:'none',color:'#2FC3B4'}}> <img src={closeimg} style={{width:'20px',height:'20px',cursor:'pointer'}} alt="imgs"/></button>)} 
         </div> 
      </div>
     
         <div className={close ? 'responsive':'open'} style={{zIndex:'22222'}}>
          <ul className="flex-col shadow items-center justify-between gap-[50px] mt-[150px] px-8 ">
            <li className="mb-10" onClick={toogleclose}><Link to="/">Home</Link></li>
            <li className="mb-10" onClick={toogleclose}><Link to="expense">Dashboard</Link></li>
            <li className="mb-10" onClick={toogleclose}><a href='#features'>Features</a></li>
            <li onClick={toogleclose}><button style={{background:'crimson',padding:'4px',color:'white'}} className="shadow w-[150px] rounded" >
              {user ? <Link to="login" onClick={logout}>Logout</Link>:<Link to="signup">Sign Up</Link>}</button></li>
          </ul>
        </div>
      
          </nav>
         </>
  )
}

export default Navbar