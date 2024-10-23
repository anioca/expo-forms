import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
//import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//import AsyncStorage from '@react-native-async-storage/async-storage'; // Certifique-se de instalar esse pacote

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCoNPVeeCdG1WmyuUm9_R9T8MAyVSBRHSE",
  authDomain: "appunicforms.firebaseapp.com",
  projectId: "appunicforms",
  storageBucket: "appunicforms.appspot.com",
  messagingSenderId: "279539927194",
  appId: "1:279539927194:web:201a8f05aaaa3a4a0cf723",
  measurementId: "G-QZ66W8XL94"
};

const app = initializeApp(firebaseConfig);

// Inicialize o Firebase Auth com persistência no AsyncStorage (para React Native)
//const auth = initializeAuth(app, {
//  persistence: getReactNativePersistence(AsyncStorage)
//});

// Inicialize o Firestore
// const db = getFirestore(app);

export { auth, db };
export {  db };
export default app;
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export{auth, provider};
