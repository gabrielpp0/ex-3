import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBleqrll-h-CdCvOxW4CIn6QOF1deUMb4A",
  authDomain: "ex-3-37a91.firebaseapp.com",
  projectId: "ex-3-37a91",
  storageBucket: "ex-3-37a91.appspot.com",
  messagingSenderId: "75050987897",
  appId: "1:75050987897:web:6d33e4b62dc4f34cdb7fa8",
  measurementId: "G-QWZX7DKV1Z"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export const insatanceFirestore = firebase.firestore();