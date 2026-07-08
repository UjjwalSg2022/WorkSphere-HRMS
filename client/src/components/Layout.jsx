import { LayoutDashboard, Users, Building2, CalendarClock, PlaneTakeoff, DollarSign, UserCircle, LogOut } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { label: 'Employees', icon: Users, path: '/employees' },
  { label: 'Departments', icon: Building2, path: '/departments' },
  { label: 'Attendance', icon: CalendarClock, path: '/attendance' },
  { label: 'Leaves', icon: PlaneTakeoff, path: '/leaves' },
  { label: 'Payroll', icon: DollarSign, path: '/payroll' },
  { label: 'Profile', icon: UserCircle, path: '/profile' }
];

export default function Layout({ children, user, setUser }) {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col border-r border-zinc-800 bg-zinc-950/80 p-6 md:flex">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold tracking-wide">WorkSphere</h1>
            <p className="mt-1 text-sm text-zinc-400">HR Management Suite</p>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path} className={`flex items-center rounded-xl px-4 py-3 transition ${active ? 'bg-indigo-600 text-white' : 'text-zinc-300 hover:bg-zinc-800'}`}>
                  <Icon className="mr-3 h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
            <p className="text-sm text-zinc-400">Signed in as</p>
            <p className="font-medium">{user?.name || 'Admin'}</p>
            <p className="text-sm text-zinc-500">{user?.role || 'Employee'}</p>
          </div>
        </aside>

        <main className="flex-1">
          <header className="border-b border-zinc-800 bg-zinc-950/70 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Good morning</p>
                <h2 className="text-xl font-semibold">{user?.name || 'WorkSphere'}</h2>
              </div>
              <button onClick={logout} className="flex items-center rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm hover:bg-zinc-800">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </button>
            </div>
          </header>
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
