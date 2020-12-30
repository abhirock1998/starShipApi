import Axios from "axios";

export const StarsWarsInstance = Axios.create({
  baseURL: "http://swapi.dev/api/",
});
