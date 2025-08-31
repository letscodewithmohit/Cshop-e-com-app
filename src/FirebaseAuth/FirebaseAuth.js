import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEoBikgxzlPxtxllgysBYF7B1bUsWPu6g",
  authDomain: "cshop-fcaa7.firebaseapp.com",
  projectId: "cshop-fcaa7",
  storageBucket: "cshop-fcaa7.firebasestorage.app",
  messagingSenderId: "34410431333",
  appId: "1:34410431333:web:34806a8f4600f9c83b178c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const db = getFirestore(app);

export {app, auth, db};
