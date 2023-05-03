// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnjfg2eWz4Ube1l0eaiY_8BaDuaISYr1I",
  authDomain: "food-express-client.firebaseapp.com",
  projectId: "food-express-client",
  storageBucket: "food-express-client.appspot.com",
  messagingSenderId: "320348533123",
  appId: "1:320348533123:web:b17da8caa0e678788c86b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;