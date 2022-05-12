import React, { useContext } from 'react';
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom";

//context
import { CartContext } from '../../context/CartContextProvider';

//icons
import shopIcons from "../../assets/icons/shop.svg";

const Navbar = () => {

    const { state } = useContext(CartContext)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/products" >Products</Link>
                <div className={styles.iconContainer}>
                    <Link to="/Cart" ><img src={shopIcons} alt="shop" /></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;