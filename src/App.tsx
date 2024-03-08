import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage/Index";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={"About"} />
          <Route path="/contact" element={"Contact"} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
