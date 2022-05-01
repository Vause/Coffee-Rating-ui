import axios from "axios";
import configData from "./config.json"

export default axios.create({
  baseURL: configData.COFFEE_RATING_API_URL,
  headers: {
    "Content-type": "application/json"
  }
});