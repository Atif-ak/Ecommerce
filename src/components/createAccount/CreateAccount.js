import axios from 'axios'
import React,{useState} from 'react'
import './CreateAccount.css'
import {useHistory} from 'react-router-dom'


function CreateAccount() {

    const history = useHistory()
const [name,setName] = useState('')
const [phone,setPhone] = useState('')
const [email,setEmail] = useState('')
const [pass,setPass] = useState('')


    const submitHandler =e =>{
        e.preventDefault();
        console.log('entered')
      axios.post('/createAccount',{
          headers:{'Content-type': 'application/json'},
          body:JSON.stringify({
            name,phone,email,pass
          })
      })
      .then(res=>{
          console.log(res)
          history.push('/login')
      })
      .catch(err=>console.log(err))
    }
    // console.log(name)
    // console.log(email)
    return (
        <form onSubmit={(e)=>submitHandler(e)} className="CreateAccount_container">
            
            <h2>Welcome to the website</h2>
            <div className="CreateAccount_box">
              
               <p  className="first_para">
                <lebel>
                    Name :
                </lebel>
                
                <input className="createaccount_input" type="text" name="name" onChange={(e)=>setName(e.target.value)}/>
                </p>
                <p  className="createaccount_para">
                <lebel>
                    
                    Phone no :  
                </lebel>
                <input className="createaccount_input"  type="number" name="phone" onChange={(e)=>setPhone(e.target.value)}/>
                </p>
                <p className="first_para">
                <lebel>
                    Email :
                </lebel>
                <input className="createaccount_input" type="text"  name="email" onChange={(e)=>setEmail(e.target.value)}/>
                </p>
                <p className="createaccount_para">
                <lebel>
                    Password :
                </lebel>
                <input className="createaccount_input" type="password" name="password" onChange={(e)=>setPass(e.target.value)}/>
                </p>
                <p className="createaccount_para">
                    <input className="createaccount_input" type="checkbox"/>I agree to the Terms and Conditions
                </p>
                <button type="submit"  className="createaccount_button">Create Account</button>

            </div>
            
        </form>
    )
}

export default CreateAccount
