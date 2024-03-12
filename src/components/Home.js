import React, { useState } from 'react'
import Item from './Item'
import './home.css'
import { FaShoppingCart } from "react-icons/fa";
import data from './data.json';


const Home = () => {

    const [totalprice, settotalPrice] = useState(53); //to calculate total price(price of each * number of items)
    const [items, setitems] = useState(6)

    return (
        <>
            <nav>
                <h1>React Cart</h1>
                <span className='icon'><FaShoppingCart />
                <span className="circle">{items}</span></span>
            </nav>

            <main>
                <section>
                    {
                        data.map((e) => {
                            return (<Item
                                src = {e.img_source}
                                name={e.name}
                                price={e.price}
                                settotalPrice={settotalPrice}
                                setitems = {setitems}
                            />)
                        })
                    }
                </section>
                <hr />

                <section className='total'>
                    <h3>Total Price</h3>
                    <h3>{totalprice}</h3>
                </section>

            </main>
        </>
    )
}

export default Home
