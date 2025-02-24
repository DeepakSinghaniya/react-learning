import axios from "axios";

const http = axios.create({
  baseURL: "https://api.escuelajs.co",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access_token"),
  },
});

export default http;
