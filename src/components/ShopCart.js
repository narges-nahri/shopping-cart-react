import React ,{ useContext } from 'react';
import { Link } from "react-router-dom";
import styles from "./ShopCart.module.css"

//components
import Cart from './shared/Cart';

//contex
import { CartContext } from "../context/CartContextProvider";

const ShopCart = () => {

    const { state , dispatch } = useContext(CartContext);

    return (
        <div className={styles.container} >
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} /> )}
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Total Items</span> {state.itemsCounter} </p>
                    <p><span>Total Payments</span> {state.total} </p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={()=> dispatch({type:"CHECKOUT"})}>check Out</button>
                        <button className={styles.checkout} onClick={() => dispatch({type:"CLEAR"})}>Clear</button>
                    </div>
                </div>
            }

            {
                state.itemsCounter === 0 && !state.checkout &&
                <div className={styles.complete}>
                    <h3>Want to buy ?</h3>
                    <Link to="/Products" >Go to shop</Link>
                </div>
            }

            {
                state.checkout && <div className={styles.complete}>
                    <h3>Check Out Successfylly</h3>
                    <Link to="/Products" >Buy more</Link>
                </div>
            }

            
        </div>
    );
};

export default ShopCart;