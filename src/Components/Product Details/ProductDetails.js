import React, { useState, useEffect } from 'react'
import '../Product Details/ProductDetail.css'
import {  Globe } from 'react-bootstrap-icons'
import {AllCategories} from '../Flower Data/AllCategories'
import {useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Add_Cart } from '../Redux/Action/action';


export const ProductDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const viewId = useParams();
    // console.log(viewId);
    const [allData, setAllData] = useState(AllCategories);
        // console.log(data)
    const [viewData, setViewData ] = useState([]); 

    useEffect(() => {
              
        let newData = allData.filter((items, index)=>{
        return items.id == viewId.vid ;
    });
    // console.log(newData)
    setViewData(newData)
    },[]);
    // console.log(viewData)

    const addToCart = (data)=>{
        navigate(`/addcart`)
        dispatch(Add_Cart(data))
    }

  return (
    <>
        <div className="container-fluid cart_background">
            <div className="row pt-5 pl-3 pb-5 ">
            {
                viewData.map((items, index)=>{
                    return(
                        
                        <div className="col-sm-12" key={index} style={{"display": "contents"}}>
                        <div className="col-sm-7 text-center" key={index}>
                <div className="product_image " >
                    <img src={items.image} alt="" />
                </div>
                </div>
                    
                <div className="col-sm-5" >
                    <div className="product_details p-4">
                    <h3 className="product_head">{items.imgname}</h3>
                        <span>${items.price}</span>
                        <hr />
                        <span>Size:</span> <span className='size'>D27cmx H10cm</span>
                        <hr />
                        <span className='size_list'>D16cmx H3cm</span>
                        <span className='size_list'>D16cmx H3cm</span>
                        <span className='size_list'>D16cmx H3cm</span>
                        <hr />
                        <span>Color</span><span className='color_choice'>White </span>
                        <hr />
                        <Globe className='pr-1'/> <span>Worlwide shipping available</span>
                        <hr />
                        <div className="add_box">
                            <div className="item_quantity pt-2">
                                <span>Quantity :</span> <span className='item_count ml-2 mr-2'>1</span>
                               
                            </div>
                            <div className="btn_box">
                                <input type="button" className='add_btn' onClick={()=>addToCart(items)} value='ADD TO BAG' />
                            </div>
                        </div>
                        <hr />
                        <p>Fine wooden frame with a golden edge. Includes a passe-partout.
                        Elegantly designed to be used as a free-standing or wall hanging decoration, this box frame can hold a landscape or portrait image.
                        Made in Italy.</p>
                    </div>
                </div>
                </div>
                
                )
                })
            }
                
            </div>
           
        </div>
    </>
  )
}
