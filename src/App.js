import { Route, Routes } from "react-router-dom";
import "./App.css";
import SolutionsPage from "./pages/SolutionsPage/SolutionsPage.jsx";
import TechnologyPage from "./pages/TechnologyPage/TechnologyPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import CareersPage from "./pages/CareersPage/CareersPage.jsx";
import ResourcesPage from "./pages/ResourcesPage/ResourcesPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import { Loyaut } from "./components/Layout/Layout.jsx";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Loyaut />}>
        <Route index element={<SolutionsPage />} />
        <Route path="technology" element={<TechnologyPage/>} />
        <Route path="about" element={<AboutPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="contact" element={<ContactPage />} />      
      </Route>

    </Routes>
  );
}

export default App;
