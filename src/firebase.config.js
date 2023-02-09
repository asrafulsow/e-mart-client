import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAC_jtbEy7UMYZsJPvDHzHP9-YOT_3ibkI",
  authDomain: "e-mart-g.firebaseapp.com",
  projectId: "e-mart-g",
  storageBucket: "e-mart-g.appspot.com",
  messagingSenderId: "630788353602",
  appId: "1:630788353602:web:8e0f72641d6b642d8207db",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
