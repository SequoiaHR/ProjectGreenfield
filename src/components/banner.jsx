import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

var Banner = () => {
  let [inputText, setInputText] = useState("");
  let history = useHistory();

  var getProductsList = () => {
    axios
      .get("http://3.134.102.30/products/list?count=500")
      .then(({ data }) => {
        console.log("data: ", data);
        // make the search process case insensitive
        let lowercaseInput = inputText.toLowerCase();
        for (let product of data) {
          if (product.hasOwnProperty("description")) {
            if (product.description.toLowerCase().includes(lowercaseInput)) {
              // reroute the product to the new ID
              history.push(`/product/${product.id}`);
              setInputText("");
              return;
            }
          }
        }
        // If no products match input keyword let the client know this
        setInputText("Product Not Found");
      });
  };

  var search = (e) => {
    e.preventDefault();
    getProductsList();
  };

  var handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <section className="hero is-success is-small">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-menu">
              <a className="navbar-item">
                <em className="title is-2">SEQUIOA</em>
              </a>
              <div className="navbar-end">
                <a className="navbar-item is-active">
                  <input
                    onChange={handleChange}
                    value={inputText}
                    type="text"
                    className="input"
                  ></input>
                </a>
                <a className="navbar-item is-active">
                  <button onClick={search} className="button">
                    <i className="fas fa-tree"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Banner;
