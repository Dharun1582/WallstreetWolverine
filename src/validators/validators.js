// should add logic for the case when entered fields are not in the database
export const validateName = (name) => {
    if (name.length === 0) return false;
    return true;
};

export const validateEmail = (email) => {
    let regex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
};

export const validateContact = (contact) => {
    let regex = /^\d{10}$/;
    return regex.test(contact);
};

export const validateInstitute = (instituteName) => {
    if (instituteName.length === 0) return false;
    return true;
};

export const validateKID = (kId) => {
    if (kId.length === 0) return false
    return true
}

export const validateDept = (dept) => {
    if (dept.length === 0) return false
    return true;
}

export const validatePassword = (password) => {
    // password logic
    return true   
}

export const validateConfirmPassword = (password, confirmPassword) => {  
    if (password !== confirmPassword) {
        return false
    } 
    return true
}