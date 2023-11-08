import { PortableText } from "@portabletext/react";
import React from "react";
import Loading from "../Loading/Loading";
import { useBookContext } from "../../Api/allData";

const Details = ({ name, img, author, category, desc, value }) => {
  const { loading, moveToCart } = useBookContext();
    return (<div className="pt-20 pb-10 flex justify-center">{loading? <Loading/>:
    <div className="card h-1/6 w-full md:card-side bg-base-100 shadow-xl">
      <figure className="rounded-xl pl-5 w-96">
        <img
          src={img}
          className="rounded-2xl h-full min-w-full w-full border border-slate-600"
        />
      </figure>
      <div className="card-body w-5/6">
        <h2 className="card-title">{name}</h2>
        <p>{"-By " + author}</p>
        <PortableText value={desc} className='' />
        <p>{"Book type: " + category}</p>
        <div className="card-actions md:justify-end md:m-0 mt-10 flex justify-center">
          <button onClick={() => moveToCart(value)} className="btn hover:bg-slate-500 hover:text-slate-200">
            Add to cart
          </button>
          <button className="btn hover:bg-slate-500 hover:text-slate-200">
            Buy Now !
          </button>
        </div>
      </div>
    </div>}</div>
    
  );
};

export default Details;
