import React,{useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory, Link } from "react-router-dom";
import { auth } from './firebase';
const Login = () => {

    const [error, seterror] = useState(null);
    const [success, setsuccess] = useState(null)
    const [email,setEmail] = useState('')
     const [pwd,setPwd] = useState('')
     const history = useHistory()
     const  login = async (e)=>{
        e.preventDefault();
       
    
        if(email === "" || !pwd === "" ){
          seterror("Fields are empty")
          
        }
    
       else{
        try{
          await signInWithEmailAndPassword(auth,email,pwd)
      
         history.replace("/expense");
         
       }
       catch(err){
         console.log(err)
         seterror(err.message)
       }
    
       }
       
       
      
    
      }
    return (
        <div className='flex items-center justify-center mt-[100px]'>
              <section>
              <div className="mb-6">
            <h1 className="font-bold text-center text-3xl">Welcome back</h1>
           <p className="text-center">Login to continue</p>

        </div>
       
       <form onSubmit={login}>
       
           
           <div className="inputcontainer flex flex-col items-center justify-center">
           {error ? <div className="border border-red-700 text-red-800 w-[300px] p-2 flex flex-col items-center justify-center mb-4"><p>{error}</p></div>:null}
            {success ? <div className="bg-green-700 text-white w-[300px] p-2 flex flex-col items-center justify-center mb-4"><p>{success}</p></div>:null}
      <div> <label style={{color:'crimson'}}>Email</label><br />
     <input type="email"  name="email" className='w-[330px]' value={email} onChange={(e)=>setEmail(e.target.value)}></input></div><br/>
     <div><label className="pwd" style={{color:'crimson'}}>Password</label><br />
     <input type="password" name="password" className='w-[330px]' value={pwd} onChange={(e)=>setPwd(e.target.value)}></input></div><br />
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
