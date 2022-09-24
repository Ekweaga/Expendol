import React,{useContext, useState} from 'react';
import './register.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useHistory, Link } from "react-router-dom";
import { auth } from './firebase';
import { Auth } from './Context';
import { setDoc,doc } from 'firebase/firestore';
import {projectfirestore} from "./firebase" 

const Register = () => {
  const [error, seterror] = useState(null);
  const [success, setsuccess] = useState(null)
  const [email,setEmail] = useState('')
   const [pwd,setPwd] = useState('')
   const history = useHistory()
   const {user} = useContext(Auth)


   const  signup = async (e)=>{
    e.preventDefault();
  

    if(email === "" || pwd === ""){
      seterror("Fields are empty")
      setEmail('')
     setPwd('')
  
     
    }
    else if(pwd.length < 6){
      seterror("Password characters must be greater than 6")
      setEmail('')
      setPwd('')
    }
   else{
    try{
      await createUserWithEmailAndPassword(auth,email,pwd).then((response)=>{
        console.log(response.user.refreshToken)
        localStorage.setItem('token', JSON.stringify(response.user.refreshToken))
        
      });
      await setDoc(doc(projectfirestore, "users", `${email}`),{
        saveTransactions:[]
      })
   
     setsuccess("Your Account is created successfully")
     seterror(null)
     setEmail('')
     setPwd('')
     setTimeout(()=>{
      history.replace("/login");
     },1000)
   
    
   }
   catch(err){
   seterror(err.message)
   console.log(err)

   }
   }
    
 
  

  }
 
    return (
      <div className='flex items-center justify-center mt-[100px]'>
              <section>
              <div className="mb-6">
            <h1 className="font-bold text-center text-3xl mb-3" style={{color:'crimson'}}>EXPENDOL</h1>
           <p className="text-center">Please Create an Account</p>

        </div>
       
       <form onSubmit={signup}>
       
           
           <div className="inputcontainer flex flex-col items-center justify-center">
            {error ? <div className="border border-red-700 text-red-800 w-[300px] p-2 flex flex-col items-center justify-center mb-4"><p>{error}</p></div>:null}
            {success ? <div className="bg-green-700 text-white w-[300px] p-2 flex flex-col items-center justify-center mb-4"><p>{success}</p></div>:null}
      <div> <label style={{color:'crimson'}}>Email</label><br />
     <input type="email"  name="email" className='w-[330px]' value={email} onChange={(e)=>setEmail(e.target.value)}></input></div><br/>
     <div><label className="pwd" style={{color:'crimson'}}>Password</label><br />
     <input type="password" name="password" className='w-[330px]' value={pwd} onChange={(e)=>setPwd(e.target.value)} ></input></div><br />
     <button className="ml-[10px] text-white p-3 w-[300px] rounded" style={{background:'crimson'}}>SIGN UP</button>
     <div className="mt-4">
      <p>Have an account on expendol? <span style={{color:'crimson'}}><Link to="login">Login</Link></span></p>
     </div>
     </div>
     </form>
   </section>
        </div>
    )
}

export default Register
