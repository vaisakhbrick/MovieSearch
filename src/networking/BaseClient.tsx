import axios from 'axios'
import { baseUrl } from '../constants/Constants';



const instance = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
});

export default instance
