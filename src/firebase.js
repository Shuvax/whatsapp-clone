import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD_1fNVnB_jtaJWdB3-LhTypaJg09YJyQQ",
  authDomain: "whatsapp-clone-16657.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-16657.firebaseio.com",
  projectId: "whatsapp-clone-16657",
  storageBucket: "whatsapp-clone-16657.appspot.com",
  messagingSenderId: "509134281889",
  appId: "1:509134281889:web:75149c6abd26716be8e4e0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;