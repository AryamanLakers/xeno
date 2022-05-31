import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import FAQ from "./components/FAQ";
import Privacy from "./components/Privacy";
import AML from "./components/AML";
import TermsConditions from "./components/TermsConditions";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={ <App /> } />
          <Route path="faq" element={<FAQ />}/>
          <Route path="privacy" element={<Privacy />}/>
          <Route path="aml" element={<AML />}/>
          <Route path="t&c" element={<TermsConditions />}/>
       </Routes> 
    </BrowserRouter>
  </StrictMode>
);
