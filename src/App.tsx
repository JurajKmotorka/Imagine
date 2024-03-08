import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={"About"} />
          <Route path="/contact" element={"Contact"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
