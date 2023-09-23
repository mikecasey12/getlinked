import axios from "axios";

//function that sends a post request containing user message
const contactUtil = (contactinfo) => {
  return axios.post(
    "https://backend.getlinked.ai/hackathon/contact-form",
    contactinfo
  );
};

export default contactUtil;
