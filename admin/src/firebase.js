import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCggrj8QHrpW4EjSEKrKNXPUJ9-kkMIS_s",
    authDomain: "netflix-clone-e67e3.firebaseapp.com",
    projectId: "netflix-clone-e67e3",
    storageBucket: "netflix-clone-e67e3.appspot.com",
    messagingSenderId: "814034070779",
    appId: "1:814034070779:web:09e5e6c44467af0ee5d45e",
    measurementId: "G-YSR0EPVN5Q"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;