import { Activity, Users, UserCheck, CalendarDays, Plane, Sparkles, Briefcase, Clock3, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Total Employees', value: '248', icon: Users, accent: 'from-indigo-600 to-violet-500' },
  { label: 'Active Employees', value: '231', icon: UserCheck, accent: 'from-emerald-600 to-lime-500' },
  { label: 'Attendance Today', value: '189', icon: CalendarDays, accent: 'from-amber-500 to-orange-500' },
  { label: 'Pending Leave', value: '12', icon: Plane, accent: 'from-rose-500 to-pink-500' }
];

export default function DashboardPage({ user }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="rounded-[28px] border border-zinc-800/80 bg-gradient-to-br from-zinc-900/95 via-zinc-950/95 to-zinc-900/95 p-6 shadow-[0_25px_80px_rgba(0,0,0,0.28)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">Operations Overview</p>
            <h1 className="mt-2 text-3xl font-semibold">Welcome back, {user?.name || 'Admin'}.</h1>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">A polished command center for workforce, payroll, attendance, and approvals.</p>
          </div>
          <div className="rounded-2xl border border-emerald-900/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
            <div className="flex items-center"><Sparkles className="mr-2 h-4 w-4" /> Premium workspace ready</div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="rounded-[24px] border border-zinc-800/80 bg-zinc-900/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.accent}`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-sm text-zinc-400">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.75fr]">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">People intelligence</h2>
              <p className="text-sm text-zinc-400">Attendance, compensation, and team momentum</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-300">July 2026</div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4"><p className="text-sm text-zinc-400">Monthly Payroll</p><p className="mt-2 text-2xl font-semibold">$184K</p></div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4"><p className="text-sm text-zinc-400">Dept Count</p><p className="mt-2 text-2xl font-semibold">8</p></div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/80 p-4"><p className="text-sm text-zinc-400">Birthdays</p><p className="mt-2 text-2xl font-semibold">4</p></div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
              <div className="flex items-center text-sm text-zinc-400"><TrendingUp className="mr-2 h-4 w-4 text-emerald-400" /> Growth trend</div>
              <p className="mt-3 text-3xl font-semibold">+12.4%</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
              <div className="flex items-center text-sm text-zinc-400"><Clock3 className="mr-2 h-4 w-4 text-indigo-400" /> Working hours</div>
              <p className="mt-3 text-3xl font-semibold">7.8h avg</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
            <div className="mb-4 flex items-center"><Activity className="mr-2 h-5 w-5 text-indigo-400" /> Recent Activity</div>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-3">New employee onboarding completed.</li>
              <li className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-3">Leave approved for Engineering.</li>
              <li className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-3">Payroll batch generated successfully.</li>
            </ul>
          </div>
          <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center"><Briefcase className="mr-2 h-5 w-5 text-emerald-400" /> Quick actions</div>
              <ArrowRight className="h-4 w-4 text-zinc-500" />
            </div>
            <div className="space-y-3">
              <button className="flex w-full items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-300"><span>Add employee</span><ArrowRight className="h-4 w-4" /></button>
              <button className="flex w-full items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-300"><span>Review leaves</span><ArrowRight className="h-4 w-4" /></button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
