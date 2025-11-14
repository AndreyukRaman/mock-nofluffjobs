import './App.scss'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import JobPage from "./pages/JobPage/JobPage";

export default function App() {
    return (
        <div className="app">
            <Navbar />

            <Routes>
                <Route path="/" element={<JobPage />} />

            </Routes>
        </div>
    );
}