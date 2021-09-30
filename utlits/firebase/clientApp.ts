import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const clientCredentials = {
  apiKey: "AIzaSyBpTWcltr9IlgsrkaxMOMILUgckiQaGMMI",
  authDomain: "expensetracker-b3547.firebaseapp.com",
  databaseURL: "https://expensetracker-b3547.firebaseio.com",
  projectId: "expensetracker-b3547",
  storageBucket: "expensetracker-b3547.appspot.com",
  messagingSenderId: "868265460975",
  appId: "1:868265460975:web:8ef392396b7bca886a471a",
  measurementId: "G-F49ES2VCCE"
};

if (!firebase.apps.length) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
