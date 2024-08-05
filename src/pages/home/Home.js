import ProductList from "../../components/ProductList";
import Footer
 from "../../components/Footer";
import "./home.css";
function Home() {
  return (
    <div className="home">
      <div className="banner-category">
        <div className="category">
        <h4>Exclusive Category</h4>
        <hr></hr>
          <h6>Women's Fashion  </h6>
          <h6>Men's Fashion</h6>
          <h6>Electronics</h6>
          <h6>Home & Lifestyle</h6>
          <h6>Medicine</h6>
          <h6>Sports & outdoor</h6>
        </div>
        <div>
          <img
            src="../assets/images/banner.png"
            alt="banner"
            className="banner"
          />
        </div>
      </div>
      <ProductList />
      
    </div>
  );
}
export default Home;
