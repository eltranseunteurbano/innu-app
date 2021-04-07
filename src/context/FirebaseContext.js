import React from "react";
import "firebase/auth";
// import firebase from "firebase/app";
// import firebaseConfig from "../firebase/FirebaseConfig";

const initialValues = {};

const initialContext = {
  state: initialValues,
  setState: () => undefined,
  defaultState: initialValues,
  user: {},
};

export const FirebaseContext = React.createContext(initialContext);

export const FirebaseProvider = ({ children }) => {
  const [state, setState] = React.useState(initialValues);
  const [user, setUser] = React.useState({});

  const value = React.useMemo(() => ({ state, user, setState, setUser }), [
    state,
    user,
    setState,
    setUser,
  ]);

  return (
    <FirebaseProvider.Provider value={initialContext}>
      {children}
    </FirebaseProvider.Provider>
  );
};

export default FirebaseProvider;
