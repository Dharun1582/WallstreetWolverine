import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
})


// export const api
export const apiFetchGraphData = async () => {
  try {
    const response = await api.get("graphUpdate");
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
      const response = await api.get("stock",config);
      return response;
    } catch (error) {
      return error.response;
    }
  };
  
  export const apicheckUser = async (config) => {
    try {
      const response = await api.get("checkUser",config);
      return response;
    } catch (error) {
      return error.response;
    }
  };

  export const apicheckRecord = async (config) => {
    try {
      const response = await api.get("checkRecord",config);
      return response;
    } catch (error) {
      return error.response;
    }
  };

  export const apigetProfile = async (config) => {
    try {
      const response = await api.get("profile",config);
      return response;
    } catch (error) {
      return error.response;
    }
  };

  export const apiBuyStock = async (column, value,nos,config) => {
    try {
      const response = await api.get(`buyStock/${column}/${value}/${nos}`,config);
      return response;
    } catch (error) {
      return error.response;
    }
  };

  export const apiSellStock = async (column, value,nos,config) => {
    try {
      const response = await api.get(`sellStock/${column}/${value}/${nos}`,config);
      return response;
    } catch (error) {
      return error.response;
    }
  };