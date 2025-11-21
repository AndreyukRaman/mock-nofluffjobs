import "./App.scss";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import JobLayout from "./layouts/JobLayout";

import MainPage from "./pages/MainPage/MainPage";
import JobPage from "./pages/JobPage/JobPage";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <MainPage />
          </MainLayout>
        }
      />
      <Route
        path="/job/:id"
        element={
          <JobLayout>
            <JobPage />
          </JobLayout>
        }
      />
    </Routes>
  );
}
