export default function ProfilePage({ user }) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
        <h1 className="text-2xl font-semibold">Profile</h1>
        <p className="mt-2 text-sm text-zinc-400">Manage your account, password, and personal HR activity.</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <div className="mb-4 h-20 w-20 rounded-full bg-indigo-600" />
          <h2 className="text-xl font-semibold">{user?.name || 'Employee'}</h2>
          <p className="text-sm text-zinc-400">{user?.role || 'Employee'}</p>
          <p className="mt-2 text-sm text-zinc-500">{user?.email || 'email@company.com'}</p>
        </div>
        <div className="space-y-4 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">Personal Activity</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4"><p className="text-sm text-zinc-400">Attendance</p><p className="mt-2 text-xl font-semibold">94%</p></div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4"><p className="text-sm text-zinc-400">Leave Balance</p><p className="mt-2 text-xl font-semibold">8 Days</p></div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4"><p className="text-sm text-zinc-400">Payslips</p><p className="mt-2 text-xl font-semibold">6</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
