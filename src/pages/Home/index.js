import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

function Home({}) {
  const navigate = useNavigate();
  return (
    <div className="home-container ">
      <nav>
        <div className="navbar-left">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="navbar-email">Challenge@correo.com</li>
            <li className="navbar-button">
              <button
                className="button"
                type="submit"
                onClick={() => navigate("/")}
              >
                Cerrar seccion
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <section className="main-container">
        <div className="cards-container">
          <div className="product-card">
            <div className="">
              <h3>name</h3>
            </div>
            <div className="">
              <img
                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className=""
              />
            </div>
            <div className="">
              <div className="">
                <h4>tags</h4>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="">
              <h3>name</h3>
            </div>
            <div className="">
              <img
                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className=""
              />
            </div>
            <div className="">
              <div className="">
                <h4>tags</h4>
              </div>
            </div>
          </div>
          <div className="product-card">
            <div className="">
              <h3>name</h3>
            </div>
            <div className="">
              <img
                src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className=""
              />
            </div>
            <div className="">
              <div className="">
                <h4>tags</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { Home };
