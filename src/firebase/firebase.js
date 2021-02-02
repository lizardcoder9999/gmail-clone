import firebase from "firebase";

// This info will be invalid once you see this :)
const firebaseConfig = {
  apiKey: "AIzaSyBJlOwv5p0bc-X3KA2YrJ1BjDFZHr0VeO4",
  authDomain: "clone-7fc1e.firebaseapp.com",
  projectId: "clone-7fc1e",
  storageBucket: "clone-7fc1e.appspot.com",
  messagingSenderId: "991656475952",
  appId: "1:991656475952:web:2939d4042c2ee3d2045cf5",
  measurementId: "G-XEX7EXV8SP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
