import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBS0Qs3WbV4dabbLWFeT5K8a-qM2ocVOTQ",
    authDomain: "projets4-84c66.firebaseapp.com",
    databaseURL: "https://projets4-84c66-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "projets4-84c66",
    storageBucket: "projets4-84c66.appspot.com",
    messagingSenderId: "640401793408",
    appId: "1:640401793408:web:1c486ab885b091ca1ea165"
};


// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)




app.use(router)

app.mount('#app')
