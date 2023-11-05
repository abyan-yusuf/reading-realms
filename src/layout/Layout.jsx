import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({ children, title }) => {
  return (
    <div>
          <Helmet>
              <title>{title}</title>
          </Helmet>
          <header>
              <Navbar />
          </header>
          <main className="pb-10">
              {children}
          </main>
          <footer>
              <Footer/>
          </footer>
    </div>
  );
};

export default Layout;
