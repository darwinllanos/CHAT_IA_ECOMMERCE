import React from "react";
import styles from "./ProductCard.module.css";

interface Product {
    id: number;
    name: string;
    description: string;
    brand: string;
    price: number;
    imageUrl: string;
    category: string;
}

interface ProductCardProps {
    product: Product;
  }

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.imageUrl} alt={product.name} className={styles.image} />
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.price}>${product.price}</p>
    </div>
  );
};

export default ProductCard;
