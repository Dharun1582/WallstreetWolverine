export const isAuthDataStored = () => {
  if (
    localStorage.getItem("token") == null
  ) {
    console.log("SAD");
    return false;
  } else {
    console.log("HAPPY");
    // localStorage.removeItem("token");
    return true;
  }
};