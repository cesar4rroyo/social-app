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
export const likeProject = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore
            .collection("projects")
            .doc(id)
            .update({
                like: true,
            })
            .then(() => {
                dispatch({ type: "LIKE_PROJECT", id });
            })
            .catch((err) => {
                dispatch({ type: "LIKE_PROJECT_ERROR", err });
            });
    };
};
export const disLikeProject = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore
            .collection("projects")
            .doc(id)
            .update({
                like: false,
            })
            .then(() => {
                dispatch({ type: "DIS_LIKE_PROJECT", id });
            })
            .catch((err) => {
                dispatch({ type: "DIS_LIKE_PROJECT_ERROR", err });
            });
    };
};

export const deleteProject = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore
            .collection("projects")
            .doc(id)
            .delete()
            .then(() => {
                dispatch({ type: "DELETE_PROJECT", id });
            })
            .catch((err) => {
                dispatch({ type: "DELETE_PROJECT_ERROR", err });
            });
    };
};
