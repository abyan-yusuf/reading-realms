import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import BookDataProvider from "./Api/allData.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BookDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BookDataProvider>
);
