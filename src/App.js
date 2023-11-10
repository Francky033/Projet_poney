
import Home from "./Pages/Home";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Poneys from "./Pages/Poneys";
import Propos from "./A_Propos";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poneys" element={<Poneys />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/propos" element={<Propos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;