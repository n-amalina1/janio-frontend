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

const putAxios = async (url, body) => {
  const response = await axios
    .put(ADMIN_BASE_URL + url, body, {
      withCredentials: true,
    })
    .catch(() => {
      console.log("Error Api Put: " + url);
    });
  return response.data;
};

const postAxios = async (url, body) => {
  const response = await axios
    .post(ADMIN_BASE_URL + url, body, {
      withCredentials: true,
    })
    .catch(() => {
      console.log("Error Api Post: " + url);
    });
  return response.data;
};

export { getAxios, putAxios, postAxios };
