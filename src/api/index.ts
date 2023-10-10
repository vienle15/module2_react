import axios from "axios";
import { GET_DATA_USER } from "./common";
export const getDataUser = async () => {
  const response = await axios.get(GET_DATA_USER);
};
