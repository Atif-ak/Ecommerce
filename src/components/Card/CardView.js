import React, { useState, useEffect } from "react";
import "./CardView.css";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";

const CardView = () => {
  const [product, setProdDesc] = useState({});
  const [list, setList] = useState([]);

  const location = useLocation();
  const history = useHistory();
  const currProd = location.pathname.split("/")[2];

  useEffect(() => {
    axios.get("http://localhost:9000/").then((data) => {
      setProdDesc(data.data[`${currProd}`]);
      // console.log(data.data[`${currProd}`])
      if (localStorage.getItem("cart") === null) {
        console.log(localStorage.getItem("cart"));
        setList([]);
      } else setList(JSON.parse(localStorage.getItem("cart")));
    });
  }, []);

  const cartHandler = () => {
    console.log("in");
    setList((list) => {
      const newList = [...list, product];
      localStorage.setItem("cart", JSON.stringify(newList));
      return newList;
    });
  };

  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img
            className="left__image"
            src={product.imageUrl}
            alt={product.name}
          />
        </div>
        <div className="left__info">
          <p className="left__name">{product.name}</p>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          <p>{`In Stock : ${product.countInStock}`}</p>
          <button onClick={cartHandler} className="contactus-button">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardView;
