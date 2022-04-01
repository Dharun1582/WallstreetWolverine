import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:3001/",
// })

// const api = axios.create({
//   baseURL: "https://api.kurukshetra.org.in/",
// });

const api = axios.create({
  // baseURL: "http://localhost:3001",
  baseURL: "https://api.srinathnow.tech/",
});

const url_sendMail = "api/user/query";
const url_googleSignin = "api/auth/googlesignin";
// export const api
export const apiFetchGraphData = async () => {
  try {
    const response = await api.get("graphUpdate");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const apiPostRegisterDetails = async (details, config) => {
  try {
    const response = await api.post("register", details, config);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const apiGetWallet = async (config) => {
  try {
    const response = await api.get("stock", config);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const apiGetHistory = async (config) => {
  try {
    const response = await api.get("history", config);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const apicheckUser = async (config) => {
  try {
    const response = await api.get("checkUser", config);
    return response;
  } catch (error) {
    return error.response;
  }
};



export const apigetProfile = async (config) => {
  try {
    const response = await api.get("profile", config);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const apiBuyStock = async (column, value, nos, config) => {
  try {
    const response = await api.get(`buyStock/${column}/${value}/${nos}`, config);
    return response;
  } catch (error) {
    return error.response;
  }
};

const url_contact = "api/user/query";

export const apiSellStock = async (column, value, nos, config) => {
  try {
    const response = await api.get(`sellStock/${column}/${value}/${nos}`, config);
    return response;
  } catch (error) {
    return error.response;
  }
};


// export const apisendMail = async (data) => {
//   try {
//     const response = await api_k.post(`${url_contact}`, data);
//     return response;
//   } catch (error) {
//     return error.response;
//   }
// };




export const apiGoogleSignin = () => {
  // window.location = "https://api.sherlock.kurukshetraceg.org.in/" + url_googleSignin;
  // window.location = "https://api.kurukshetraceg.org.in/" + url_googleSignin;
  window.location = "https://api.srinathnow.tech/" + url_googleSignin;
  // window.location = "http://localhost:3001/" + url_googleSignin;



};

