import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import EmployeesPage from './pages/EmployeesPage';
import DepartmentsPage from './pages/DepartmentsPage';
import AttendancePage from './pages/AttendancePage';
import LeavesPage from './pages/LeavesPage';
import PayrollPage from './pages/PayrollPage';
import ProfilePage from './pages/ProfilePage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';
import ForbiddenPage from './pages/ForbiddenPage';
import ServerErrorPage from './pages/ServerErrorPage';
import Layout from './components/Layout';

axios.defaults.baseURL = '/api';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    axios.get('/auth/me', { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setUser(res.data.user))
      .catch(() => {
        localStorage.removeItem('token');
        setUser(null);
      });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/login" element={<LoginPage onAuth={setUser} />} />
        <Route path="/forbidden" element={<ForbiddenPage />} />
        <Route path="/server-error" element={<ServerErrorPage />} />
        <Route path="/" element={<ProtectedRoute><Layout user={user} setUser={setUser}><motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><DashboardPage user={user} /></motion.div></Layout></ProtectedRoute>} />
        <Route path="/employees" element={<ProtectedRoute><Layout user={user} setUser={setUser}><motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><EmployeesPage /></motion.div></Layout></ProtectedRoute>} />
        <Route path="/departments" element={<ProtectedRoute><Layout user={user} setUser={setUser}><motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><DepartmentsPage /></motion.div></Layout></ProtectedRoute>} />
        <Route path="/attendance" element={<ProtectedRoute><Layout user={user} setUser={setUser}><motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><AttendancePage /></motion.div></Layout></ProtectedRoute>} />
        <Route path="/leaves" element={<ProtectedRoute><Layout user={user} setUser={setUser}><motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><LeavesPage /></motion.div></Layout></ProtectedRoute>} />
        <Route path="/payroll" element={<ProtectedRoute><Layout user={user} setUser={setUser}><motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><PayrollPage /></motion.div></Layout></ProtectedRoute>} />
        <Route path="/announcements" element={<ProtectedRoute><Layout user={user} setUser={setUser}><motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><AnnouncementsPage /></motion.div></Layout></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Layout user={user} setUser={setUser}><motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><SettingsPage /></motion.div></Layout></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Layout user={user} setUser={setUser}><motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}><ProfilePage user={user} /></motion.div></Layout></ProtectedRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
