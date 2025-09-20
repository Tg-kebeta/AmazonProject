import React from 'react'
import { Rating } from "@mui/material";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import styles from "./Product.module.css";
import { Link } from 'react-router-dom';
const ProductCard = ({ product ,flex}) => {
  const {image,title,id,rating,price} =product
  return (
    <section className={`${styles.cardContainer} ${flex?styles.product_flexed : ''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title ||"product image"} />
      </Link>
      <div className={styles.rating}>
        <h3>{title}</h3>
        <div>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        <button className={styles.button}>add to cart</button>
      </div>
    </section>
  );
}

export default ProductCard

