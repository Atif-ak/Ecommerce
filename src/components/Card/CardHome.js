import React, { useState, useEffect } from "react";
import "./CardHome.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

function CardHome() {
  const history = useHistory();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);

  // const text = useContext(userText)

  useEffect(() => {
    axios
      .get("https://ecommercefirstbackendserver.herokuapp.com/")
      .then((data) => {
        console.log("data", data);
        setProducts(data.data);
      });
  }, []);
  // .then(res => res.json())
  return (
    <div className="card-main">
      <div className="search-bar">
        <input
          className="search"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here.."
        />
        {/* <i class="fa fa-search" aria-hidden="true"></i> */}
      </div>

      {products
        .filter((prod) => {
          if (search === "") {
            return prod;
          } else if (prod.name.toLowerCase().includes(search)) {
            return prod;
          } else if (prod.name.toUpperCase().includes(search)) {
            return prod;
          }
        })
        .map((val, ind) => {
          return (
            <>
              <span key={ind} className="card">
                <img src={`${val.imageUrl}`} className="card-img" />

                <div className="card-description">
                  <div className="card-name">{val.name}</div>
                  <div className="card-desc">
                    <span>{`₹ ${val.price}`}</span>
                    <span>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div className="card-view">
                    <button
                      className="card-button"
                      onClick={() => history.push(`/description/${ind}`)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </span>
            </>
          );
        })}
    </div>
  );
}

export default CardHome;
