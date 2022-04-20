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
    <><nav>{(toggle || screenwidth > 500) && (<ul>
            <li style={{color:'white',textDecoration:'none'}}>
            <Link to="register" style={{color:'black',textDecoration:'none'}}>Start</Link> 
            </li>
            <li style={{color:'black',textDecoration:'none'}}>
              Blog
            </li>
            <li style={{color:'black',textDecoration:'none'}}>
              Contact
            </li>
            <li>
             <Link to="login" style={{color:'black',textDecoration:'none'}}>Login</Link> 
            </li>
         
          </ul>)}
        {close &&(<button className='ham' onClick={tooglenav}><img src={logo3} style={{width:'20px',height:'20px',cursor:'pointer'}}/></button>)}  
        {open &&(<button className='close' onClick={toogleclose}> <img src={logo4} style={{width:'20px',height:'20px',cursor:'pointer'}}/></button>)} 
          </nav>
         </>
  )
}

export default Navbar