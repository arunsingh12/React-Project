import React, { useEffect, useState } from 'react'
import '../Add to cart/Cart.css'
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'
import { EmptyCart } from './EmptyCart';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Remove_item } from '../Redux/Action/action';
import { DecreaseItem } from '../Redux/Action/action';
import { Add_Cart } from '../Redux/Action/action';

export const AddToCart = () => {
    const dispatch = useDispatch(); 
    const [price, setPrice] = useState();

    const cartResult = useSelector((state) => state.cardReducer.carts);
    // console.log(cartResult)

    const removeItem = (id)=>{
        dispatch(Remove_item(id))
    }
     

    const decrementHandel = (items)=>{
        dispatch(DecreaseItem(items))
    }
   const incrementHandel = (items)=>{
    dispatch(Add_Cart(items))
   }
   
   // Total amount
  const total = () => {
    let price = 0;
    cartResult.map((e) => {
      price = price + e.price * e.qnty;
    })
    setPrice(price)
  }

  useEffect(() => {
    total();
  }, [total])
   


  return (
    <>
    {cartResult != 0 ?
        <div className="container">
            <div className="row pb-5">
                <div className="col-sm-12 pt-4">
                    <div className="cart_head">
                        <h1 className='cart_heading'>Shopping Bag</h1>
                    </div>
                    <hr />
                </div>
                <div className="col-sm-12">

                {
                    cartResult.map((items, index)=>{
                        return(
                            <div className="row pt-4">
                        <div className="col-sm-1">

                            <div className="remove_item text-center">
                                <ClearIcon className='remove_icon' sx={{ fontSize: 40 }} onClick={()=>removeItem(index)} />
                            </div>
                        </div>
                        <div className="col-sm-4 text-center">
                            <div className="item_image" >
                                <img src={items.image} className='img-fluid' alt="" />
                            </div>
                        </div>
                        <div className="col-sm-3 text-center">
                            <div className="item_content">
                                <h4>{items.imgname}</h4>
                                <p></p>
                            </div>
                        </div>
                        <div className="col-sm-3 text-center">
                            <div className="item_quantity ">
                                <span className='less_item btn'><RemoveIcon onClick={()=> decrementHandel(items)} /></span>
                                <span className='item_count ml-2 mr-2'>{items.qnty}</span>
                                <span className='add_item btn' ><AddIcon onClick={()=> incrementHandel(items)}/></span>
                                
                            </div>
                        </div>
                        <div className="col-sm-1 text-center">
                            <div className="item_price">
                                <h6>${items.price * items.qnty}</h6>
                            </div>
                        </div>
                    </div>
                        )
                    })
                }
                   
                </div>
                <div className="col-sm-12 text-left">
                <hr />
                    <div className="total_amount ">
                        <h4>Total:${price}</h4>
                    </div>
                </div>
            </div>
        </div> 

        : <EmptyCart/> }
    </>
  )
}
