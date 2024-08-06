// ProductCard.js
import { useNavigate } from "react-router-dom";
import "./component.css";

function ProductCard({ id, name, image, price, review }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${id}`, { state: { product: { id, name, image, price, review } } });
  };

  return (
    <div className="product-card" onClick={handleViewDetails}>
      <img src={image} alt={name} className="product-image" />
      <h6>
        {name}
        <br />
        {price}
      </h6>
      <div>{review}⭐⭐⭐⭐⭐ (40)</div>
      <br></br>
      <div className="button">
        <button className="details-link">
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
