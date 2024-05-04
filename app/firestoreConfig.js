import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDPM6ItcHSZ7m4PytAID_X6ITVFXWdfmeE",
//   authDomain: "capstone-project-97f09.firebaseapp.com",
//   databaseURL:
//     "https://capstone-project-97f09-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "capstone-project-97f09",
//   storageBucket: "capstone-project-97f09.appspot.com",
//   messagingSenderId: "650110251058",
//   appId: "1:650110251058:web:5042239b54031f767e0c2b",
// };

// Hydrosync web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFv-D7hGefP1Wi4SmCrjWpb9hxgIe899A",
  authDomain: "hydrosync-f5473.firebaseapp.com",
  projectId: "hydrosync-f5473",
  storageBucket: "hydrosync-f5473.appspot.com",
  messagingSenderId: "599268344195",
  appId: "1:599268344195:web:90ba887cd740b1fa39b6b6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
