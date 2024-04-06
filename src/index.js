import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ScrollToTop from "./utils/ScrollToTop/ScrollToTopFunc";
import PagePreloader from "./Components/PagePreloader/PagePreloader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ScrollToTop />
    <App />
    <PagePreloader />
  </React.StrictMode>
);
reportWebVitals();
