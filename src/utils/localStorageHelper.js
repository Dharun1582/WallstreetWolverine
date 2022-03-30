export const isAuthDataStored = () => {
    if (
      localStorage.getItem("email") !== null &&
      localStorage.getItem("token") !== null
    ) {
      return true;
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      return false;
    }
  };