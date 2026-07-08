import { useEffect, useState } from 'react';
import axios from 'axios';

export default function LeavesPage() {
  const [leaves, setLeaves] = useState([]);
  const [form, setForm] = useState({ employee: '', leaveType: 'Casual', startDate: '', endDate: '', reason: '' });

  const load = async () => {
    const res = await axios.get('/leaves');
    setLeaves(res.data);
  };

  useEffect(() => { load(); }, []);

  const submit = async (event) => {
    event.preventDefault();
    await axios.post('/leaves', form);
    setForm({ employee: '', leaveType: 'Casual', startDate: '', endDate: '', reason: '' });
    load();
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
        <h1 className="text-2xl font-semibold">Leave Management</h1>
        <p className="mt-2 text-sm text-zinc-400">Handle requests, approvals, balances, and history.</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <form onSubmit={submit} className="space-y-4 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">Request Leave</h2>
          <input className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Employee ID" value={form.employee} onChange={(e) => setForm({ ...form, employee: e.target.value })} />
          <select className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3" value={form.leaveType} onChange={(e) => setForm({ ...form, leaveType: e.target.value })}>
            <option>Casual</option><option>Sick</option><option>Earned</option><option>Unpaid</option>
          </select>
          <input type="date" className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
          <input type="date" className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} />
          <textarea className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Reason" value={form.reason} onChange={(e) => setForm({ ...form, reason: e.target.value })} />
          <button className="rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white">Submit Leave</button>
        </form>
        <div className="space-y-4">
          {leaves.map((leave) => (
            <div key={leave._id} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{leave.leaveType}</h3>
                  <p className="text-sm text-zinc-400">{leave.startDate?.slice(0, 10)} → {leave.endDate?.slice(0, 10)}</p>
                </div>
                <span className="rounded-full bg-amber-600/20 px-3 py-1 text-sm text-amber-300">{leave.status}</span>
              </div>
              <p className="mt-3 text-sm text-zinc-400">Reason: {leave.reason || '—'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
