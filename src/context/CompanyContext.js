import React, { useCallback, useEffect, useState } from "react";
import firebase from "../firebase/firebase";
import "firebase/firestore";
import useAuth from "../hooks/useAuth";

const initialValues = {
  
};

export const CompanyContext = React.createContext(initialValues);

export const CompanyProvider = ({ children }) => {

  const [companyData, setCompanyData] = useState(null);
  const [measuresData, setMeasuresData] = useState([]);
  const { authenticated, user } = useAuth();

  const getDataUserCompany = useCallback((companyId) => {
    firebase.firestore().collection('companies').doc(companyId).onSnapshot((doc) => {
      setCompanyData(doc.data());
    })
    firebase.firestore().collection('companies').doc(companyId).collection('measures')
    .get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setMeasuresData((prev) => 
          [...prev, doc.data()]
        )
      })
    })
  }, []);

  useEffect(() => {
    if(!authenticated) return
    if(!!user){
      getDataUserCompany(user.company);
    }
  }, [authenticated, getDataUserCompany, user])

  return (
    <CompanyContext.Provider value={{...companyData, measuresData}}>
      {children}
    </CompanyContext.Provider>
  )
}