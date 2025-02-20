import { StrictMode } from "react";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
