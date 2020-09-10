import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyCcPSKlYtpdzBoAC8soeSmIARMzVKzrf5I",
//   authDomain: "challenge-4b2b2.firebaseapp.com",
//   databaseURL: "https://challenge-4b2b2.firebaseio.com",
//   projectId: "challenge-4b2b2",
//   storageBucket: "challenge-4b2b2.appspot.com",
//   messagingSenderId: "962418448875",
//   appId: "1:962418448875:web:f6cce5eeaf819481f661ae",
// };

const firebaseConfig = {
  apiKey: "AIzaSyBX4i3pDQxeoqyhC1ULjLC1lp6UyimK7fA",
  authDomain: "amz-clo.firebaseapp.com",
  databaseURL: "https://amz-clo.firebaseio.com",
  projectId: "amz-clo",
  storageBucket: "amz-clo.appspot.com",
  messagingSenderId: "486430632075",
  appId: "1:486430632075:web:7fcb3596497be8d6770c8e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
