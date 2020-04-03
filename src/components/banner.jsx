import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

var Banner = () => {
  let [inputText, setInputText] = useState("");
  let history = useHistory();

  var search = (e) => {
    e.preventDefault();
    if (Number(inputText) >= 0) {
      history.push(`/product/${inputText}`);
    }
  };

  var handleChange = (e) => {
    setInputText(e.target.value);
  }

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
                  <input onChange={handleChange} value={inputText} type="text" className="input"></input>
                </a>
                <a className="navbar-item is-active">
                  <button
                    onClick={search}
                    className="button"
                  >
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
