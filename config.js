import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyCrte-tKhXVEi2XsPlTpDBX42R5TFMGzV4",
    authDomain: "project-71-58681.firebaseapp.com",
    projectId: "project-71-58681",
    storageBucket: "project-71-58681.appspot.com",
    messagingSenderId: "366828697264",
    appId: "1:366828697264:web:43ab10f824effcb14e6d75"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
