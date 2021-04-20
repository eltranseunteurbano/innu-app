import { useContext } from "react";
import firebase from '../firebase/firebase';
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import roles from '../data/roles';

const useAuth = () => {
  const { user, currentUser, authenticated, loadingAuthState, setCurrentUser, setLoadingAuthState } = useContext(AuthContext);
  const auth = firebase.auth();
  const userDB = firebase.firestore().collection('users');

  const createUserWithEmailAndPassword = (name, email, password, callback ) => {
    auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
      setLoadingAuthState(true);
      setCurrentUser(userCredential);
      userDB.doc(userCredential.user.uid)
      .set({ name, email, uid: userCredential.user.uid, photo: '', rol: roles.admin})
    })
    .then(() => {if(!!callback) callback();})
    .catch((error) => console.error(error.message))
  }

  const signInWithEmailAndPassword = (email, password, callback) => {
    setLoadingAuthState(true);
    auth.signInWithEmailAndPassword(email,password).then((userCredential) => {
      setCurrentUser(userCredential);
    })
    .then(() => {
      if(!!callback) callback();
    })
    .catch((error) => console.error(error.message))
  }
  
  const logOut = () => {
    auth.signOut();
  }

  return {
    user,
    currentUser,
    authenticated,
    loadingAuthState,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    // signInWithGoogle,
    logOut,
  }
}

export default useAuth;