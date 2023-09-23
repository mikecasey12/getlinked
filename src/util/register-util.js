import axios from "axios";

const registrationUtil = (userdata) => {
  return axios.post(
    "https://backend.getlinked.ai/hackathon/registration",
    userdata
  );
};

export default registrationUtil;
