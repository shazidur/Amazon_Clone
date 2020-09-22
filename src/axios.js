import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-mazon-9f693.cloudfunctions.net/api",
});

export default instance;

//  http://localhost:5001/mazon-9f693/us-central1/api
