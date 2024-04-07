import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate=useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
        navigate('/');
    }
}, []);

  const loginhandler = async () => {
    console.log(password, email)
    let result = await fetch('http://localhost:5000/login',
      {
        method: 'post',
        body:JSON.stringify({ email, password }),
        headers:{
          'Content-Type':'application/json'
        }
      }
    )
    result=await result.json();
    console.warn(result)
    if(result.name){
      localStorage.setItem("user",JSON.stringify(result));
      navigate('/')
    }
    else{
      window.alert('incorect information');
    }
  }
 
  return (
    <div className='login SignUp'>
      <h1>User Login</h1>
      <div className='userinput'>
        <input className='input' type='text' placeholder='enter mail' onChange={(e) => setEmail(e.target.value)} value={email}></input>
        <input className='input' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
        <button className='signup_button input' onClick={loginhandler}>SignIn</button>
      </div>
    </div>
  )
}

export default Login;
