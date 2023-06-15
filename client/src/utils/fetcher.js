import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:3000/api" });
API.interceptors.request.use(function (req) {
  if (localStorage.getItem("user"))
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("userdata")).token
    }`;
  // Do something before request is sent
  return req;
});


export API;