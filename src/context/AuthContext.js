import React, { useCallback, useEffect, useState } from "react";
import firebase from "../firebase/firebase";
import "firebase/firestore";

const initialValues = {
  name: '',
  email: '',
  uid: '',
  photo: '',
  authenticated: false,
  rol: null,
  team: '',
};

export const AuthContext = React.createContext(initialValues);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser] = useState(null);
  const [loadingAuthState, setLoadingAuthState] = useState(false);

  const getDataUser = useCallback((id) => {
    firebase.firestore().collection('users').doc(id).get().then((doc) => {
      if(doc.exists){
        setUser(doc.data());
        setLoadingAuthState(false);
      } else {
        console.log("%cNo existe el documento", "background-color: #FF5F21; color: white; padding: 4px 8px;");      }
    })
  }, [])
    
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userTemp) => {
      setCurrentUser(userTemp);
      if(!!userTemp) {
        getDataUser(userTemp.uid);
      } else {
        setUser(null);
      }
    })
  }, [getDataUser])

  return (
    <AuthContext.Provider value={{user, currentUser, authenticated: !!currentUser, loadingAuthState, setCurrentUser, setLoadingAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
