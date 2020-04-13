export const createProject = (project) => {
    return (dispath, getState, { getFirebase, getFirestore }) => {
        //make async call to DB
        const firestore = getFirestore();
        firestore
            .collection("projects")
            .add({
                ...project,
                authorFirstName: "Ces",
                authorLastName: "aaa",
                authorId: 12345,
                createAt: new Date(),
            })
            .then(() => {
                dispath({ type: "CREATE_PROJECT", project: project });
            })
            .catch((err) => {
                dispath({ type: "CREATE_PROJECT_ERROR", err });
            });
    };
};
