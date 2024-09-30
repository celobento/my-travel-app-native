import axios from "axios";
import { CategoryType } from "./categories.types";

export async function getCategories() {
  return axios
    .get<CategoryType[]>("http://10.0.2.2:3001/categories")
    .then((res) => res.data);
}
