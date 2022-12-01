import React from 'react'
import { ProductDetails } from '../Components/Product Details/ProductDetails'
import { Reviews } from '../Components/Reviews/Reviews'
import { StyleThis } from '../Components/Style This/StyleThis'


export const DetailsPage = () => {
  return (
    <>
        <ProductDetails/>
        <StyleThis/>
        <Reviews/>
    </>
  )
}
