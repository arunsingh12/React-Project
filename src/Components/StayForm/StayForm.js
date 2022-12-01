import React from 'react'
import '../StayForm/Form.css';
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';

export const StayForm = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                </div>
                <div className="col-sm-6">
                    <div className="row row_boder p-4">
                        <div className="col-sm-6">
                            <h2 className="stay_head">Stay in touch</h2>
                            <p className="stay_para">Sign up for emails packed with finds and inspiration</p>
                        </div>
                        <div className="col-sm-6">
                            <div className="form_data">
                                <input type="text" className='form_input' placeholder='Enter your email' /> <br />
                                <input type="button" className='form_btn mt-3'  value='SUBMIT'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                <div className="follow_box">
                <Link to='#' className='follow_link'>
                    <span> Follow us</span>
                </Link><InstagramIcon className='insta_icon mb-3 ml-4'/>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}
