import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const [state,setstate]=useState({
        email:"",
        password:"",
    })
    const handleChange=(e)=>{
        const {name,value} = e.target
        setstate({...state,[name]:value})
    }
    // console.log(state);
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.get(`http://localhost:3000/users?email=${state.email}`)
        .then((res)=>{
            // console.log(res.data);
            if(res.data.length == 0)
            {
                alert("User not registered yet!");
            }
            else 
            {
                if(res.data[0].password === state.password)
                {
                    alert("User successfully logged in");
                    navigate("/")
                }
                else{
                    alert("Password is wrong")
                }
            }
        })
    }
    
  return (
    <div className='h-[280px] w-[28%] border ml-[36%] mt-[80px]'>
        <form action="" className='flex flex-col items-center' onSubmit={handleSubmit}>
            <h1 className='text-[20px] font-semibold mt-[20px]'>Login</h1>
            <input type="text" className='h-[40px] w-[75%] border-b mt-[20px] pl-[5px]' name="email" id="" placeholder='Email' onChange={handleChange}/>
            <input type="text" className='h-[40px] w-[75%] border-b mt-[20px] pl-[5px]' name="password" id="" placeholder='Password' onChange={handleChange}/>
            <input type="submit" className='h-[40px] w-[75%] border mt-[20px] cursor-pointer'/>
            <p className='mt-[10px]'>New User ? <u><Link to="/Signup">Create an account</Link></u></p>
        </form>
    </div>
  )
}
export default Login