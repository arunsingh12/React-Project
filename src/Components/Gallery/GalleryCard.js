import React from 'react'
import '../Gallery/Gallery.css';

export const GalleryCard = (props) => {
  return (
    <>
         <div className="col-sm-2">
                    <div className="gallary_img">
                        <img src={props.image} alt="" />
                    </div>
                </div>
    </>
  )
}
