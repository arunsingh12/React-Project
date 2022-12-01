import React from 'react'
import '../Footer/Footer.css';
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
    <div className="container-fluid footer_background">
        <div className="row pt-4 footer_row">
            <div className="col-sm-3">
                <div className="contact">
                    <h6 className="contact_head text-white pb-3">
                    Contacts
                    </h6>
                    <span className='number text-white '>+38(067)3743692</span> <br />
                    <span className="emailid text-white">info@rubydecor.com.ua</span>
                    <p className='schedual text-white'>
                        Opening hours: Mon-Fri 10:00-19:00
                        Sat 10: 00-18: 00; Sun - day off
                    </p>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="information">
                <h5 className="info_head text-white pb-3">Information</h5>
                    <p className='info_content text-white'>
                    Vacancies <br />
                    Public offer agreement
                    Terms of exchange & return of goods
                    </p>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="Menu">
                <h5 className="menu_head text-white  pb-3">Menu</h5>
                    <p className='info_content text-white'>
                    About us <br />
                    Payment and delivery <br /> 
                    Store <br />
                    Contact us <br />
                    </p>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="networks">
                <h5 className="network_head text-white pb-3">We are in social networks
</h5>
                    <ul>
                    <li className='nav-item social_item'> <Link  className='nav-link social text-white' to='#'>Instagram</Link> </li>
                    <li className='nav-item social_item'> <Link  className='nav-link social text-white' to='#'>Facebook</Link> </li>
                    <li className='nav-item social_item'> <Link  className='nav-link social text-white' to='#'>Telegram</Link> </li>
                        <li className='nav-item social_item'> <Link  className='nav-link social text-white' to='#'>Pinterest</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer_text pb-5">
        <hr className='footer_line' />
        <div className="row">
            <div className="col-sm-6">
            <span className='text-white'>Ruby | home decoration and gifts</span>
            </div>
            <div className="col-sm-6 text-right">
            <span className='text-white'> All rights reserved © 2021</span>
            </div>
        </div>
        </div>
    </div>

    </>
  )
}
