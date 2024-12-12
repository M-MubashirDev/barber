import { createContext, useContext, useState } from "react";
// import { useProfessionals } from "./useProfessionals";

const mainContext = createContext();
function ContextMain({ children }) {
  // const professionalMain = useProfessionals();
  const [mainData, setMainData] = useState({});
  console.log(mainData);
  return (
    <mainContext.Provider value={{ setMainData, mainData }}>
      {children}
    </mainContext.Provider>
  );
}

function useContextMain() {
  const context = useContext(mainContext);
  if (!context) {
    throw new Error("useMainContext must be used within a MainContextProvider");
  }
  return context;
}

export { useContextMain };
export default ContextMain;
