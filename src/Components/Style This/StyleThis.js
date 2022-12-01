import React from 'react'
import '../Style This/StyleThis.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const StyleThis = () => {
  return (
    
    <>
        <div className="container-fluid">
        <div className="shipping_box ">
                <input type="button" className='ship_btn' value='Shipping and returns'/>
            </div>
            <div className="style_box pl-3">
            <h3 className='' >Style this with</h3>
                <div className="row">
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="style_img">
                                    <img src="https://media.architecturaldigest.com/photos/608c466e59e3e3029845b66c/1:1/w_794,h_794,c_limit/Objectify-Ombre-Teal-Wall-Clock-With-Neutra-Numerals.jpg" alt="" />
                                </div>
                                <h5>Minimalist wall clock</h5>
                                <span>$450</span>
                            </div>
                            <div className="col-sm-3">
                            <div className="style_img">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCi9MhRXn-7XImcSBT2WFiTEGKlr6nvy74XA&usqp=CAU" alt="" />
                                </div>
                                <h5>Painting </h5>
                                <span>$450</span>
                            </div>
                            <div className="col-sm-3">
                            <div className="style_img">
                                    <img src="https://cdn.shopify.com/s/files/1/2690/0106/products/DSCF9218_large.jpg?v=1665644610" alt="" />
                                </div>
                                <h5>Vase</h5>
                                <span>$450</span>
                            </div>
                            <div className="col-sm-3">
                            <div className="style_img">
                                    <img src="https://assets.ajio.com/medias/sys_master/root/20220527/xB8z/6290825af997dd03e23a1679/-1117Wx1400H-463026762-gold-MODEL.jpg" alt="" />
                                </div>
                                <h5>Golden vase</h5>
                                <span>$450</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 text-center">
                    <ChevronRightIcon className='right_arrow'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
