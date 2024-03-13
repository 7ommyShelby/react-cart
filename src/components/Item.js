import React, { useEffect, useState } from 'react'
import './item.css'
import img from "./img/-original-imagyxrfvrzgveaw.webp"

const Item = ({ name, src, price, quantity, onClickHandler, id, onClickHandlernegative,remove}) => {


    return (

        <div className='container'>

            <div className='product'>
                <img src={src} alt="" />
                <div className="box">
                    <h4>{name}</h4>
                    <span className='price'>₹{price}</span>
                    <span onClick={()=>{
                        return remove(id)
                    }}>Remove</span>
                </div>
            </div>

            <div className='cart-control'>
                <button className='plus' onClick={() => onClickHandler(id)}>+</button>
                <span className='quantity'> {quantity} </span>
                <button className='minus' onClick={() => { return onClickHandlernegative(id) }}>-</button>
            </div>
        </div>
    )
}

export default Item
