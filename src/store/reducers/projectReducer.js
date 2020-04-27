const initState = {
    projects: [],
};
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log("created project", action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("creaye project error", action.err);
            return state;
        case "DELETE_PROJECT":
            console.log("project deleted");
            return state;
        case "DELETE_PROJECT_ERROR":
            console.log(
                "delete project error",
                "state: ",
                state,
                "action: ",
                action.project
            );
            return state;
        case "LIKE_PROJECT":
            console.log("project like");
            return state;
        case "LIKE_PROJECT_ERROR":
            console.log("project error", action.err);
            return state;
        case "DIS_LIKE_PROJECT":
            console.log("project dislike");
            return state;
        case "DIS_LIKE_PROJECT_ERROR":
            console.log("projectdislike error", action.err);
            return state;
        default:
            return state;
    }
};

export default projectReducer;
