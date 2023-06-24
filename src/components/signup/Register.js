import React, {useState} from 'react'
import './Register.css'
import axios from 'axios'

function Register() {

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } =e.target
        setUser({
             ...user,
             [name]: value
        })
       
    }

    const register = () => {
      const {name,email, password, reEnterPassword } = user
      if (name && email && password && (password === reEnterPassword)){
        console.log("you are success")
        axios.post("http://localhost:5000/register",user)
       .then(res => console.log(res))
      }
      else{
        alert("invalid input")
      }
    
    }

  return (
    <center><div className='Register'>
        {console.log("User", user)}
        <h1>Register</h1>
        <input type="text" name= "name" value={user.name} placeholder="Enter your Name" onChange={ handleChange } ></input>
        <input type="text" name= "email" value={user.email} placeholder="Enter your Email"  onChange={ handleChange }></input>
        <input type="password" name= "password" value={user.password} placeholder="Enter your Password"  onChange={ handleChange }></input>
        <input type="password" name= "reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter your password"  onChange={ handleChange }></input>
        <button><div className="button" onClick={ register } >Register</div></button>
        <div>OR</div>
        <button><div className="button">Login</div></button>
        
        
    
   </div>
   </center>
  )
}

// var currentdate = new Date(); 
// var datetime = "Last Sync: " + currentdate.getDate() + "/"
//                 + (currentdate.getMonth()+1)  + "/" 
//                 + currentdate.getFullYear() + " @ "  
//                 + currentdate.getHours() + ":"  
//                 + currentdate.getMinutes() + ":" 
//                 + currentdate.getSeconds();
// //console.log(req.body, currentdate,datetime)
// document.getElementById("p1").innerHTML = datetime;

export default Register