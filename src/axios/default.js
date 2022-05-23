import axios from "axios";
import { server_url } from "./keys";
axios.defaults.baseURL = server_url;
export default axios;
