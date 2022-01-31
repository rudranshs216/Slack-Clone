import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDp8gpI0-2e1LqYqPNvB4omi2WkBqlveJw",
    authDomain: "slack-9644.firebaseapp.com",
    projectId: "slack-9644",
    storageBucket: "slack-9644.appspot.com",
    messagingSenderId: "480602246997",
    appId: "1:480602246997:web:6526473b8b6510415829dc"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); 

export {auth, provider, db};