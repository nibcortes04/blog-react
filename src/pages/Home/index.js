import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setPosts, setUser, setTags } from "../../actions";
import { getPosts, getTags } from "../../api";

import { PostCard } from "../../organisms/PostCard";

import "./index.css";

function Home({}) {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts.list);
  const tags = useSelector((state) => state.posts.tags);
  const currentUser = useSelector((state) => state.authentication.accessToken);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchPosts = async () => {
      const postsRes = await getPosts();
      dispatch(setPosts(postsRes.data));
    };

    const fetchTags = async () => {
      const tagsRes = await getTags();
      dispatch(setTags(tagsRes.data.slice(6, 16)));
    };

    fetchPosts();
    fetchTags();
  }, []);

  const onLogout = (res) => {
    dispatch(setUser(""));
  };

  React.useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  // console.log(tags);
  console.log(posts);

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
          {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </section>
    </div>
  );
}

export { Home };
