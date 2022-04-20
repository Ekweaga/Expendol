import React from 'react'

const Login = () => {
    return (
        <div>
              <section>
       
       <form >
           <h1>LOGIN</h1>
           <div className="inputcontainer">
      <div> <label>Email</label><br />
     <input type="email"  name="email" ></input></div>
     <div><label className="pwd">Password</label><br />
     <input type="password" name="password" ></input></div><br />
     <button>Login</button>
     </div>
     </form>
   </section>
        </div>
    )
}

export default Login
