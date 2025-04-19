import React, { useState } from "react";
import HomePage from "./components/Pages/HomePage";
import LoadingScreen from "./components/loading/loading";
import { SplineProvider } from "../src/components/Context/SplineContext";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <SplineProvider>
      <div data-bs-spy="scroll">
        {!isLoaded ? <LoadingScreen onLoaded={handleLoaded} /> : <HomePage />}
      </div>
    </SplineProvider>
  );
};

export default App;
