import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyAN0pLwh_0xHSHkpe-UmWgYOsUR8FXeVrI",
  authDomain: "tiktok-da-lu.firebaseapp.com",
  projectId: "tiktok-da-lu",
  storageBucket: "tiktok-da-lu.appspot.com",
  messagingSenderId: "823816794288",
  appId: "1:823816794288:web:676ad5babc53098272cb75"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;