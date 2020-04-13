const initState = {
    projects: [
        { id: "1", title: "i want you", content: "ha ha ha" },
        { id: "2", title: "i love you", content: "ha ha ha" },
        { id: "3", title: "i miss you", content: "ha ha ha" },
    ],
};
const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log("created project", action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("creaye project error", action.err);
            return state;
        default:
            return state;
    }
};

export default projectReducer;
