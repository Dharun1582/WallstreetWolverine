export const isAuthDataStored = () => {
    // if (
    //     localStorage.getItem("details") !== null &&
    //     localStorage.getItem("token") !== null
    // ) 
    if (localStorage.getItem("email") !== null)
    {
        return true;
    } else {
        localStorage.removeItem("details");
        localStorage.removeItem("token");
        return false;
    }
};