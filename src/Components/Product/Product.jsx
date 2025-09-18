import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import styles from "./Product.module.css"
function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        // console.log(res.data.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className={styles.productsContainer}>
      {products.map((singleProduct) => (
        <ProductCard product={singleProduct} data={singleProduct} />
      ))}
  
    </section>
  );
}

export default Product;
