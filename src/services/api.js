import axios from "axios";

const API_KEY = import.meta.env.value_of_this_api_key;

const unsplashAPI = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

export const searchImages = async (query, page = 1, perPage = 10) => {
  const response = await unsplashAPI.get("/search/photos", {
    params: {
      query,
      page,
      per_page: perPage,
    },
  });
  return response.data;
};
