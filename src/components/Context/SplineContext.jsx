// Crea un file SplineContext.jsx
import React, { createContext, useState } from "react";

export const SplineContext = createContext();

export const SplineProvider = ({ children }) => {
  const [splineModel, setSplineModel] = useState(null);

  return (
    <SplineContext.Provider value={{ splineModel, setSplineModel }}>
      {children}
    </SplineContext.Provider>
  );
};
