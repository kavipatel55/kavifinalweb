// ProductInfo.js
import { useLocation } from "react-router-dom";
import "./component.css";

function ProductInfo() {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className="product-info">
      <img src={product.image} alt={product.name} className="product-info-image" />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Review: {product.review}</p>
    </div>
  );
}

export default ProductInfo;
