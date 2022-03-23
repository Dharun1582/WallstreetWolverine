import axios from "axios";

const url_sendMail = "api/user/query";

const api = axios.create({
  baseURL: "https://api.kurukshetra.org.in/",
});

export const apisendMail = async (data) => {
    try {
      const response = await api.post(url_sendMail, {
        email: data.email,
        name: data.name,
        message: data.message,
      });
      // console.log(response.data);
      return response;
    } catch (error) {
      // console.log(error.response);
      return error.response;
    }
  };
 