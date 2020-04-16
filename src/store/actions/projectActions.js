export const createProject = (project) => {
    return (dispath, getState, { getFirebase, getFirestore }) => {
        //make async call to DB
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore
            .collection("projects")
            .add({
                ...project,
                authorFirstName: profile.firstName,
                authorLastName: profile.lastName,
                authorId: authorId,
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
