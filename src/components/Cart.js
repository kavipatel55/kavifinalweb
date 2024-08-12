import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "./component.css";
import React, { useState, useEffect } from "react";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const navigate = useNavigate();

  const [cartDetails, setCartDetails] = useState([]);
  const Checkout = (async) => {
    navigate(`/CheckOut`, {
      state: { cartProducts: cartProducts, cartId: cartDetails?._id },
    });
  };

  const handleAdd = async (id) => {
    try {
      let cart;
      const itemIndex = cartDetails.products.findIndex(
        (item) => item.product === id
      );

      if (itemIndex !== -1) {
        cartDetails.products[itemIndex].quantity += 1; // Increment quantity by 1
        cart = {
          products: [...cartDetails.products],
        };
      }

      const response = await fetch(
        `http://localhost:3131/api/carts/updateCartByCartId/${cartDetails._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        }
      );

      console.log(response);
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred while Adding Quantity");
    }
  };

  const handleDelete = async (id) => {
    try {
      let cart = {
        products: cartDetails?.products?.filter(
          (product) => product.product !== id
        ),
      };
      console.log(cart);

      const response = await fetch(
        `http://localhost:3131/api/carts/updateCartByCartId/${cartDetails._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart),
        }
      );

      console.log(response);
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred while Delete Product from Cart");
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  async function getProductDetails() {
    let details = [];
    const userId = localStorage.getItem("userId");
    try {
      const response = await fetch(
        "http://localhost:3131/api/carts/getCartsList"
      );
      const data = await response.json();
      const cartDetails = data?.cart?.find((cart) => cart.user === userId);
      setCartDetails(cartDetails);
      const productDetails = cartDetails?.products;
      console.log(productDetails, cartDetails);

      if (productDetails) {
        // Create an array of promises
        const fetchPromises = productDetails.map(async (product) => {
          try {
            const response = await fetch(
              `http://localhost:3131/api/products/getProductByProductId/${product.product}`
            );
            const data = await response.json();

            // Push product details with quantity
            return { ...data.product, quantity: product.quantity };
          } catch (error) {
            console.error("Error fetching product details:", error);
            return null; // Return null if there's an error
          }
        });

        // Wait for all fetches to complete
        const results = await Promise.all(fetchPromises);
        // Filter out any null results
        details = results.filter((result) => result !== null);
      }

      setCartProducts(details);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  if (cartProducts.length <= 0) {
    return (
      <div className="cart">
        <h2>Please Add a Product</h2>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <Table striped bordered hover variant="light">
        <thead>
          <tr>
            <th>
              <h5>Image</h5>
            </th>
            <th>
              <h5>name</h5>
            </th>
            <th>
              <h5>Quantity</h5>
            </th>
            <th>
              <h5>Price</h5>
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((item) => (
            <tr>
              <th>
                <img className="cart-img" src={item.image}></img>
              </th>
              <th>{item.name}</th>
              <th>{item.quantity}</th>
              <th>{item.pricing}</th>
              <td>
                <button
                  className="add-btn"
                  onClick={() => handleAdd(item._id)} // Implement handleAdd function
                >
                  Add
                </button>
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item._id)} // Implement handleDelete function
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <button className="details-link" onClick={Checkout}>
        Proceed to checkout
      </button>
    </div>
  );
}
export default Cart;
