import React from 'react'
import './EmptyCart.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

export const EmptyCart = () => {
    const navigate = useNavigate();

    const goToShop = ()=>{
        navigate('/category')
    }

  return (
    <>
          <div className="container">
        <div className="row pb-5">
            <div className="col-sm-5 mx-auto text-center">
                <div className="empty_content">
                <div className="empty_image pb-3">
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png"  className='imf-fluid' alt="" />
                </div>
                           <h1 className='pt-3 '>Your cart is cueerntiy empty</h1> 
                           <p className='empty_para text-muted p-2'>Before Proceed to checkout, you must add some products to your cart. You will find a lot of interesting products on our "Shop" page.</p>

                            <div className="btn_handler pt-4">
                           <span className='shop_icon '><ShoppingCartIcon/></span><input type='button' className='shop_btn' value='RETURN TO SHOP' onClick={goToShop}/>
                           </div>
                    </div>

            </div>
        </div>
        </div>
    </>
  )
}
