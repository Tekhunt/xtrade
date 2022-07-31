import React, { createContext, useState, useContext } from "react";

const ServiceContext = createContext();
export const useService = () => useContext(ServiceContext);

export const ServiceContextProvider = ({ children }) => {
  const [service, setService] = useState(false);
  const condition = () => {
    setService(!service);
    console.log(service);
  };
  const closeService = () => {
    setService(true);
    console.log(service);
  };

  const value = {
    service,
    condition,
    closeService,
  };
  return (
    <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
  );
};
