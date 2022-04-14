import React from 'react'

const Login = () => {
    return (
        <div>
              <section>
       
       <form >
           <h1>LOGIN</h1>
           <div className="inputcontainer">
      <div> <label>Email</label><br />
     <input type="email" onChange={handlechange} name="email" value={email}></input></div>
     <div><label className="pwd">Password</label><br />
     <input type="password" name="password" value={password} onChange={handlechange}></input></div><br />
     <button>{loading ? "Logging....":"Login"}</button>
     </div>
     </form>
   </section>
        </div>
    )
}

export default Login
