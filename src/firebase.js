import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBj-sT7W89om0lGYQLogZaPKKe6vbi5nrE",
  authDomain: "mealstogo-6dc6b.firebaseapp.com",
  projectId: "mealstogo-6dc6b",
  storageBucket: "mealstogo-6dc6b.appspot.com",
  messagingSenderId: "585266902026",
  appId: "1:585266902026:web:22284b44fae75c38935bf3",
  measurementId: "G-5R87XC0DBX",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
