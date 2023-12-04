import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (email, password) => {
  signInWithEmailAndPassword(auth, email, password);
};
