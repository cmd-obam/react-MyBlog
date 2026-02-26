import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeWrapper from "./assets/components/common/ThemeWrapper.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./assets/context/AuthContext.jsx";
import GlobalAlert from "./assets/components/common/GlobalAlert.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeWrapper>
        <AuthProvider>
          <App />
          <GlobalAlert />
        </AuthProvider>
      </ThemeWrapper>
    </BrowserRouter>
  </StrictMode>,
);
