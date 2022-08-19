import React from "react";

import "./index.css";

function SlideModal({ showModal, children }) {
  return <div className={`Modal ${showModal ? "Show" : ""}`}>{children}</div>;
}

export { SlideModal };
