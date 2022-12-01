import React, { useState } from 'react'
import '../Our Product/OurProduct.css';
import { TopProduct } from '../Flower Data/TopProduct';
import { useNavigate } from 'react-router-dom';

export const OurProduct = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useState(TopProduct)

  const productDetails = (id)=>{
    console.log(id)
    navigate(`/viewDetail/${id}`)
  }
  return (
    <>
        <div className="container">
            <div className="produtcs text-center">
                <h1 className='product_head pt-5 pb-4'>Our top products </h1>
            </div>
            <div className="row text-center pt-5 pb-5">

            {
              products.map((items, index)=>{
                return(
                  <div className="col-sm-6 p-5" key={index} >
                    <div className="col_content">
                        <img src={items.image} alt="" onClick={()=> productDetails(items.id)}/>
                        
                    </div>
                    <h4 className='img_title text-left pt-2'>{items.imgname}</h4>
                        <p className='img_text text-left'>{items.price}</p>
                </div>
                )
              })
            }

            </div>
        </div>
    </>
  )
}
