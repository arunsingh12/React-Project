import React, { useState } from 'react'
import '../Login & SignUp/Login.css'
import {  useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        name:"",
        email: "",
        password: ""
    })

    const [arr, setArr] = useState(()=>{
    let data = localStorage.getItem("signupData")
    if(data != null){
      return JSON.parse(data);
    }
    else{
      return [];
    }
  })

  const inputHandler = (e)=>{
        let name= e.target.name;
        let value = e.target.value;
        setInputData({...inputData, [name]:value})
    }

    const formHandler = (event)=>{
    event.preventDefault();
    // console.log(inputData);
    let loginData = arr.filter((items)=>{
      return inputData.name == items.name && inputData.email == items.email && inputData.password == items.password;
    });
    if(loginData.length > 0){
      navigate('/');
    }
    else{
      alert("Invalid email or password or signup first")
      setInputData({
        name:"",
        email : "",
        password : ""
      })
      navigate('/signup')
    }
  }

  const signupUser = ()=>{
    navigate('/signup')
  }
  return (
    <>
        <div className="container-fluid login_background bg-liglt">
            <div className="row p-5">
            <div className="col-sm-6 p-5">
              <div className="form_content">
                <h1 className='form_head'>Ruby</h1>
                <p className='form_para'>Life is hard enough already. Let us make it a little easier.</p>
              </div>
            </div>
                <div className="col-sm-6 bg-light p-5 form_bg">
                    <form method='post' onSubmit={formHandler}>
                        <div className="form-group">
                            <label htmlFor="name"> <strong>Name:</strong> </label>
                            <input type="text" className='form-control' name='name' placeholder='Enter your name' onChange={inputHandler} value={inputData.name} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"> <strong>Email Id:</strong> </label>
                            <input type="email" className='form-control' name='email' placeholder='Enter your email' onChange={inputHandler} value={inputData.email} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone"> <strong>Password:</strong> </label>
                            <input type="password" className='form-control' name='password' placeholder='Enter your password' onChange={inputHandler} value={inputData.password} required />
                        </div>
                        <div className="form-group">
                        <button type="submit" className="btn btn-primary form-control">Login</button>
                        </div>
                        <hr className='mt-4 mb-4'/>
                    </form>
                        <div className="add_acc text-center" >
                        <input type="button" className='btn btn-success p-3 pl-5 pr-5' onClick={signupUser} value='Create New Account'/>
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}
