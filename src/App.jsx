import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllBooks from "./pages/allBooks";
import BookDetails from "./pages/bookDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/books/:id" element={<BookDetails/>} />
      </Routes>
    </div>
  );
};

export default App;