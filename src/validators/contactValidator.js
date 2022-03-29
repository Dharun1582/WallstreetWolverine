import { validateEmail, validateName } from "./validators";

export const validateContactForm = ({ name, email, message }) => {
  if (!validateName(name)) {
    return {
      status: false,
      message: "Invalid Name",
    };
  }

  if (!validateEmail(email)) {
    return {
      status: false,
      message: "Invalid Email",
    };
  }

  if (message.length === 0) {
    return {
      status: false,
      message: "Invalid Message",
    };
  }

  return {
    status: true,
  };
};
