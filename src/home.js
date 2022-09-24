import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import logo from './icon-close.svg';
import logo1 from './expendol.png';
import logo2 from './icon-hamburger.svg';
import Navbar from './navbar';
import {RiMoneyDollarCircleFill} from "react-icons/ri"


const Home = () => {

    const features = [
        {
            point:'See your current balance',
            desc:'See the total of your transactions and incomes for the current day, month, or year.',
            img:RiMoneyDollarCircleFill
        }, {
            point:'View upcoming bills',
            desc:'View upcoming bills and incomes so you can plan your spending.',
            img:''
        }, {
            point:'Control your spending with budgets',
            desc:'Use the budgets page to keep track of income sources.',
            img:''
        }
    ]
    return (
        <>
        <div className=" mt-[100px] md:ml-[100px] mb-[50px]"><h1 className="font-bold text-5xl text-center md:text-left" style={{color:'crimson'}}>EXPENDOL</h1></div>
        <div className="flex items-center justify-around flex-col-reverse md:flex-row px-4 mb-[100px]">
            <div className='ml-5 md:px-[30px] md:w-[80%] md:ml-[100px]'>
                <h2 className="font-bold text-5xl mb-4">Track your expenses</h2>
                <p className="text-1xl">Use  expendol tracker to help you manage your money.</p>
                <div>
                <button style={{background:'crimson',padding:'4px',color:'white',width:'200px'}} className="shadow mt-[50px] rounded p-3 h-[50px]">GET STARTED</button>
                </div>
            </div>
            <div className="  mb-[20px] md:mb-0" style={{boxShadow:'0px 10px 30px rgba(0,0,0,0.2)'}}>
                <img src={logo1} />
            </div>
        </div>
        <div></div>

        <div className="features flex md:mt-[200px] gap-[20px] px-[20px] flex-col mt-[100px] md:flex-row" id="features">
            <div style={{boxShadow:'0px 10px 30px rgba(0,0,0,0.2)'}} className="px-[30px]">
                <img src={logo1} />
            </div>
            <div className="md:w-[80%]">
            <div className="mb-[40px] ">
                <h1 className="font-bold text-4xl">Use a smart expense tracker</h1>
                <p>Expendol smart features help you to manage your country</p>
            </div>

            <div className="">
                {features.map((item)=>{
                    return <div className="mb-[40px] flex flex-col  justify-center">
                        <h2 className="font-bold mb-3">{item.point}</h2>
                        <div className='flex items-center justify-center gap-4'><RiMoneyDollarCircleFill style={{color:'crimson',fontSize:'25px'}}/> <p>{item.desc}</p></div>
                    </div>
                })}
            </div>
            </div>
        </div>






        <div style={{background:'crimson'}} className=" text-white flex items-center mt-[100px]">
            <div className="w-[500px] m-[100px]">
                <h1 className="md:text-4xl font-bold text-2xl">Expendol, a better tool to
            manage your finances</h1>
            <div>
            <button style={{background:'white',padding:'4px',color:'crimson',width:'200px'}} className="shadow mt-[50px] rounded p-3 h-[50px]"><Link to="signup">Sign Up</Link></button>
            </div>
            </div>
        </div>

        <div className="testimonials md:w-[80%] mx-auto w-[90%] flex flex-col mt-[100px] justify-center">
            <h1 className="font-bold text-3xl mb-4">Customer's Testimonials</h1>

            <div>
                <section>"I was very satisfied with expendol, a very a application that keep tracks of your money,spending and expenditures.
                Maximize your finances budgets and spending,Keep tracks of your bills and expenditures. Great team, great product. Bravo fellas!!"

                </section>
            </div>
            <div className='mt-[40px]'>
                <h4 className="font-bold">John Stones</h4>
                <p>Business Manager</p>
            </div>
        </div>
    </>
      )
}

export default Home;
