import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    <Routes>
      <Route path="/login" element={<LoginPage onAuth={setUser} />} />
      <Route path="/" element={<ProtectedRoute><Layout user={user} setUser={setUser}><DashboardPage user={user} /></Layout></ProtectedRoute>} />
      <Route path="/employees" element={<ProtectedRoute><Layout user={user} setUser={setUser}><EmployeesPage /></Layout></ProtectedRoute>} />
      <Route path="/departments" element={<ProtectedRoute><Layout user={user} setUser={setUser}><DepartmentsPage /></Layout></ProtectedRoute>} />
      <Route path="/attendance" element={<ProtectedRoute><Layout user={user} setUser={setUser}><AttendancePage /></Layout></ProtectedRoute>} />
      <Route path="/leaves" element={<ProtectedRoute><Layout user={user} setUser={setUser}><LeavesPage /></Layout></ProtectedRoute>} />
      <Route path="/payroll" element={<ProtectedRoute><Layout user={user} setUser={setUser}><PayrollPage /></Layout></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Layout user={user} setUser={setUser}><ProfilePage user={user} /></Layout></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
