import React, {useState} from 'react'
import './Login.css'
import axios from 'axios'

function Login() {

  const [ user, setUser] = useState({
    email:"",
    password:""
    
})

const handleChange = e => {
    const { name, value } =e.target
    setUser({
         ...user,
         [name]: value
    })
   
}

const login = () => {
  axios.post("http://localhost:5000/login", user)
  .then(res => console.log(res))
}

  return (
   <center><div className='Login'>
         {console.log(user)}
        <h1>Login</h1>
        <input type="text" name= "email" value={user.email} onChange={handleChange} placeholder="Enter you Email" className='input'></input>
        <input type="password" name= "password" value={user.password} onChange={handleChange} placeholder="enter your password" className='input'></input>
        <button><div className="button" onClick={login}>Login</div></button>
        
        <button><div className="button" >Register</div></button>
    
   </div>
   </center>
  )
}

export default Login