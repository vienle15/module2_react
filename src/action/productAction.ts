import { I_Product } from "../types";
import {
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./productActionTypes";

export const addProduct = (product: I_Product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const updateProduct = (product: I_Product, index: number) => ({
  type: UPDATE_PRODUCT,
  payload: product,
  index,
});

export const deleteProduct = (productId: number) => ({
  type: DELETE_PRODUCT,
  payload: productId,
});
