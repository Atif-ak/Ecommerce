import React, { useState, useEffect } from "react";
import "./Cart.css";
import List from "./List";

function Cart() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("cart") === null) {
      console.log(localStorage.getItem("cart"));
      setProduct([]);
    } else
      setProduct([...product, JSON.parse(localStorage.getItem("cart"))][0]);
  }, []);

  const removeItem = (id) => {
    const newItems = product.filter((prod) => {
      return prod._id !== id;
    });
    localStorage.setItem("cart", JSON.stringify(newItems));
    setProduct(newItems);
  };

  return (
    <div>
      {product.length !== 0 ? (
        product.map((data) => {
          return (
            <div key={data._id} className="main_div">
              <div className="image_div">
                <img
                  className="left_image"
                  src={data.imageUrl}
                  alt={data.name}
                />
              </div>
              <div className="sec_div">
                <div className="in" style={{ fontWeight: 600 }}>
                  Product Name : {data.name}
                </div>

                <div className="in">Price : {data.price}</div>
                <div style={{ textAlign: "center" }}>
                  <button
                    className="in"
                    id="cart_button"
                    onClick={() => removeItem(data._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="addItem"></div>
      )}
      <List product={product} />
    </div>
  );
}

export default Cart;
