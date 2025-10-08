import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/About";
import { HomePage } from "./pages/Home";
import { RegisterPage } from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App