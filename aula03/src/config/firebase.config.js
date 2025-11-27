import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcMdrshYYSmZz1JgxoXLgJC8gjgNzLBKI",
  authDomain: "react-native-uniesp-56d38.firebaseapp.com",
  projectId: "react-native-uniesp-56d38",
  storageBucket: "react-native-uniesp-56d38.firebasestorage.app",
  messagingSenderId: "804147365502",
  appId: "1:804147365502:web:7e23852b0b441fb1713a2f"
};

const missingConfigKeys = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingConfigKeys.length) {
  throw new Error(
    `Firebase configuration ausente. Verifique as variáveis: ${missingConfigKeys.join(
      ", "
    )}`
  );
}

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };