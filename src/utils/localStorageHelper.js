export const isAuthDataStored = () => {
  if (
    localStorage.getItem("token") == null
  ) {
    return false;
  } else {
    // localStorage.removeItem("token");
    return true;
  }
};