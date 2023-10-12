import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { I_Product } from "../types";
import {
  deleteProduct,
  addProduct,
  updateProduct,
} from "../action/productAction";

function ProductList() {
  const products = useSelector((state) => state) as I_Product[];
  const dispatch = useDispatch();
  const newProduct = {
    id: 10,
    name: "Viễn",
    price: 80000000000000,
    qty: 1,
  };

  return (
    <div>
      <h2>product list</h2>
      <button onClick={() => dispatch(addProduct(newProduct))}>
        add product
      </button>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Qty</th>
          <th>Price</th>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.qty}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => dispatch(deleteProduct(product.id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
