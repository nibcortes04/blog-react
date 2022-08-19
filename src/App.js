import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes basename={process.env.PUBLIC_URL}>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
