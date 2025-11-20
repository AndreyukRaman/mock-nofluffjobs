import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import JobPage from "./pages/JobPage/JobPage";
import MainPage from "./pages/MainPage/MainPage";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        {/* Главная */}
        <Route path="/" element={<MainPage />} />

        {/* Динамическая страница вакансии */}
        <Route path="/job/:id" element={<JobPage />} />
      </Routes>
    </div>
  );
}
