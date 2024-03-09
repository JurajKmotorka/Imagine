import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Index";
import About from "./pages/AboutPage/index";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/nekamdopice" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/contact" element={"Contact"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
