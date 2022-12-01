import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Login & SignUp/Signup.css'

export const SignUp = () => {
    const navigate = useNavigate();

    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        number: "",
        password: ""
    })

    const [arr, setArr] = useState(()=>{
        let data = localStorage.getItem("signupData")
        if(data != null){
            return JSON.parse(data)
        }
        else{
            return []
        }
    });

    const inputHandler = (e)=>{
        let name = e.target.name;
        let value = e.target.value
        setInputData({...inputData, [name]:value})
    }

    const formHandler = (event)=>{
        event.preventDefault();
        // console.log(inputData);
        let newarr = arr.filter((items, index) => {
            return inputData.email == items.email
        });
        if (newarr.length > 0) {
            alert("Email already exists");
            setInputData({
                username: "",
                email: "",
                password: ""
            })
        }
        else {
            alert("Sign In Successfully")
            setArr([...arr, inputData]);
            // navigate('/login')

            setInputData({
                username: "",
                email: "",
                password: ""
            });
        }
        setInputData({
        name: "",
        email: "",
        number: "",
        password: ""
    })
    }
    // console.log(arr)


    useEffect(() => {

         localStorage.setItem("signupData" , JSON.stringify(arr))
    },[arr]);
  return (
    <>
        <div className="container-fluid signup_bg">
            <div className="row p-4">
                <div className="col-sm-6  mx-auto bg-light ">
                <div className="form_head">
                    <h1 className='text-center'>Sign Up </h1>
                </div>
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
                            <label htmlFor="phone"> <strong>Phone no :</strong> </label>
                            <input type="number" className='form-control' name='number' placeholder='Enter your number' onChange={inputHandler} value={inputData.number} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone"> <strong>Password:</strong> </label>
                            <input type="password" className='form-control' name='password' placeholder='Enter your password' onChange={inputHandler} value={inputData.password} required />
                        </div>
                        <div className="form-group">
                        <button type="submit" className="btn btn-primary form-control">SignUp</button>
                        </div>
                        <div className="login_link text-right">
                            <Link to='/login'>Login?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
