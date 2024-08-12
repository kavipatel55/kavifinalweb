import ProductCard from "./ProductCard";
import "./component.css";
import React, { useState, useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductDetails();
  }, []);

  async function getProductDetails() {
    try {
      const response = await fetch("http://localhost:3131/api/products/getProductsList");
      const data = await response.json();
      console.log(data.product);
      setProducts(data.product); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  return (
    <div className="container">
      <p className="sale">
        <b>Flash Sale</b>
      </p>
      <div className="product-container">
        {products.map((item) => (
          <ProductCard
            key={item._id} 
            id={item._id} 
            name={item.name}
            image={item.image}
            price={item.pricing} 
            reviews={item.review}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
