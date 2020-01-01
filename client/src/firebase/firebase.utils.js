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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log("TCL: createUserProfileDocument -> userRef", userRef);
  const snapshot = await userRef.get();
  // console.log("TCL: createUserProfileDocument -> snapshot", snapshot);
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("TCL: createUserProfileDocument -> error", error);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey); // this creates a new collection with collectionKey as the Key
  // console.log("TCL: addCollectionAndItems -> collctionRef", collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(); // this creates a new document with a random key, since no argument was passed into the doc()
    // console.log("TCL: newDocRef", newDocRef);
    batch.set(newDocRef, obj); // this batch-writes the fillingpopulation of our new documents
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transFormedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  return transFormedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGooge = () => auth.signInWithPopup(googleProvider);

export default firebase;
