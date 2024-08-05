import "./component.css";
import Button from "react-bootstrap/Button";
function ProductCard(props) {
  // const productCard = {
  //     margin: "10%",
  //     borderRadius: "2%",
  //     border :"1px solid grey"
  // }
  return (
    <div className="product-ca  rd">
      <img src={props.image} alt={props.name} className="product-image" />
      <h6>
        {props.name}
        <br />
        {props.price} 
      </h6>

      <div>{props.reviews}⭐⭐⭐⭐⭐ (40)</div><br></br>
      <div className="button">
        <button className="cart-btn">Add To Cart</button>
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
}
export default ProductCard;
