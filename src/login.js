import React from 'react'
import {Link} from "react-router-dom"
const Login = () => {
    return (
        <div className='flex items-center justify-center mt-[100px]'>
              <section>
              <div className="mb-6">
            <h1 className="font-bold text-center text-3xl">Welcome back</h1>
           <p className="text-center">Login to continue</p>

        </div>
       
       <form >
       
           
           <div className="inputcontainer flex flex-col items-center justify-center">
      <div> <label style={{color:'crimson'}}>Email</label><br />
     <input type="email"  name="email" className='w-[330px]' ></input></div><br/>
     <div><label className="pwd" style={{color:'crimson'}}>Password</label><br />
     <input type="password" name="password" className='w-[330px]'></input></div><br />
     <button className="ml-[10px] text-white p-3 w-[300px] rounded" style={{background:'crimson'}}>LOGIN</button>
     <div className="mt-4">
      <p>Don't have an account? <span style={{color:'crimson'}}><Link to="/signup">Sign Up</Link></span></p>
     </div>
     </div>
     </form>
   </section>
        </div>
    )
}

export default Login
