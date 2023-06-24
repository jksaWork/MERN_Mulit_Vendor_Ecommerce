import axios from "axios";

export const API = axios.create({ baseURL: "http://127.0.0.1:3000/api" });
API.interceptors.request.use(function (req) {
  console.log(JSON.parse(localStorage.getItem("shop_data")));
  if (localStorage.getItem("shop_data"))
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("shop_data")).token
    }`;
  // Do something before request is sent
  return req;
});
// Posts Api
export const CreateProductApi = (body, headers) =>
  API.post("products/create", body, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const GetAllProductAPI = (id) =>
  API.get(`products/get-all-products/${id}`);
