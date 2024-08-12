import { useLocation } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function CheckOut() {
  const location = useLocation();
  const { cartProducts, cartId } = location.state;
  const totalCost = cartProducts.reduce(
    (total, item) => total + parseFloat(item.pricing) * item.quantity,
    0
  );

  const totalQty = cartProducts.reduce(
    (qty, item) => qty + item.quantity,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let products;
      const userId = localStorage.getItem("userId");
      try {
        const response = await fetch(
          "http://localhost:3131/api/carts/getCartsList"
        );
        const data = await response.json();
        const matchedOrder = data.cart.find((order) => order.user === userId);

        if (!matchedOrder) return;

        products = matchedOrder.products;
        console.log(products, "jlhiugyugjh");
      } catch (err) {
        console.error("Error:", err);
        alert("An error occurred while fetching product details");
      }

      let orderDetails = {
        user: localStorage.getItem("userId"),
        products: products,
        totalAmount: totalCost,
      };

      const createOrder = await fetch(
        "http://localhost:3131/api/orders/createOrder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderDetails),
        }
      );

      if (createOrder.ok) {
        alert("Order created successfully");

        await fetch(
          `http://localhost:3131/api/carts/deleteCartByCartId/${cartId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        window.location.href = "/";
      } else {
        throw new Error("Failed to create order");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred while creating the order");
    }
  };

  return (
    <div className="check-out">
      <h2>Check Out</h2>
      <p><strong>Total Quantity:</strong> {totalQty}</p>
      <p style={{ margin: "0" }}>
      <strong>Total Price:</strong> {totalCost}
      </p>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCardNumber">
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              name="cardNumber"
              id="floatingCardNumber"
              placeholder="Enter card number"
            />
            <label for="floatingCardNumber">Card Number</label>
          </div>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridExpiration">
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              name="expirationDate"
              id="floatingExpiration"
              placeholder="MM/YY"
            />
            <label for="floatingExpiration">Expiration Date</label>
          </div>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCVV">
          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              name="cvv"
              id="floatingCVV"
              placeholder="CVV"
            />
            <label for="floatingCVV">CVV</label>
          </div>
        </Form.Group>
      </Row>

      <div style={{ float: "right" }}>
        <button className="btn btn-outline-danger">Cancel</button>
        &nbsp;&nbsp;
        <button className="btn btn-info" onClick={handleSubmit}>
          Proceed To Pay
        </button>
      </div>
    </div>
  );
}
export default CheckOut;
