
import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import ProductCard from "../../Components/Product/ProductCard";
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Link } from 'react-router-dom'
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';

import styles from './Cart.module.css'

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);
  
  const total = basket.reduce((amount, item) => {
  return  item.price + amount
  },0)

  return (
    <LayOut>
      <section className={styles.container}>
        <div className={styles.cartContainer}>
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length === 0 ? (
            <p>Oops! No items in your cart</p>
          ) : (
            basket.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                renderDesc={true}
                renderAdd={false}
                flex={true}
              />
            ))
          )}
        </div>
        {basket?.length !==0&& (
          <div className={styles.subtotal}>
            <div>
              <p>subtotal({ basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
  
      </section>
    </LayOut>
  );
}

export default Cart;
