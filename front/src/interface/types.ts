export interface Product {
    id: number;
    name: string;
    description: string;
    brand: string;
    price: number;
    imageUrl: string;
    category: string;
}

export interface ProductCardProps {
    product: Product;
}