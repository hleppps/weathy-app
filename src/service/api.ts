import axios from "axios";
import { config } from "../constants";

export const client = axios.create({
  baseURL: config.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// івфі
// вфвіфв

client.interceptors.request.use(async (request) => {
  request.url = await `${request.url}&key=${config.API_KEY}`;
  return request;
});
