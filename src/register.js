import React from 'react';
import './register.css';

const Register = () => {
    return (
        <div>
        <section>
 
 <form>
     <h1>Create an account</h1>
     <div className="inputcontainer">
<div> <label>UserName</label><br />
<input type="email"  name="email" ></input></div>
<div><label className="pwd">Email</label><br />
<input type="password" name="password" ></input></div><br />
<div><label className="pwd">Password</label><br />
<input type="password" name="password" ></input></div><br/>

<button>Login</button>
</div>
</form>
</section>
  </div>
    )
}

export default Register
