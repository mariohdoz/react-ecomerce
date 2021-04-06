import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDwQGjE0lWRrIBM_Davf7OpbQiKQu6hf4I',
  authDomain: 'crwn-db-30d07.firebaseapp.com',
  projectId: 'crwn-db-30d07',
  storageBucket: 'crwn-db-30d07.appspot.com',
  messagingSenderId: '1094635509364',
  appId: '1:1094635509364:web:dc820faba7c7a9f2762321',
  measurementId: 'G-4C18CLG92L',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;