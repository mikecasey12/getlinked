import axios from "axios";

const getCategoriesUtil = () => {
  return axios.get("https://backend.getlinked.ai/hackathon/categories-list");
};

export default getCategoriesUtil;
