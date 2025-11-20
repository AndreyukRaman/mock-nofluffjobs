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
        <Route path="/" element={<JobPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </div>
  );
}
