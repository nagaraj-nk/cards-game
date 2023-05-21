import { initializeApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const config = {
  apiKey: "AIzaSyDcmUjjCEGoy8bZ_GbT-l_mvhK-aanjD-4",
  authDomain: "kingqueenjack.firebaseapp.com",
  projectId: "kingqueenjack",
  storageBucket: "kingqueenjack.appspot.com",
  messagingSenderId: "263414706463",
  appId: "1:263414706463:web:65aa043b66e85cdd0d802a",
  measurementId: "G-TRV2C1EXZ5"
};
const app = initializeApp(config);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });