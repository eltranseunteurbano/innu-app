import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './FirebaseConfig';

firebase.initializeApp(firebaseConfig);

export default firebase;
