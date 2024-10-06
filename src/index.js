import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Adjust this to the correct file path if needed

// Render the App component to the root element in the HTML
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
