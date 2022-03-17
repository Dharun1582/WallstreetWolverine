import { validateName, validateKID, validateContact, validateEmail, validateInstitute, validateDept, validatePassword, validateConfirmPassword } from "./validators";

export const validateForm = (args) => {
    let pageType = args.pageType
    let name = args.name
    let email = args.email
    let kId = args.kId
    if (pageType === 'Register') {
        if (!validateName(name)) {
            return {
                status: false,
                message: "Invalid Name",
            };
        }
        if (!validateKID(kId)) {
            return {
                status: false,
                message: "Invalid K! ID",
            };
        }
        if (!validateContact(args.number)) {
            return {
                status: false,
                message: "Invalid contact number"
            }
        }
        if (!validateEmail(email)) {
            return {
                status: false,
                message: "Invalid Email",
            };
        }
        
        if (!validateInstitute(args.college)) {
            return {
                status: false,
                message: "Invalid institution name"
            }
        }
        if (!validateDept(args.department)) {
            return {
                status: false,
                message: "Invalid department type"
            }
        }
        if (!validatePassword(args.password)) {
            return {
                status: false,
                message: "Invalid password"  // "password should be atleast 8 characters"
            }
        } 
    
        if (!validateConfirmPassword(args.password, args.confirmPassword)) {
            return {
                status: false,
                message: "Passwords don't match"
            }
        } else {
            return {
                 // should add logic here for the case when entered fields are not in the database 
                status: true    
                
            }
        }
    } else if (pageType === 'Login') {
        if (!validateKID(kId)) {
            return {
                status: false,
                message: "Invalid K ID"
            }
        }

        // use a different validatePassword function for log in 
        if (!validatePassword(args.password)) {
            return {
                status: false,
                message: "Incorrect password"
            }
        } else {
            return {
                status: true
            }
        }
    }
}