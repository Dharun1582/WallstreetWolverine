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

export const validateKID = (kid) => {
    if (kid.length === 0) return false
    return true
}

export const validateDept = (dept) => {
    if (dept.length === 0) return false
    return true;
}

export const validatePassword = (password) => {
    // password logic
    const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];  
    let ok = true
    if (password.length < 8) {
        ok = false
    }
    let hasUpperCase, hasLowerCase, hasDigits
    for (let i = 0; i < digits.length; ++i) {
        let digit = digits[i]
        for (let j = 0; j < password.length; ++j) {
            if (password.charAt(j) === digit) {
                hasDigits = true
                break
            }
        }
        if (hasDigits) break
    }
    hasLowerCase = hasUpperCase = false
    for (let i = 0; i < password.length; ++i) {
        let ch = password.charAt(i)
        if (ch === ch.toUpperCase()) {
            hasUpperCase = true
        }
        if (ch === ch.toLowerCase()) {
            hasLowerCase = true
        }
    }
    if (hasLowerCase && hasUpperCase && ok && hasDigits) {
        return true
    }
    return false
}

export const validateConfirmPassword = (password, confirmPassword) => {  
    if (password !== confirmPassword) {
        return false
    } 
    return true
}