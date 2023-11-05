import React, { useContext } from "react";
import Layout from "../layout/Layout";
import { useBookContext } from "../Api/allData";
import Slider from "../components/Slider/Slider";
import CatSlider from "../components/EffectCardSlider/CatSlider";
import Book from "../components/Books/Books";
import { Link } from "react-router-dom";

const Home = () => {
  const { book } = useBookContext();
  const bookModified = book.slice(8);
  return (
    <Layout title="Reading Realms | Explore endless worlds">
      <section className="py-10">
        <Slider />
      </section>
      <section className="pb-10">
        <h1 className="text-4xl font-bold text-center text-slate-800 pb-10">
          All Categories
        </h1>
        <CatSlider />
      </section>
      <section className="pb-10">
        <h1 className="text-4xl font-bold text-center text-slate-800 pb-10">
          Recent Books
        </h1>
        <div className="flex flex-wrap justify-between px-10">
          {bookModified.map((n) => (
            <Book link={n._id} img={n.imgURL} title={n.name} author={n.author} key={n._id} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link className="bg-slate-400 px-7 py-2 rounded-md hover:bg-slate-700 hover:text-gray-400 transition-colors" to={'/books'}>See More</Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
