import React from 'react'
import './Login.css'
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
        <div className='text'>
       <text>OR</text>
       </div>
       <div className='string'>
        <text>join saasguru with your favorite social media account</text>
       </div>
       <div className='LogoIcon'>
       <div className='google'>
       <GoogleIcon />
       </div>
       <div className='google'>
        <InstagramIcon />
       </div>
       <div className='google'>
        <FacebookIcon />
       </div>
       <div className='google'>
        <LinkedInIcon />
       </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Login