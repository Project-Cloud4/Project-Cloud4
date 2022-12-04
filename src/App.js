import { useState } from "react";
import HomePage from "./components/HomePasge";
import AboutPage from "./components/AboutPage";
function App() {
  const thing = true;

  return <div>{thing ? <HomePage /> : <AboutPage />}</div>;
}

export default App;
