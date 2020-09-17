// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBI-RrWztgCXliJ3KLOrREZH69g_2M2Yhc",
  authDomain: "mazon-9f693.firebaseapp.com",
  databaseURL: "https://mazon-9f693.firebaseio.com",
  projectId: "mazon-9f693",
  storageBucket: "mazon-9f693.appspot.com",
  messagingSenderId: "32569699965",
  appId: "1:32569699965:web:c698f22a80659de221cb14",
  measurementId: "G-7DSDCRW8DM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
