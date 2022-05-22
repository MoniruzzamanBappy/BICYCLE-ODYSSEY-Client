// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC33e6dcoo5QyMO9axFNouWqk11KxRMtmI",
  authDomain: "bicycle-odyssey.firebaseapp.com",
  projectId: "bicycle-odyssey",
  storageBucket: "bicycle-odyssey.appspot.com",
  messagingSenderId: "196013402689",
  appId: "1:196013402689:web:41013424b82105aee934c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;