import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminPanel from "./pages/AdminPanel";
import InstructorPanel from "./pages/InstructorPanel";
import LecturePanel from "./pages/lecturePanel";
import CoursesPanel from "./pages/coursesPanel";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/courses" element={<CoursesPanel />} />
        <Route path="/instructor" element={<InstructorPanel />} />
        <Route path="/lectures" element={<LecturePanel />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
