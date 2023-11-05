import React from "react";
import Layout from "../layout/Layout";
import { useBookContext } from "../Api/allData";
import Book from "../components/Books/Books";

const AllBooks = () => {
  const { book, getSearchData, category, getSelectData } = useBookContext()
  return (
    <Layout title="All Books">
      <section className="pb-10 pt-24">
        <div className="flex justify-center pb-10">
          <input
            type="search"
            placeholder="Search Books"
            className="input input-bordered w-1/2"
            onChange={getSearchData}
          />
          <select className="select select-bordered w-[200px] ps-5 mx-5 max-w-xs" onChange={getSelectData}>
            <option selected value='*'>
              Choose a Category
            </option>
            {category.map((n) => (
              <option key={n?._id} value={n?.cat_name}>{n?.cat_name}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap justify-between px-10">
          {book.map((n) => (
            <Book
              link={n?._id}
              img={n?.imgURL}
              title={n?.name}
              author={n?.author}
              key={n?._id}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default AllBooks;
