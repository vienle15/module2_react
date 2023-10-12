import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../action/productActionTypes";
import { products } from "../models/productDB";
import { I_Product } from "../types";

// Định nghĩa kiểu dữ liệu cho action

export const productReducer = (state = products, action: any) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];

    case UPDATE_PRODUCT:
      return state.map((product, index) =>
        index === action.index ? action.payload : product
      );

    case DELETE_PRODUCT:
      return state.filter(
        (product: I_Product) => product.id !== action.payload
      );

    default:
      return state;
  }
};
