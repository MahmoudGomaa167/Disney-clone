import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBiSBcD2Cmw6kTIggnH6MQ37t8plBox36M",
    authDomain: "disney-clone-2fcf9.firebaseapp.com",
    projectId: "disney-clone-2fcf9",
    storageBucket: "disney-clone-2fcf9.appspot.com",
    messagingSenderId: "67221998993",
    appId: "1:67221998993:web:90a1f0180708d112eb1e30",
    measurementId: "G-PY16LVZPX9"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth();

const provider = new GoogleAuthProvider();

const storage = getStorage(firebaseApp);

export { auth, provider, storage };

export default db;
