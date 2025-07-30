import { initializeApp } from "firebase/app";
import { 
  createUserWithEmailAndPassword, 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "netflix-clone-f4bc8.firebaseapp.com",
  projectId: "netflix-clone-f4bc8",
  storageBucket: "netflix-clone-f4bc8.firebasestorage.app",
  messagingSenderId: "710713898936",
  appId: "1:710713898936:web:61274f2bb3b91c7a4c014d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


const signUp = async (name, email, password) => {

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const user = res.user

    await addDoc(collection(db, 'user'), {
      uid: user.uid,
      name,
      authProvider: "local",
      email
    })
  } catch (error) {
      console.log(error);
      toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}


const logIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
      console.log(error);
      toast.error(error.code.split('/')[1].split('-').join(" "))
  }
}

const logOut = async () => {
  try {
    await signOut(auth)
  } catch (error) {
      console.log(error);
      alert(error)
  }
}

export {auth, db, logIn, signUp, logOut}