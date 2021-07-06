import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import './Login.css'

function Login() {

    const history = useHistory()
    return (
        <div className="login-page">
           <form className="container">
                <h2 className="login-heading">Website</h2>
                <h3 className="login-continue">Login to continue</h3>
               
                <p>
                <lebel><strong>Email : </strong></lebel>
                <input className="login_input" type="text"/>
                </p>
                <p className="login-pass">
                <lebel><strong>Password : </strong></lebel>
                <input className="login_input" type="password"/>
                </p>
               
                <button className="login_button" onClick={()=>history.push('/')}>Login</button>
               <span>No Account?
                    <Link to='/createaccount'>Create account</Link></span>
                    <p><a href="#">Forget Password ? </a></p>

           </form>
        </div>
    )
}

export default Login
