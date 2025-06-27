import React, { useEffect, useState} from 'react';
import { GeneralContext } from './GeneralContext';

const GeneralProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_server}/roommate`);
      const result = await res.json();
      setData(result);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const generalInfo = {
    data,
    isLoading,
    refetch: fetchData, 
  };

  return (
    <GeneralContext.Provider value={generalInfo}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
