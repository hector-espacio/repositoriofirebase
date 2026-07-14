// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 1. ¡ESTO ES LO NUEVO! (Trae la herramienta de la base de datos)
import { getFirestore } from "firebase/firestore";


    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAn5mIK7E2IbeCztUUff9wIDOjFC8RG6F4",
        authDomain: "mi-ecommerce-react-1ba8f.firebaseapp.com",
        projectId: "mi-ecommerce-react-1ba8f",
        storageBucket: "mi-ecommerce-react-1ba8f.firebasestorage.app",
        messagingSenderId: "396189907253",
        appId: "1:396189907253:web:b2ec5f83c5d9b0c6fcf47c"
    };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 2. ¡ESTO TAMBIÉN ES LO NUEVO! (Activa y exporta la base de datos "db")
export const db = getFirestore(app);