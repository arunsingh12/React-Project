import React, { useState } from 'react'
import '../Our Gems/OurGems.css'
import { WallDecore } from '../Flower Data/WallDecore'
import { GiftsItems } from '../Flower Data/GiftsItems'
import { WallPainting } from '../Flower Data/WallPainting'
import { ArtificialFlower } from '../Flower Data/ArtificialFlower'
import { useNavigate } from 'react-router-dom'

export const OurGems = () => {
    const navigate = useNavigate();

    const [gemsData, setGemsData] = useState(ArtificialFlower)

    const designData = ()=>{
        setGemsData(ArtificialFlower)
    }

    const wallPaintingData = ()=>{
        setGemsData(WallPainting)
    }

    const interiorData = ()=>{
        setGemsData(WallDecore)
    }

    const giftSection = ()=>{
        setGemsData(GiftsItems)
    }

const gemsView = (id)=>{
    console.log(id)
    navigate(`/viewDetail/${id}`)
}

  return (
    <>
        <div className="container-fluid">
            <div className="gems_box">
                <h1 className='gems_head text-center'>Our Gems</h1>
            </div>
            <div className="row pb-5">
                <div className="col-sm-12 text-center">
                    <input type="button" className='gems_coltrol ' onClick={designData} value="Design Secsion"/>
                    <input type="button" className='gems_coltrol ml-2' onClick={wallPaintingData} value="Wall painting"/>
                    <input type="button" className='gems_coltrol ml-2' onClick={interiorData} value="Interior decoration"/>
                    <input type="button" className='gems_coltrol ml-2' onClick={giftSection} value="Gift section"/>
                    <hr className='gems_line' />
                </div>
                <div className="container">
                    <div className="row"> 

                    {
                        gemsData.map((items, index)=>{
                            return(
                                <div className="col-sm-6 p-5" key={index}>
                        <div className="gems_img">
                        <img src={items.image} alt="" onClick={()=> gemsView(items.id)}/>
                    </div>
                    <h4 className='img_title text-left pt-2'>{items.imgname}</h4>
                        <p className='img_text text-left'>${items.price}</p>
                        </div>
                            )
                        })
                    }


{/*                     
                    <OurGemsCard  image='https://m.media-amazon.com/images/I/71NVldu2JoL._SX425_.jpg' name="Compositions" price='250' />
                    
                    <OurGemsCard  image='https://cdn.shopify.com/s/files/1/0258/3638/8445/products/leavesset_01a.jpg?v=1622541382' name="Nature prints" price='250' />
                    

                    <div className="col-sm-1"></div>
                    <OurGemsCard  image='https://cdn11.bigcommerce.com/s-8smrzb0w7f/images/stencil/original/products/67990/67018/61y8jQ%2BpCEL._SL1001___10588.1602933343.jpg' name="Abstraction" price='250' />
                    <div className="col-sm-2"></div>
                    <OurGemsCard  image='https://ii1.pepperfry.com/media/catalog/product/s/u/800x880/sunset-scenery-canvas-wall-painting-by-vibecrafts-sunset-scenery-canvas-wall-painting-by-vibecrafts-40fyg6.jpg' name="Geometry" price='250' />
                    <div className="col-sm-1"></div>


                    <div className="col-sm-1"></div>
                    <OurGemsCard  image='http://cdn.shopify.com/s/files/1/2659/1556/products/1_12_e08f9722-80c5-4184-8a5a-b51cf6fc8e67_1200x1200.jpg?v=1654473447' name="Watercolor" price='250' />
                    <div className="col-sm-2"></div>
                    <OurGemsCard  image='https://ii1.pepperfry.com/media/catalog/product/b/r/800x880/brown-madhubani-art-elephant-canvas-wall-painting-by-vibecrafts-brown-madhubani-art-elephant-canvas--rtgdf0.jpg' name="Print & poster" price='250' />
                    <div className="col-sm-1"></div> */}

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
