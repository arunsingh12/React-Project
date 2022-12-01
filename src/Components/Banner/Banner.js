import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Banner/Banner.css';

export const Banner = () => {
  
    
  return (
<>
        <div className="banner">
    <div className="container-fluid ">

        <div className="banner_content text-center">
            <h1 className='banner_head'>RUBY HOME&GIFTS</h1>
            <p className='banner_text'>Limited addition </p>
            <Link to='/category' className='banner_btn' >SHOP NOW</Link>
        </div>

        </div>
    </div>
</>
    )
}
