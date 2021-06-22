import React, { useContext } from 'react';
import { CompanyContext } from '../context/CompanyContext';
import "firebase/firestore";
import firebase from '../firebase/firebase'

const useMeasure = () => {
  const { measuresData } = useContext(CompanyContext);
  const [variables, setVariables] = React.useState([]);

  React.useEffect(() => {
    firebase.firestore().collection('variables').get().then((querySnapshot) => {
      querySnapshot.forEach(doc => {
        doc.data().subvariables.forEach(subvar => {
          
        })
      });
    })

  }, [])
  
  return {
    measures: measuresData,
  }
}

export default useMeasure;