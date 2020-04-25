import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

var Banner = (paramsId) => {
  let [inputText, setInputText] = useState("");
  let [allProducts, setAllProducts] = useState([]);
  let [searchList, setSearchList] = useState([]);
  let history = useHistory();

  var serveRecommendations = (text) => {
    let matches = [];
    let lowercaseInput = text.toLowerCase();
    for (let product of allProducts) {
      if (matches.length > 6) {
        break;
      }
      if (
        product.description.toLowerCase().includes(lowercaseInput) ||
        product.name.toLowerCase().includes(lowercaseInput)
      ) {
        matches.push(product);
      }
    }
    setSearchList(matches);
  };

  var handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  var getProductsList = () => {
    return axios.get("http://18.224.200.47/products/list?count=10010");
  };

  // After first render of the app, fetch all of the products
  useEffect(() => {
    if (allProducts.length === 0) {
      getProductsList().then(({ data }) => setAllProducts(data));
    }
  }, [allProducts.length]);

  // Every time input text is updated, serve new recommendations
  useEffect(() => {
    serveRecommendations(inputText);
  }, [inputText]);

  // Check for "exact match" search (assumes the user chose a drop-down menu item)
  useEffect(() => {
    if (searchList.length === 1) {
      let searched = searchList[0];
      if (searched.name === inputText) {
        history.push(`/product/${searched.id}`);
      }
    }
  }, [inputText, searchList]);

  // When switching to a new page, clear the input form
  useEffect(() => {
    if (inputText.length > 0) {
      setInputText("");
    }
  }, [paramsId]);

  return (
    <section className="hero is-primary is-small">
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
                    list="browsers"
                    onChange={handleInputChange}
                    value={inputText}
                    type="text"
                    className="input"
                  ></input>
                  <datalist id="browsers">
                    {searchList.map((product, idx) => {
                      return <option key={idx} value={product.name}></option>;
                    })}
                  </datalist>
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
