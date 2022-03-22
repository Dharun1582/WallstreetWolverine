import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
})


// export const api
export const apiFetchGraphData = async () => {
  try {
    const response = await api.get("users");
    return response;
  } catch (error) {
    return error.response;
  }
};

export const apiPostRegisterDetails = async (details,config) => {
    try {
      const response = await api.post("register",details,config);
      return response;
    } catch (error) {
      return error.response;
    }
  };

  export const apiGetWallet = async (config) => {
    try {
      const response = await api.post("stock",config);
      return response;
    } catch (error) {
      return error.response;
    }
  };  