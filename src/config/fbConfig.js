import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD43CBgyLWRMZlDCXnVb1tObdOb8Dy4m_s",
    authDomain: "socialplan-d7aa1.firebaseapp.com",
    databaseURL: "https://socialplan-d7aa1.firebaseio.com",
    projectId: "socialplan-d7aa1",
    storageBucket: "socialplan-d7aa1.appspot.com",
    messagingSenderId: "25429712266",
    appId: "1:25429712266:web:b9dad82b514cd7da2efc73",
    measurementId: "G-MGWTCJRQTX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore().settings({});

export default firebase;
