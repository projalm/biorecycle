import axios from "axios";

const PRODUCT = axios.create({
  baseURL: "http://localhost:1337/api/",
});

export default PRODUCT;
