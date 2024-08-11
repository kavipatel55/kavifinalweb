// ProductInfo.js
import { useLocation } from "react-router-dom";
import "./component.css";

function ProductInfo() {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className="product-info">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
          className="product-info-image"
        />
      </div>
      <div className="product-detail">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>
          Review: {product.review}⭐⭐⭐⭐⭐ (40) |
          <span className="stock-avail">In Stock</span>
        </p>
        <p>Price: ${product.price}</p>
        <div className="itemColor">
          <b>Color:</b>&nbsp;&nbsp;
          <div className="color-switch red"></div>
          <div className="color-switch blue"></div>
          <div className="color-switch green"></div>
          <div className="color-switch black"></div>
        </div>
        <div className="login-action">
              <button type="submit" className="details-link">Add to Cart</button>
            </div>
      </div>
    </div>
  );
}

export default ProductInfo;
