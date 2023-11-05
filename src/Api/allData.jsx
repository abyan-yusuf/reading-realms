import { createContext, useContext, useEffect, useState } from "react";
import { client } from "../lib/sanity";

const bookContext = createContext();

const BookDataProvider = ({ children }) => {
  const [book, setBook] = useState([]);
  const [category, setCategoryTo] = useState([]);

  const getBooks = async () => {
    const books = await client.fetch(
      "*[_type == 'books']{name, _id, author, 'imgURL': img.asset->url}"
    );

    setBook(books);
  };
  const getCategory = async () => {
    const category = await client.fetch(
      "*[_type == 'categories']{'img': cat_img.asset->url, cat_name, _id}"
    );

    setCategoryTo(category);
  };

  const getSearchData = (value) => {
    const userSearchData = value.target.value;
    processSearchData(userSearchData);
  };

  const processSearchData = async (data) => {
    const searchBooks = await client.fetch(
      `*[_type == 'books' && name match "${data}*"]{author, 'imgURL': img.asset->url, name, _id}`
    );
    setBook(searchBooks);
  };

  const getSelectData = (value) => {
    const selectData = value.target.value;
    processSelectedData(selectData);
  };

  const processSelectedData = async (value) => {
    const selectCategories = await client.fetch(
      `*[_type == 'books' && category._ref in *[_type == 'categories' && cat_name == '${value}' ]._id]{author, 'imgURL': img.asset->url, name}`
    );
    setBook(selectCategories);
  };

  useEffect(() => {
    getBooks();
    getCategory();
  }, []);
  return (
    <bookContext.Provider
      value={{ book, category, getSearchData, getSelectData }}
    >
      {children}
    </bookContext.Provider>
  );
};
export const useBookContext = () => {
  return useContext(bookContext);
};
export default BookDataProvider;
