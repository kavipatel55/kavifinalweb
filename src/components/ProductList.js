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
      image: "../assets/images/monitor.png",
      description: "A high-definition monitor suitable for gaming and office use.",
    },
    {
      id: 2,
      name: "Game controller",
      price: 10.99,
      review: "⭐",
      image: "../assets/images/gamecontroller.png",
      description: "Ergonomic game controller with responsive buttons.",
    },
    {
      id: 3,
      name: "Keyboard",
      price: 10.99,
      review: "⭐",
      image: "../assets/images/keyboard.png",
      description: "Mechanical keyboard with customizable RGB lighting.",
    },
    {
      id: 4,
      name: "chair",
      price: 10.99,
      review: "⭐",
      image: "../assets/images/chair.png",
      description: "Comfortable office chair with adjustable height.",
    },
    {
      id: 5,
      name: "Monitor",
      price: 10.99,
      review: "⭐",
      image: "../assets/images/monitor.png",
      description: "A high-definition monitor suitable for gaming and office use.",
    },
    {
      id: 6,
      name: "Game controller",
      price: 10.99,
      review: "⭐",
      image: "../assets/images/gamecontroller.png",
      description: "Ergonomic game controller with responsive buttons."
    },
    {
      id: 7,
      name: "Keyboard",
      price: 10.99,
      review: "⭐",
      image: "../assets/images/keyboard.png",
      description: "Mechanical keyboard with customizable RGB lighting."
    },
    {
      id: 8,
      name: "chair",
      price: 10.99,
      review: "⭐",
      image: "../assets/images/chair.png",
      description: "Comfortable office chair with adjustable height."
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
            id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              reviews={item.review}
              description={item.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
