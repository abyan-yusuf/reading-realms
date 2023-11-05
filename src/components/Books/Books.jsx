import React from "react";
import { Link } from "react-router-dom";

const Book = ({ img, title, author, link }) => {
  return (
    <Link to={`/books/${link}`}>
      <div className="card h-[70vh] w-72 bg-base-100 shadow-xl shadow-slate-300 pt-5 mb-10 hover:-translate-y-5 transition-transform duration-150 ease-in-out delay-75 glass">
        <figure>
          <img src={img} className="w-auto h-64 rounded-lg border-2" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{"-By " + author}</p>
        </div>
      </div>
    </Link>
  );
};

export default Book;
