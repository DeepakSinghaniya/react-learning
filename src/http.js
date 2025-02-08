import axios from "axios";

const http = axios.create({
  baseURL: "https://api.escuelajs.co",
});

export default http;
