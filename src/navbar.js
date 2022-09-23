import React from 'react'
import { Link } from 'react-router-dom';
import logo3 from './icon-hamburger.svg';
import logo4 from './icon-close.svg';
import './nabar.css';
import { useState,useEffect } from 'react';
const Navbar = () => {
  const [toggle,settoogle] = useState(false);
  const [close,setclose] = useState(true);
  const [open,setopen] = useState(false);
  const [screenwidth, setscreenwidth] = useState(window.innerWidth)
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
  useEffect(()=>{
    const changewidth = ()=>{
      setscreenwidth(window.innerWidth)
    }
    window.addEventListener('resize',changewidth)
  },[])
  return (
    <><nav className=" p-4 shadow h-[50px]">
      <div className="flex items-center justify-between mx-4 pb-4">
        <div >
          <h3>EXPENDOL</h3>
        </div>

        <div>
          <ul className="flex items-center justify-between gap-[10px]">
            <li>Home</li>
            <li>Dashboard</li>
            <li>Features</li>
            <li><button style={{background:'crimson',padding:'4px',color:'white'}}>Sign Up</button></li>
          </ul>
        </div>
      </div>
      
          </nav>
         </>
  )
}

export default Navbar