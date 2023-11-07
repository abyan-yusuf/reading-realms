import React from "react";
import Layout from "../layout/Layout";
import { useBookContext } from "../Api/allData";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useBookContext();
  console.log(cart);
  return (
    <Layout title="Cart">
      <div className="overflow-x-auto pt-20">
        <table className="table">
          <thead>
            <tr>
              <th className="w-10"></th> {/* Empty cell for spacing */}
              <th colSpan="3" className="text-center">
                Details
              </th>
              <th></th> {/* Empty cell for spacing */}
            </tr>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Name</th>
              <th>Author</th>
              <th>Category</th>
              <th></th> {/* Empty cell for spacing */}
            </tr>
          </thead>
          <tbody>
            {cart.map((n) => (
              <tr>
                <td>
                  <input type="checkbox" className="checkbox" />
                </td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={n?.imgUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{n?.name}</div>
                    </div>
                  </div>
                </td>
                <td>{n?.author}</td>
                <td>{n?.category.cat_name}</td>
                <td>
                  <Link
                    to={`/books/${n?._id}`}
                    className="btn btn-ghost btn-xs"
                  >
                    details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th colSpan="3"></th> {/* Empty cell to match header layout */}
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </Layout>
  );
};

export default Cart;
