import axios from "axios";

const host = "http://localhost:3030/api/";

export default class Api {
  coursesApi(type) {
    return axios.get(`${host}${type}`);
  }
}
