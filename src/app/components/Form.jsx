import React,{useState} from 'react'

const Form = () => {
const [email,setEmail]=useState('johndoe@gmail.com');
  return (
    <>
    <div className='flex flex-col form'>
        <label>Email address</label>
        <input type="email" placeholder={email}></input>
        <label>Password</label>
        <input type="password" placeholder='••••••••'></input>
        <h3>Forgot Password</h3>
        <a href='/dashboard'><button className='login-btn'>Sign In</button></a>
    </div>
        <h3 className='forgot-pwd'>Don't have an account? <span className='text-blue-500'>Register here</span></h3>
    </>
  )
}

export default Form