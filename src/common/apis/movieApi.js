import Axios from "axios";

export default Axios.create({
  baseURL: "http://www.omdbapi.com",
});
