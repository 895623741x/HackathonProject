import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyA0i4fRpWCzaqSlheuLM7xAjAMQHuQzIZU",
   authDomain: "hackthon-9a9b4.firebaseapp.com",
   projectId: "hackthon-9a9b4",
   storageBucket: "hackthon-9a9b4.appspot.com",
   messagingSenderId: "11530136970",
   appId: "1:11530136970:web:296859353b78defaee6c73",
   measurementId: "G-GHFZYS07KY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
