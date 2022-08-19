import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LoginSocialGoogle, LoginSocialFacebook } from "reactjs-social-login";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

import { setUser } from "../../actions";
import "./index.css";

function Login({}) {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.authentication.accessToken);
  const dispatch = useDispatch();

  const onLogin = (res) => {
    dispatch(setUser(res.accessToken || res.access_token));
    navigate("/Home");
  };

  React.useEffect(() => {
    if (currentUser) {
      navigate("/Home");
    }
  }, []);
  return (
    <div className="login-container ">
      <div className="login-container--header">
        <h1>Blog-React</h1>
      </div>
      <div className="login-container--register">
        <h3>Inicia seccion con tus redes sociales.</h3>
        <LoginSocialGoogle
          isOnlyGetToken
          client_id={process.env.REACT_APP_GG_APP_ID || ""}
          onResolve={({ data }) => {
            onLogin(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>

        <LoginSocialFacebook
          isOnlyGetToken
          appId={process.env.REACT_APP_FB_APP_ID || ""}
          onResolve={({ data }) => {
            onLogin(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      </div>
    </div>
  );
}

export { Login };
