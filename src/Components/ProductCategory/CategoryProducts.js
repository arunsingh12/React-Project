import React, { useState, useEffect } from "react";
import '../ProductCategory/Category.css';
import { AllCategories } from "../Flower Data/AllCategories";
import {ArtificialFlower} from "../Flower Data/ArtificialFlower"
import {WallPainting} from "../Flower Data/WallPainting";
import {GiftsItems} from "../Flower Data/GiftsItems";
import {Sculpture} from "../Flower Data/Sculpture"
import {TableDecore} from "../Flower Data/TableDecore";
import {Vase} from "../Flower Data/Vase"
import {WallDecore} from "../Flower Data/WallDecore"
import { useNavigate } from "react-router-dom";
import { Select, MenuItem } from "@mui/material";

export const CategoryProducts = () => {
    const navigate = useNavigate();
  const [productData, setProductData] = useState(AllCategories);
  // console.log(productData)

  const [searchData, setSearchData] = useState([]);

  const [selectData, setSelectData] = useState('all');
  // console.log(selectData)
  const categoryList = [ "Artificial Flower", "WallPainting"]

  const clearAll = ()=>{
    setProductData(AllCategories)
  }
  const allData = ()=>{
    setProductData(AllCategories)
  }

  const artificialData = ()=>{
    setProductData(ArtificialFlower)
  }

  const wallPaintingData = ()=>{
    setProductData(WallPainting)
  }

  const wallDecoreData = ()=>{
    setProductData(WallDecore)
  }

  const sculptureData = ()=>{
    setProductData(Sculpture)
  }

  const vaseData = ()=>{
    setProductData(Vase)
  }

  const tableDecoreData = ()=>{
    setProductData(TableDecore)
  }

  const giftsData = ()=>{
    setProductData(GiftsItems)
  }
  

  const viewDetails = (id)=>{
    // console.log(id)
    navigate(`/viewDetail/${id}`)
  }

 /*--------Search Bar---------- */
 const searchHeandler = (e) => {
  const searchWord = e.target.value;
  const newFilter = productData.filter((value) => {
    return value.imgname.toLowerCase().includes(searchWord.toLowerCase());
  })
  if (searchWord == "") {
    return setProductData(AllCategories)
  }
  else {

    return setProductData(newFilter)
  }
}
   
  /* select bar */

   useEffect(()=>{
    setProductData(selectData === 'all'? AllCategories :AllCategories.filter(data => data.cate === selectData))
   },[selectData])
  //  console.log(productData);


  return (
    <>
      <div className="container-fluid">
        
        <div className="row pb-5">
          <div className="col-sm-3 category_list">
            <div className="cate_list pl-3">
              <span>Filter by</span>
              <input type="button" className="clear_btn" onClick={clearAll} value="clear" />

              <h6 className="list_head pt-4">Category</h6>
              <div className="cate_items">
              
                      {/* <div className="list_box pb-3">
                  <input type="checkbox" onClick={allData}/>
                  <span className="ml-3">{items}</span>
                </div> */}
                
                <div className="list_box pb-3">
                  <input type="checkbox"  onClick={artificialData} />
                  <span className="ml-3">Artificial flower</span>
                </div>
                <div className="list_box pb-3">
                  <input type="checkbox" onClick={wallPaintingData} />
                  <span className="ml-3">Wall Painting</span>
                </div>
                <div className="list_box pb-3">
                  <input type="checkbox" onClick={wallDecoreData} />
                  <span className="ml-3">Wall Decor</span>
                </div>
                <div className="list_box pb-3">
                  <input type="checkbox" onClick={sculptureData} />
                  <span className="ml-3">Sculpture</span>
                </div>
                <div className="list_box pb-3">
                  <input type="checkbox" onClick={vaseData} /> 
                  <span className="ml-3">Vase</span>
                </div>
                <div className="list_box pb-3">
                  <input type="checkbox" onClick={tableDecoreData} />
                  <span className="ml-3">Table Decore</span>
                </div>
                <div className="list_box pb-3">
                  <input type="checkbox" onClick={giftsData} /> 
                  <span className="ml-3">Gifts</span>
                </div>
              </div>
              <h6 className="brand">Brand</h6>

              <h6 className=" price pt-3">Price</h6>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="row pr-3">
                <div className="col-sm-12">
                <div className="filter_box">
                <div className="searchbox">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              name="search"
              onChange={searchHeandler}
            />
                </div>
                <div className="selectbox ">
          <span className="pr-4">Short by</span>
          <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={selectData}
    label="Age"
    onChange={(e)=>setSelectData(e.target.value)}
  >
    <MenuItem value='all'>All</MenuItem>
    <MenuItem value='newest'>Newest</MenuItem>
    <MenuItem value='relevance'>Relevance</MenuItem>
    <MenuItem value='bestselling'>Best selling</MenuItem>
    <MenuItem value='highestprice'>Highest Price</MenuItem>
    <MenuItem value='lowestprice'>Lowest price</MenuItem>
  </Select>
        </div>
        </div>
                </div>
              {
                productData.map((items, index) => {
                return (
                  <div className="col-sm-4 pt-4" key={index}>
                    <div className="product_content">
                      <img src={items.image} alt="" onClick={()=> viewDetails(items.id)} />
                    </div>
                    <h6 className="pt-2">{items.imgname}</h6>
                    <span>${items.price}</span>
                  </div>
                );
              })}
            </div>
            <div className="col-sm-12 pt-5">
              <button type="button" className="loadmore_btn">
                LOAD MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
