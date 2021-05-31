import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD4Y_5kdj0PI72hlNLf4lkHe5dksk-yDBA",
  authDomain: "amzon-clone-7d3a9.firebaseapp.com",
  projectId: "amzon-clone-7d3a9",
  storageBucket: "amzon-clone-7d3a9.appspot.com",
  messagingSenderId: "623349489366",
  appId: "1:623349489366:web:b9e32785b8afb13f14f377",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
