import { ADMIN_BASE_URL } from "./constants";
import axios from "axios";

const getAxios = async (url) => {
  const response = await axios
    .get(ADMIN_BASE_URL + url, {
      withCredentials: true,
    })
    .catch(() => {
      console.log("Error Api Get: " + url);
    });
  return response.data;
};

export { getAxios };
