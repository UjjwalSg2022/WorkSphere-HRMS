import { Bell, LayoutDashboard, Users, Building2, CalendarClock, PlaneTakeoff, DollarSign, UserCircle, LogOut, Megaphone, Settings, Menu } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useMemo, useState } from 'react';
import GlobalSearch from './GlobalSearch';

const navItems = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { label: 'Employees', icon: Users, path: '/employees' },
  { label: 'Departments', icon: Building2, path: '/departments' },
  { label: 'Attendance', icon: CalendarClock, path: '/attendance' },
  { label: 'Leaves', icon: PlaneTakeoff, path: '/leaves' },
  { label: 'Payroll', icon: DollarSign, path: '/payroll' },
  { label: 'Announcements', icon: Megaphone, path: '/announcements' },
  { label: 'Settings', icon: Settings, path: '/settings' },
  { label: 'Profile', icon: UserCircle, path: '/profile' }
];

export default function Layout({ children, user, setUser }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const searchItems = useMemo(() => [
    { label: 'Engineering Team', type: 'Employee' },
    { label: 'Operations', type: 'Department' },
    { label: 'Annual Leave', type: 'Leave' },
    { label: 'Payroll July', type: 'Payroll' },
    { label: 'Quarterly Update', type: 'Announcement' }
  ], []);

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.16),_transparent_30%),linear-gradient(135deg,#09090B_0%,#111114_100%)] text-text">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col border-r border-zinc-800/80 bg-zinc-950/80 p-6 backdrop-blur-xl md:flex">
          <div className="mb-8">
            <h1 className="text-2xl font-semibold tracking-wide">WorkSphere</h1>
            <p className="mt-1 text-sm text-zinc-400">Enterprise HROS</p>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path} className={`flex items-center rounded-2xl px-4 py-3 transition ${active ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-950/40' : 'text-zinc-300 hover:bg-zinc-800'}`}>
                  <Icon className="mr-3 h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4">
            <p className="text-sm text-zinc-400">Signed in as</p>
            <p className="font-medium">{user?.name || 'Admin'}</p>
            <p className="text-sm text-zinc-500">{user?.role || 'Employee'}</p>
          </div>
        </aside>

        <main className="flex-1">
          <header className="border-b border-zinc-800/80 bg-zinc-950/80 px-4 py-4 backdrop-blur-xl sm:px-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <button className="rounded-2xl border border-zinc-800 bg-zinc-900 p-2 md:hidden" onClick={() => setMobileOpen((v) => !v)}>
                  <Menu className="h-5 w-5" />
                </button>
                <div>
                  <p className="text-sm text-zinc-400">Good morning</p>
                  <h2 className="text-xl font-semibold">{user?.name || 'WorkSphere'}</h2>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 lg:max-w-2xl lg:flex-row lg:items-center lg:justify-end">
                <GlobalSearch items={searchItems} />
                <div className="flex items-center gap-2">
                  <button className="rounded-2xl border border-zinc-800 bg-zinc-900 p-2.5">
                    <Bell className="h-4 w-4" />
                  </button>
                  <button onClick={logout} className="flex items-center rounded-2xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm hover:bg-zinc-800">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </header>
          {mobileOpen && <div className="border-b border-zinc-800 bg-zinc-950 p-4 md:hidden">
            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = location.pathname === item.path;
                return (<Link key={item.path} to={item.path} onClick={() => setMobileOpen(false)} className={`flex items-center rounded-2xl px-4 py-3 text-sm ${active ? 'bg-indigo-600 text-white' : 'text-zinc-300 bg-zinc-900'}`}><Icon className="mr-3 h-4 w-4" />{item.label}</Link>);
              })}
            </nav>
          </div>}
          <div className="p-4 sm:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
