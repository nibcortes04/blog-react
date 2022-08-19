import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setPosts, setUser, setTags } from "../../actions";
import { getPosts, getTags } from "../../api";

import { PostCard } from "../../organisms/PostCard";
import { Overlay } from "../../atoms/Overlay";
import { SlideModal } from "../../molecules/SlideModal";

import "./index.css";

function Home({}) {
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts.list);
  const tags = useSelector((state) => state.posts.tags);
  const commentsPost = useSelector((state) => state.posts.commentsPost);
  const currentUser = useSelector((state) => state.authentication.accessToken);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = React.useState(false);

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
  console.log(commentsPost);

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
          {posts &&
            posts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            ))}
        </div>
      </section>
      <SlideModal showModal={showModal}>
        <h1>Comentarios</h1>
        {commentsPost.length > 0 ? "tiene comentarios" : "no tiene comentarios"}
      </SlideModal>
      <Overlay showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export { Home };
