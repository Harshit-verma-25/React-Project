import { initializeApp } from "firebase/app"
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBOJsWIAXQOxaBuFCT4GyLBioCSDwAHUJY",
  authDomain: "note-app-20e4d.firebaseapp.com",
  projectId: "note-app-20e4d",
  storageBucket: "note-app-20e4d.appspot.com",
  messagingSenderId: "969497045708",
  appId: "1:969497045708:web:c063d1c24612a8add93069"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const noteCollection = collection(db, "notes")