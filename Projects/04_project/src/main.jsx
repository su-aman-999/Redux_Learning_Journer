import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, NavLink } from "react-router";
import store from "./app/store.js";
import App from "./App.jsx";
import Post from "./components/Post.jsx";
import ByLimit from "./components/ByLimit.jsx";
import ByLimitPosts from "./components/ByLimitPosts.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <header
        style={{
          position: "fixed",
          padding: "24px ",
          backgroundColor: "black",
          width: "100%",
          top: "0",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <nav>
          <NavLink to={"/"} style={{ color: "white", cursor: "pointer" }}>
            <h2>RTK Toolkit</h2>
          </NavLink>
        </nav>

        <nav>
          <NavLink to="ByLimit" style={{ color: "white", cursor: "pointer" }}>
            <h2>By Limit</h2>
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="posts/:id" element={<Post />} />
        <Route path="byLimit" element={<ByLimit />}>
          <Route path="limit/:limit" element={<ByLimitPosts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
);
