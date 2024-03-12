import React, { useEffect, useState } from 'react'
import data from './data.json';
import Item from './Item'
import './redo.css'
import { FaShoppingCart } from "react-icons/fa";
import img from "./img/-original-imagyxrfvrzgveaw.webp"

const Redo = () => {

    const [cartitems, setCartitems] = useState(data)

    function onClickHandler(id) {
        let arr = cartitems.map((ele) => {
            if (ele.id == id) {

                ele.count = ele.count + 1;
            }
            return ele
        })
        setCartitems([...arr])

    }

    function onClickHandlernegative(id) {
        let arr = cartitems.map((ele) => {
            if (ele.id == id) {

                if (ele.count > 0) { ele.count = ele.count - 1; }
            }
            return ele
        })
        setCartitems([...arr])

    }

    const [price, setprice] = useState();

    useEffect(() => {
        let x = 0;
        cartitems.map((e) => {
            x += e.count * e.price
        })
        setprice(x);
    }, [cartitems])

    const [itemcount, setitemcount] = useState();

    useEffect(() => {
        let totalitem = 0;
        cartitems.map((e) => {
            totalitem += e.count
        })
        setitemcount(totalitem);
    }, [cartitems])



    return (
        <>
            <nav>
                <h1>React Cart</h1>
                <span className='icon'><FaShoppingCart />
                    <span className="circle">{itemcount}</span></span>
            </nav>

            <main>
            <h1>Your Bag</h1>
                <section className='cart-items'>
                    {
                        cartitems.map((e) => {
                            return (<Item
                                src={e.img_source}
                                onClickHandler={onClickHandler}
                                onClickHandlernegative={onClickHandlernegative}
                                id={e.id}
                                name={e.name}
                                price={e.price}
                                quantity={e.count}
                                setCartitems={setCartitems}
                            />)
                        })
                    }
                </section>
                <hr />

                <section className='total'>
                    <h3>Total Price</h3>
                    <h3>₹{price}</h3>
                </section>

            </main>
        </>
    )
}

export default Redo
