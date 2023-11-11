import { createContext, useContext, useEffect, useState } from "react";
import { client } from "../lib/sanity";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const bookContext = createContext();

const BookDataProvider = ({ children }) => {
  const [book, setBook] = useState([]);
  const [category, setCategoryTo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cart, addToCart] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const [lastPage, setLastPage] = useState(false)
  const maxPage = book.length / itemsPerPage

  const previous = () => {
    console.log("previous");
    setPage(page - 1);
  };
  const next = () => {
    console.log("next");
    setPage(page + 1);
  };

  const moveToCart = (value) => {
    addToCart([...cart, value]);
    toast.success("Added to Cart!", {
      closeButton: (
        <div className="flex items-center pe-5">
          <Link to={"/cart"} className="underline hover:no-underline">
            View Cart
          </Link>
        </div>
      ),
    });
  };

  const getBooks = async () => {
    setLoading(true);
    const offset = (page - 1) * itemsPerPage;
    const books = await client.fetch(
      `*[_type == 'books']{name, _id, author, 'imgURL': img.asset->url}[${offset}...${
        offset + itemsPerPage
      }]`
    );
    setLoading(false);
    setBook(books);
  };
  const getCategory = async () => {
    const category = await client.fetch(
      "*[_type == 'categories']{'img': cat_img.asset->url, cat_name, _id}"
    );

    setCategoryTo(category);
    setLastPage(page == maxPage)
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
  }, [page]);
  return (
    <bookContext.Provider
      value={{
        book,
        category,
        getSearchData,
        getSelectData,
        loading,
        moveToCart,
        cart,
        previous,
        next,
        page, 
        lastPage
      }}
    >
      {children}
    </bookContext.Provider>
  );
};
export const useBookContext = () => {
  return useContext(bookContext);
};
export default BookDataProvider;
