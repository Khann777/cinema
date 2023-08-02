import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";

import "./App.css";
import theme from "./theme";
import store from "./store";
import { Route, Routes } from "react-router-dom";
import PremierePage from "./pages/PremierePage/PremierePage";
import TopFilmsPage from "./pages/TopFilmsPage/TopFilmsPage";
import AllFilmsPage from "./pages/AllFilmsPage/AllFilmsPage";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div>
          <Routes>
            <Route path="/" element={<AllFilmsPage />} />
            <Route path="/premiere" element={<PremierePage />} />
            <Route path="/top" element={<TopFilmsPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
