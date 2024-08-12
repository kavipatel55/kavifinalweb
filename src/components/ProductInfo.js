// ProductInfo.js
import { useLocation } from "react-router-dom";
import "./component.css";

function ProductInfo() {
  const location = useLocation();
  const { product } = location.state;
  const addToCart = async (e) => {
    console.log(product);
    const userId = localStorage.getItem("userId");
    const productId = product?.id;
    let isCartAlreadyExist;
    let cartDetails;

    try {
      const response = await fetch(
        `http://localhost:3131/api/carts/getCartByUserId/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      isCartAlreadyExist = response.ok;
      cartDetails = data?.cart;
    } catch (err) {
      console.error("An error occurred while Fetching data:", err);
    }

    if (isCartAlreadyExist) {
      console.log(cartDetails);
      const itemIndex = cartDetails?.products?.findIndex(
        (item) => item.product === productId
      );
      let cart;
      if (itemIndex !== -1) {
        cartDetails.products[itemIndex].quantity += 1; // Increment quantity by 1
        cart = {
          products: [...cartDetails.products],
        };
      } else {
        cart = {
          products: [
            ...cartDetails.products,
            {
              product: productId,
              quantity: 1,
            },
          ],
        };
      }

      try {
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

        if (response.ok) {
          window.location.href = "/Cart";
        }
      } catch (err) {
        console.error("Error:", err);
        alert("An error occurred while Adding product");
      }
    } else {
      const newCart = {
        products: [
          {
            product: productId,
            quantity: 1,
          },
        ],
        user: userId,
      };

      try {
        await fetch(
          "http://localhost:3131/api/carts/createCart",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newCart),
          }
        );

        window.location.href = "/Cart";
      } catch (err) {
        console.error("Error:", err);
        alert("An error occurred while Adding product");
      }
    }
  };

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
          <button type="submit" className="details-link" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
