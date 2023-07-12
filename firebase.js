import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

//import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBq9G8aRy98JCTSg0Si0M2CC1RiAKasgOk",
  authDomain: "scientistx-trucker.firebaseapp.com",
  databaseURL: "https://scientistx-trucker-default-rtdb.firebaseio.com",
  projectId: "scientistx-trucker",
  storageBucket: "scientistx-trucker.appspot.com",
  messagingSenderId: "673042513100",
  appId: "1:673042513100:web:4bd4d74ebae04e6d875669",
  measurementId: "G-RBVTCGB4HD"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const database=getDatabase(app)

//const analytics = getAnalytics(app);
export {app,auth,database}