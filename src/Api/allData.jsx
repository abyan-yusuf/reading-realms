import { createContext, useContext, useEffect, useState } from "react";
import { client } from "../lib/sanity";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const bookContext = createContext();

const BookDataProvider = ({ children }) => {
  const [book, setBook] = useState([]);
  const [category, setCategoryTo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, addToCart] = useState([])

  const moveToCart = (value) => {
    addToCart([...cart, value])
    toast.success( 'Added to Cart!', {closeButton: (<div className="flex items-center pe-5"><Link to={'/cart'} className="underline hover:no-underline">View Cart</Link></div>)})
  }

  const getBooks = async () => {
    setLoading(true);
    const books = await client.fetch(
      "*[_type == 'books']{name, _id, author, 'imgURL': img.asset->url}"
    );
    setLoading(false);
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
      `*[_type == 'books' && name match "${data}*"]{_id, author, 'imgURL': img.asset->url, name}`
    );
    setBook(searchBooks);
  };

  const getSelectData = (value) => {
    const selectData = value.target.value;
    processSelectedData(selectData);
  };

  const processSelectedData = async (value) => {
    const selectCategories = await client.fetch(
      `*[_type == 'books' && category._ref in *[_type == 'categories' && cat_name == '${value}' ]._id]{_id, author, 'imgURL': img.asset->url, name}`
    );
    setBook(selectCategories);
  };

  useEffect(() => {
    getBooks();
    getCategory();
  }, []);
  return (
    <bookContext.Provider
      value={{ book, category, getSearchData, getSelectData, loading, moveToCart, cart }}
    >
      {children}
    </bookContext.Provider>
  );
};
export const useBookContext = () => {
  return useContext(bookContext);
};
export default BookDataProvider;
