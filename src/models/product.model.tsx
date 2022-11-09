interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  description: string;
  cartQuantity: number;
  sizes: number[];
  stock: number;
  finalSize?: number;
}

export default Product;
