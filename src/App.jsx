import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../trial/dashboard/Dashboard";
import AuthLayout from "../auth/AuthLayout";
import HomePage from "../landing/HomePage";
import UserProfile from "../user/userProfile/UserProfile";
import LearningAssessment from "../assessment/course/LearningAssessment";
import CourseChatWindow from "../chat/CourseChatWindow";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<HomePage />} />

        {/* Auth Pages */}
        <Route path="/auth/login" element={<AuthLayout type="login" />} />
        <Route path="/auth/signup" element={<AuthLayout type="signup" />} />

        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* User Profile Page */}
        <Route path="/profile" element={<UserProfile />} />

        {/* Chat Page */}
        <Route path="/chat" element={<CourseChatWindow />} />

        {/* Learning Assessment Page */}
        <Route path="/assessment" element={<LearningAssessment />} />

        {/* Course Chat Window */}
        <Route path="/learning/courses/:courseId/chat" element={<CourseChatWindow />} />
      </Routes>
    </Router>
  );
}

export default App;