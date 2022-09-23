import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import logo from './icon-close.svg';
import logo1 from './illustration-devices.svg';
import logo2 from './icon-hamburger.svg';
import Navbar from './navbar';


const Home = () => {
    return (
        <>
        <div className=" mt-[100px] ml-[100px]"><h1 className="font-bold text-5xl" style={{color:'crimson'}}>EXPENDOL</h1></div>
        <div className="flex items-center justify-around">
            <div className='ml-5'>
                <h2 className="font-bold text-6xl mb-4">Track your expenses</h2>
                <p className="text-1xl">Use  expendol tracker to help you manage your money.</p>
                <div>
                <button style={{background:'crimson',padding:'4px',color:'white',width:'200px'}} className="shadow mt-[50px] rounded p-3 h-[50px]">Sign Up</button>
                </div>
            </div>
            <div>
                <img src={logo1} className="w-[800px]"/>
            </div>
        </div>
        <div></div>






        <div style={{background:'crimson'}} className=" text-white flex items-center mt-[100px]">
            <div className="w-[500px] m-[100px]">
                <h1 className="text-4xl font-bold">Expendol, a better tool to
            manage your finances</h1>
            <div>
            <button style={{background:'white',padding:'4px',color:'crimson',width:'200px'}} className="shadow mt-[50px] rounded p-3 h-[50px]">Sign Up</button>
            </div>
            </div>
        </div>
    </>
      )
}

export default Home;
