import React , { useContext } from 'react';
import styles from "./Store.module.css";

//components
import Product from './shared/Product';

//context
import { ProductContext } from '../context/ProductContextProvider';

const Store = () => {

    const products = useContext(ProductContext)

    return (
        <div className={styles.container}>
            {
                products.map(product => <Product 
                                            key={product.id}   
                                            productData={product} 
                                            /> )
            }
        </div>
    );
};

export default Store;