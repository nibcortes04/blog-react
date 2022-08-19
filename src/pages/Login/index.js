import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

function Login({}) {
  const navigate = useNavigate();
  return (
    <div className="login-container ">
      <div className="login-container--header">
        <h1>Blog-React</h1>
      </div>
      <div className="login-container--register">
        <h3>Inicia seccion con tus redes sociales.</h3>
        <button
          className="button"
          type="submit"
          onClick={() => navigate("/Home")}
        >
          Iniciar seccion
        </button>
      </div>
    </div>
  );
}

export { Login };
