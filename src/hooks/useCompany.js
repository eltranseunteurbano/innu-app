import { useContext } from 'react';
import { CompanyContext } from '../context/CompanyContext';

const useCompany = () => {
  const { name, areas, measuresData } = useContext(CompanyContext);


  // console.log(useContext(CompanyContext), 'hola');

  return {
    name,
    areas,
    measures: measuresData,
  }
}

export default useCompany;