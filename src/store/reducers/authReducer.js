const initState = {
    authError: null,
};
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_ERROR":
            console.log("login error");

            return {
                ...state,
                authError: "Login failed",
            };
        case "LOGIN_SUCCESSS":
            console.log("Login succes");
            return {
                ...state,
                authError: null,
            };
        case "SIGNOUT_SUCCESS":
            console.log("signput succes");
            return state;
        case "SIGNUP_SUCCESS":
            console.log("signup succes");
            return {
                ...state,
                authError: null,
            };
        case "SIGNUP_ERROR":
            console.log("signup error");
            return {
                ...state,
                authError: action.err.message,
            };

        default:
            return state;
    }
};

export default authReducer;
