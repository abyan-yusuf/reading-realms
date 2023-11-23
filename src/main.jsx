import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import BookDataProvider from "./Api/allData.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="reading-realms.us.auth0.com"
    clientId="Dq8UXXuixT2VhIkZEP2MPqFbBTZqHn5M"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BookDataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BookDataProvider>
  </Auth0Provider>
);
