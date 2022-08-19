import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setPosts, setUser } from "../../actions";

import "./index.css";

function Home({}) {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts.list);
  const currentUser = useSelector((state) => state.authentication.accessToken);
  const dispatch = useDispatch();

  const onLogout = (res) => {
    dispatch(setUser(""));
  };

  React.useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser]);

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
              <button className="button" type="submit" onClick={onLogout}>
                Cerrar seccion
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <section className="main-container">
        <div className="cards-container">
          <div className="post-card">
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
          <div className="post-card">
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
          <div className="post-card">
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
