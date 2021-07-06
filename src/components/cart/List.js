import React, { useState, useEffect } from "react";
import "./List.css";

const List = ({ product }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log("product", product);
    product.map((data) => {
      console.log("in");
      setTotal((prevTotal) => {
        return data.price + prevTotal;
      });
    });
  }, [JSON.stringify(product)]);
  return (
    <div>
      <div className="total">Your Total : {total}</div>
    </div>
  );
};

export default List;
