import axios from "axios";
import { toast } from "react-toastify";
import { config } from "../constants";

export const client = axios.create({
  baseURL: config.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(async (request) => {
  request.url = await `${request.url}&key=${config.API_KEY}`;
  return request;
});

client.interceptors.response.use(
  (res) => res,
  (error) => {
    throw error.response;
  },
);
