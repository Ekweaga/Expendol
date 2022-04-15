import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import logo from './icon-close.svg';
import logo1 from './illustration-devices.svg';
import logo2 from './icon-hamburger.svg';


const Home = () => {
    return (
        <><div className='top'>
        <div className='header'>
          <ul>
            <li>
              Start
            </li>
            <li>
              Blog
            </li>
            <li>
              Contact
            </li>
            <li>
              Login
            </li>
          </ul>
        </div><br/><br/>
        <div className='content'>
          <div className='content1'>

            <div><span className='ex'>EX</span> <span>Expendol</span></div>

            <h1>
              POWERFUL INSIGHTS INTO YOUR EXPENSE
            </h1>
            <p>
              Expense planning and tracking for agile individuals/teams
            </p>
            <div>
            <Link to="expense"><button>Begin Now</button></Link><span>To see a preview</span>
            </div>
          </div>

          <div className='illusion'>
            <img src={logo1} />
          </div>

        </div>
      </div>
    </>
      )
}

export default Home;
