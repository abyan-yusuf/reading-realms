import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "../components/Details/Details";
import { client } from "../lib/sanity";
import Layout from "../layout/Layout";
import { useBookContext } from "../Api/allData";
import Loading from "../components/Loading/Loading";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const getBook = async () => {
    const books = await client.fetch(
      `*[_type == 'books' && _id == '${id}']{_id, category->{cat_name}, author, 'imgUrl': img.asset->url, name, desc}`
    );

    setBook(books);
  };
  useEffect(() => {
    getBook();
  }, []);
  return (
    <Layout title={book[0]?.name + ' | Reading Realms'}>
      <Details
        img={book[0]?.imgUrl}
        name={book[0]?.name}
        author={book[0]?.author}
        desc={book[0]?.desc}
        category={book[0]?.category.cat_name}
        value={book[0]}
      />
    </Layout>
  );
};

export default BookDetails;
