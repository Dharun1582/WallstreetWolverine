export const REGISTER_FORM_FIELDS = [
    {
        type: "text",
        heading: "Name",
        name: "name",
    },
    {
        type: "text",
        heading: "K! ID",
        name: "kid"
    },
    {
        type: "tel",
        heading: "Contact number",
        name: "phone"
    },
    {
        type: "text",  // maybe change type to email later
        heading: "Email ID",
        name: "email",
    },
    {
        type: "text",
        heading: "College name",
        name: "college"
    },
    {
        type: "text",
        heading: "Department",
        name: "dept"
    },
    {
        type: "password",
        heading: "Password",
        name: "password"
    },
    {
        type: "password",
        heading: "Confirm Password",
        name: "confirmPassword"
    },
];

export const LOGIN_FORM_FIELDS = [
    {
        type: "text",
        heading: "K! ID",
        name: "kid"
    },
    {
        type: "password",
        heading: "Password",
        name: "password"
    },
]