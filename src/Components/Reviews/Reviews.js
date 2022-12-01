import React from 'react'
import '../Reviews/Reviews.css'
import { ReviewCard } from './ReviewCard'

export const Reviews = () => {
  return (
    <>
        <div className="container-fluid review_bg">
            <div className="row pt-5 pl-3">
                <div className="col-sm-12">
                    <h1 className='pt-4 pb-4'>Reviews</h1>
                </div>
                
                <ReviewCard heading="Fabulous frame!" para='Excellent! Absolutely love my frame, it looks amazing and is such good quality. It arrived promptly and communication was fabulous! ' author='Julie M, London, UK' />

                <ReviewCard heading="Fabulous frame!" para='Excellent! Absolutely love my frame, it looks amazing and is such good quality. It arrived promptly and communication was fabulous! ' author='Julie M, London, UK' />

                <ReviewCard heading="Fabulous frame!" para='Excellent! Absolutely love my frame, it looks amazing and is such good quality. It arrived promptly and communication was fabulous! ' author='Julie M, London, UK' />

                <ReviewCard heading="Fabulous frame!" para='Excellent! Absolutely love my frame, it looks amazing and is such good quality. It arrived promptly and communication was fabulous! ' author='Julie M, London, UK' />
            </div>
        </div>
    </>
  )
}
