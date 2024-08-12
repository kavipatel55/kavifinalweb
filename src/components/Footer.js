import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import "./component.css";
function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-exclusive">
        <h5>Exclusive</h5>
        <p>Subscribe</p>
        <p>Get 10% off your first order</p>
        <InputGroup size="sm" className="mb-1">
          <Form.Control
            aria-label="Small"
            placeholder="Enter your email"
            color="black"
            style={{ width: "1rem", height: "2rem", fontSize: "1rem" }}
            aria-describedby="inputGroup-sizing-sm"
          />
          <InputGroup.Text id="inputGroup-sizing-sm">📩</InputGroup.Text>
        </InputGroup>
      </div>
      <div className="footer-support">
        <h5>Support</h5>
        <p>
          308 King st east Waterloo
          <br /> Canada
        </p>
        <p>Kavi@gmail.com</p>
        <p>+88015-88888-9999</p>
      </div>
      <div className="footer-account">
        <h5>Account</h5>
        <p>My Account</p>
        <p>Login/ Register</p>
        <p>Cart</p>
        <p>Wishlist</p>
        <p>Shop</p>
      </div>
      <div className="footer-quicklinks">
        <h5>Quick Link</h5>
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>Faq</p>
        <p>Contact</p>
      </div>
      <div className="footer-getapp">
        <h5>Download App</h5>
        <p>Save $3 with App New User Only</p>
        <div className="get-app">
          <div className="qr-get-app">
            <img src="../assets/images/Qrcode.png" />
          </div>
          <div className="app-store-get-app">
            <img src="../assets/images/GooglePlay.png" />
            <img src="../assets/images/download-appstore.png" />
          </div>
        </div>
      </div>

    </div>
  );
}
export default Footer;
