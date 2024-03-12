import React, { useEffect, useState } from 'react'
import './item.css'
import img from "./img/-original-imagyxrfvrzgveaw.webp"

const Item = ({ name, src, price, quantity, onClickHandler, id, onClickHandlernegative }) => {


    return (

        <div className='container'>

            <div className='product'>
                <img src={src} alt="" />
                <div className="box">
                    <h4>{name}</h4>
                    <span>₹{price}</span>
                </div>
            </div>

            <div className='cart-control'>
                <button onClick={() => onClickHandler(id)}>+</button>
                <span> {quantity} </span>
                <button onClick={() => { return onClickHandlernegative(id) }}>-</button>
            </div>
        </div>
    )
}

export default Item
