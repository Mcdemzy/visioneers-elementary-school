import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Admission from "./Pages/Admission/Admission";
import Academics from "./Pages/Academics/Academics";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/academics" element={<Academics />} />
      </Routes>
    </Router>
  );
};

export default App;
