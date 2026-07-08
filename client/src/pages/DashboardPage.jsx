import { Activity, Users, UserCheck, CalendarDays, Plane, Wallet, Building2, Sparkles } from 'lucide-react';

const stats = [
  { label: 'Total Employees', value: '248', icon: Users, accent: 'bg-indigo-600' },
  { label: 'Active Employees', value: '231', icon: UserCheck, accent: 'bg-emerald-600' },
  { label: 'Attendance Today', value: '189', icon: CalendarDays, accent: 'bg-amber-600' },
  { label: 'Pending Leave', value: '12', icon: Plane, accent: 'bg-rose-600' }
];

export default function DashboardPage({ user }) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">Operations Overview</p>
            <h1 className="mt-2 text-3xl font-semibold">Welcome back, {user?.name || 'Admin'}.</h1>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">A modern command center for your workforce, payroll, attendance, and approvals.</p>
          </div>
          <div className="rounded-2xl border border-emerald-900/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
            <div className="flex items-center"><Sparkles className="mr-2 h-4 w-4" /> Phase 1 complete</div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${stat.accent}`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm text-zinc-400">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Payroll Snapshot</h2>
              <p className="text-sm text-zinc-400">Monthly payroll and departmental coverage</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-300">July 2026</div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4"><p className="text-sm text-zinc-400">Monthly Payroll</p><p className="mt-2 text-2xl font-semibold">$184K</p></div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4"><p className="text-sm text-zinc-400">Department Count</p><p className="mt-2 text-2xl font-semibold">8</p></div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4"><p className="text-sm text-zinc-400">Upcoming Birthdays</p><p className="mt-2 text-2xl font-semibold">4</p></div>
          </div>
        </div>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-4 flex items-center"><Activity className="mr-2 h-5 w-5 text-indigo-400" /> Recent Activities</div>
          <ul className="space-y-3 text-sm text-zinc-400">
            <li className="rounded-xl border border-zinc-800 bg-zinc-950 p-3">New employee onboarding completed.</li>
            <li className="rounded-xl border border-zinc-800 bg-zinc-950 p-3">Leave request approved for Engineering.</li>
            <li className="rounded-xl border border-zinc-800 bg-zinc-950 p-3">Payroll batch generated successfully.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
