import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
function CheckOut(){

    return(
        <div className="check-out">
            <h2>Check Out</h2>
            <p>
              {/* <strong>Total Quantity:</strong> {location.state.quantity} */}
            </p>
            <p style={{ margin: "0" }}>
              {/* <strong>Total Price:</strong> {location.state.totalPrice} */}
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
            <button className="btn btn-info" >
              Proceed To Pay
            </button>
          </div>
        </div>
    );
}
export default CheckOut;