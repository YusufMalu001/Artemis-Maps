import React from "react";
import DemoPage from "./pages/DemoPage";
import { DarkModeProvider } from "./context/DarkModeContext";
const App = () => {
  return (
    <DarkModeProvider>
      <DemoPage />
    </DarkModeProvider>
  );
};

export default App;
