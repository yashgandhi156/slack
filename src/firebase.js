import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyBY07IIhllWq3nB7kcH0h0QNjry03KnaT8",
//   authDomain: "slack-a2634.firebaseapp.com",
//   // databaseURL: "https://slack-a2634.firebaseio.com",
//   databaseURL: "http://localhost:8000",
//   projectId: "slack-a2634",
//   storageBucket: "slack-a2634.appspot.com",
//   messagingSenderId: "415771172846",
//   appId: "1:415771172846:web:612d2949c5925e031c78ff",
// };
const firebaseConfig = {
  apiKey: "AIzaSyA4O16q9cw4j_1ClzmIdpz_81ImurMq6qQ",
  authDomain: "slack-clone-ae7ca.firebaseapp.com",
  projectId: "slack-clone-ae7ca",
  storageBucket: "slack-clone-ae7ca.appspot.com",
  messagingSenderId: "699351595049",
  appId: "1:699351595049:web:88f6e1e711fc03088cc438",
  measurementId: "G-46Y6EPPRYR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
