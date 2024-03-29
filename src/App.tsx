import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Index";

function App() {
  return (
    <div className="md:h-screen md:p-2">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={"bout"} />
          <Route path="/contact" element={"Contact"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
