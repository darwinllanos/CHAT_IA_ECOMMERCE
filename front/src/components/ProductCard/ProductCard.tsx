import React from "react";
import styles from "./ProductCard.module.css";
import { ProductCardProps } from "@/interface/types";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.imageUrl} alt={product.name} className={styles.image} />
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>${product.price}</p>
      <p className={styles.name}>{product.description}</p>
    </div>
  );
};

export default ProductCard;
