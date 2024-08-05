import ProductCard from "./ProductCard";
import "./component.css";
function ProductList() {
  // const [products, setProducts] = useState([]);
  const products = [
    {
      id: 1,
      name: "Monitor",
      price: 10.99,
      review: "⭐",
      image: "assets/images/monitor.png",
    },
    {
      id: 2,
      name: "Game controller",
      price: 10.99,
      review: "⭐",
      image: "../assets/images/gamecontroller.png",
    },
    {
      id: 3,
      name: "Keyboard",
      price: 10.99,
      review: "⭐",
      image: "../assets/images/keyboard.png",
    },
    {
      id: 4,
      name: "chair",
      price: 10.99,
      review: "⭐",
      image: "../assets/images/chair.png",
    },
    {
      id: 5,
      name: "Monitor",
      price: 10.99,
      review: "⭐",
      image: "../assets/images/monitor.png",
    },
    {
      id: 6,
      name: "Game controller",
      price: 10.99,
      review: "⭐",
      image: "../assets/images/gamecontroller.png",
    },
    {
      id: 7,
      name: "Keyboard",
      price: 10.99,
      review: "⭐",
      image: "../assets/images/keyboard.png",
    },
    {
      id: 8,
      name: "chair",
      price: 10.99,
      review: "⭐",
      image: "../assets/images/chair.png",
    },
  ];
  return (
    <div className="container">
      <p className="sale">
        <b>Flash Sale</b>
      </p>
      <div className="product-container">
        {products.map((item) => {
          return (
            <ProductCard
              name={item.name}
              image={item.image}
              price={item.price}
              reviews={item.reviews}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
