import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AttendancePage() {
  const [records, setRecords] = useState([]);
  const [form, setForm] = useState({ employee: '', date: '', checkIn: '', checkOut: '', status: 'Present' });

  const load = async () => {
    const res = await axios.get('/attendance');
    setRecords(res.data);
  };

  useEffect(() => { load(); }, []);

  const submit = async (event) => {
    event.preventDefault();
    await axios.post('/attendance', form);
    setForm({ employee: '', date: '', checkIn: '', checkOut: '', status: 'Present' });
    load();
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
        <h1 className="text-2xl font-semibold">Attendance</h1>
        <p className="mt-2 text-sm text-zinc-400">Track live check-ins, work hours, and attendance reports.</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <form onSubmit={submit} className="space-y-4 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">Log Attendance</h2>
          <input className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Employee ID" value={form.employee} onChange={(e) => setForm({ ...form, employee: e.target.value })} />
          <input type="date" className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
          <input className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Check In" value={form.checkIn} onChange={(e) => setForm({ ...form, checkIn: e.target.value })} />
          <input className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Check Out" value={form.checkOut} onChange={(e) => setForm({ ...form, checkOut: e.target.value })} />
          <button className="rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white">Save Record</button>
        </form>
        <div className="space-y-4">
          {records.map((record) => (
            <div key={record._id} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{record.employee?.fullName || 'Employee'}</h3>
                  <p className="text-sm text-zinc-400">{record.date?.slice(0, 10)}</p>
                </div>
                <span className="rounded-full bg-emerald-600/20 px-3 py-1 text-sm text-emerald-300">{record.status}</span>
              </div>
              <p className="mt-3 text-sm text-zinc-400">Check in: {record.checkIn || '—'} • Check out: {record.checkOut || '—'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
