import React from 'react';
var Banner = () => {
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
                  <input type="text" className="input"></input>
                </a>
                <a className="navbar-item is-active">
                  <button onClick={e => e.preventDefault()} className="button">
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
