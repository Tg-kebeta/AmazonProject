import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-25510/us-central1/api",
  baseURL: "https://default-api-saif6zl3ma-uc.a.run.app/",
});


export { axiosInstance };