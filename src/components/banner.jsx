import React from "react";
var Banner = () => {
  return (
    <section class="hero is-success is-small">
      <div class="hero-head">
        <nav class="navbar">
          <div className="container">
            <div className="navbar-menu">
              <a class="navbar-item">
                <em className="title is-2">SEQUIOA</em>
              </a>
              <div class="navbar-end">
                <a class="navbar-item is-active">
                  <input type="text" className="input"></input>
                </a>
                <a class="navbar-item is-active">
                  <button onClick={e => e.preventDefault()} className="button">
                    <i class="fas fa-tree"></i>
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