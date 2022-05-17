import axios from "axios";
import {getCSRFtoken} from "./helpers";


axios.defaults.headers.common['X-CSRFToken'] = getCSRFtoken();


export const addMessage = (params, callback) => {
  axios.post('/api/add_message/', params)
    .then(resp => {
      callback(resp.data)
    })
    .catch(err => {
      console.log(err)
    });
}