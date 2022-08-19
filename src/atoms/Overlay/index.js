import React from "react";

import "./index.css";

function Overlay({ showModal, setShowModal }) {
  return (
    <div
      className={`Overlay ${showModal ? "Show" : ""}`}
      onClick={() => setShowModal(!showModal)}
    />
  );
}

export { Overlay };
