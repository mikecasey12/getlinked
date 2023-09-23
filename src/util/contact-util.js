import axios from "axios";

const contactUtil = (contactinfo) => {
  return axios.post(
    "https://backend.getlinked.ai/hackathon/contact-form",
    contactinfo
  );
};

export default contactUtil;
