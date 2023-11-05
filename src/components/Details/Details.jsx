import { PortableText } from '@portabletext/react';
import React from 'react'

const Details = ({ name, img, author, category, desc }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl pt-20 pb-10">
      <figure className="rounded-xl pl-5">
        <img src={img} className="rounded-2xl h-96 w-[40vw] border border-slate-600" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{"-By " + author}</p>
        <PortableText value={desc} />
        <p>{"Book type: " + category}</p>
        <div className="card-actions justify-end">
          <button className="btn hover:bg-slate-500 hover:text-slate-200">
            Buy Now !
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details
