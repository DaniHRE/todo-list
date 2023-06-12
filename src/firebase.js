import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsh0rI4DxPv4y4Q6QJ8w6WfJPWJ5o0BJI",
  authDomain: "todo-list-20211.firebaseapp.com",
  projectId: "todo-list-20211",
  storageBucket: "todo-list-20211.appspot.com",
  messagingSenderId: "459133201879",
  appId: "1:459133201879:web:f4faf6da4f90d27f08ef92"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)