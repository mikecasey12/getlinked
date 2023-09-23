import axios from "axios";

//function that gets list of categories
const getCategoriesUtil = () => {
  return axios.get("https://backend.getlinked.ai/hackathon/categories-list");
};

export default getCategoriesUtil;
