import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import MainLayout from "./assets/components/layout/MainLayout";
import MainPage from "./assets/pages/MainPage";
import WritePage from "./assets/pages/WritePage";
import LoginPage from "./assets/pages/LoginPage";
import CardDetailPage from "./assets/pages/CardDetailPage";
import { lightTheme, darkTheme } from "./assets/styles/theme";
import GlobalStyle from "./assets/styles/GlobalStyles";

function App() {
  const [mode, setMode] = useState("light");
  const theme = mode === "light" ? lightTheme : darkTheme;
  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route element={<MainLayout onToggleTheme={toggleTheme} mode={mode} />}>
          <Route path="/learn/:id" element={<CardDetailPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
