import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='loginContainer'>
    <div className='Content'>
        <div className='Text'>
            <h2>Welcome back</h2>
        </div>
    <div className='Object'>
        <div className='FirstInput'>
            <text>Email</text>
            <input></input>
        </div>
        <div className='SecondInput'>
        <text>Password</text>
            <input></input>
        </div>
        <div className='Button'>
        <text>Forget Password?</text>
            <button>Login</button>
        </div>
        <p>------------OR-----------</p>

        </div>
        </div>
    </div>
  )
}

export default Login