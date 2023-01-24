import { BrowserRouter, Routes, Route } from "react-router-dom";
import InitialPage from "./pages/InitialPage/InitialPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import "./styles/stylesGlobals.scss";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
