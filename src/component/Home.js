import React from "react";
import Products from './Products';

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/banner.jpg"
          className="card-img"
          alt="Background"
          height={"600px"}
        />
        <div className="card-img-overlay">
          <div className="container">
            <h5 className="card-title display-4 text-uppercase fw-bolder mb-0">New season arrival</h5>
            <p className="card-text lead fs-2 text-uppercase">
              Check out all the trends
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
