import React from 'react'
import { Rating } from "@mui/material";
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import styles from "./Product.module.css";
const ProductCard = ({ product }) => {
  const {image,title,id,rating,price} =product
  return (
    <section className={`${styles.cardContainer}`}>
      <a href={`/product/${id}`}>
        <img src={image} alt={title} />
      </a>
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
// import React from "react";
//
// const ProductCard = ({ product }) => {
//   if (!product) return null;

//   return (
//     <div>
//       <h3>{product.title}</h3>
//       <p>{product.description}</p>
//       <img src={product.image} alt={product.title} />
//       <p>${product.price}</p>
//     </div>
//   );
// };

// export default ProductCard;
