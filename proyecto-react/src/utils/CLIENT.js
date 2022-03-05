import axios from "axios";

const CLIENT = axios.create({
  baseURL: "http://localhost:1337/api/auth",
});

export default CLIENT;
