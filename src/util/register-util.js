import axios from "axios";

//function that sends a post request containing user registration info
const registrationUtil = (userdata) => {
  return axios.post(
    "https://backend.getlinked.ai/hackathon/registration",
    userdata
  );
};

export default registrationUtil;
