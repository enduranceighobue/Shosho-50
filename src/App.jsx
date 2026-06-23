import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TributesPage from "./pages/TributesPage";
import TributeDetails from "./pages/TributeDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tributes" element={<TributesPage />} />
        <Route path="/tribute/:id" element={<TributeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;