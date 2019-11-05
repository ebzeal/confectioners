import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "dotenv/config";

const config = {
  apiKey: "AIzaSyCrs9eYwGdNtkGoKgtE_d4qMIB1jqKLk9U",
  authDomain: "confectioner-76b6c.firebaseapp.com",
  databaseURL: "https://confectioner-76b6c.firebaseio.com",
  projectId: "confectioner-76b6c",
  storageBucket: "confectioner-76b6c.appspot.com",
  messagingSenderId: "364637810501",
  appId: "1:364637810501:web:69589c81ca8f08a8ea182c",
  measurementId: "G-KM84F78YE9"
};

// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_FIREBASE_APPID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
// };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGooge = () => auth.signInWithPopup(provider);

export default firebase;
