import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DepartmentsPage() {
  const [departments, setDepartments] = useState([]);
  const [form, setForm] = useState({ name: '', head: '', description: '' });

  const load = async () => {
    const res = await axios.get('/departments');
    setDepartments(res.data);
  };

  useEffect(() => { load(); }, []);

  const submit = async (event) => {
    event.preventDefault();
    await axios.post('/departments', form);
    setForm({ name: '', head: '', description: '' });
    load();
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
        <h1 className="text-2xl font-semibold">Departments</h1>
        <p className="mt-2 text-sm text-zinc-400">Track team divisions, heads, and coverage.</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <form onSubmit={submit} className="space-y-4 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">Create Department</h2>
          <input className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Department Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Department Head" value={form.head} onChange={(e) => setForm({ ...form, head: e.target.value })} />
          <textarea className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          <button className="rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white">Save Department</button>
        </form>
        <div className="grid gap-4">
          {departments.map((department) => (
            <div key={department._id} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{department.name}</h3>
                <span className="rounded-full bg-indigo-600/20 px-3 py-1 text-sm text-indigo-300">{department.totalEmployees} employees</span>
              </div>
              <p className="mt-3 text-sm text-zinc-400">Head: {department.head || 'Unassigned'}</p>
              <p className="mt-2 text-sm text-zinc-500">{department.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
