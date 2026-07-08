import { useEffect, useState } from 'react';
import axios from 'axios';
import { Plus, Search } from 'lucide-react';

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ employeeId: '', fullName: '', email: '', department: '', designation: '', salary: '', employmentStatus: 'Active' });

  const load = async () => {
    const res = await axios.get('/employees');
    setEmployees(res.data);
  };

  useEffect(() => { load(); }, []);

  const submit = async (event) => {
    event.preventDefault();
    await axios.post('/employees', { ...form, salary: Number(form.salary) });
    setForm({ employeeId: '', fullName: '', email: '', department: '', designation: '', salary: '', employmentStatus: 'Active' });
    load();
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Employee Management</h1>
            <p className="text-sm text-zinc-400">Create, search and manage employees across departments.</p>
          </div>
          <div className="flex items-center rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2">
            <Search className="mr-2 h-4 w-4 text-zinc-500" />
            <input className="bg-transparent text-sm outline-none" placeholder="Search employees" />
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <form onSubmit={submit} className="space-y-4 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">Add Employee</h2>
          {['employeeId', 'fullName', 'email', 'department', 'designation', 'salary'].map((field) => (
            <input key={field} className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder={field} value={form[field]} onChange={(e) => setForm({ ...form, [field]: e.target.value })} />
          ))}
          <select className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3" value={form.employmentStatus} onChange={(e) => setForm({ ...form, employmentStatus: e.target.value })}>
            <option value="Active">Active</option>
            <option value="On Leave">On Leave</option>
            <option value="Inactive">Inactive</option>
          </select>
          <button className="flex items-center rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white"><Plus className="mr-2 h-4 w-4" /> Save Employee</button>
        </form>

        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
          <div className="border-b border-zinc-800 px-6 py-4">
            <h2 className="text-xl font-semibold">Employee Directory</h2>
          </div>
          <div className="divide-y divide-zinc-800">
            {employees.map((employee) => (
              <div key={employee._id} className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="font-medium">{employee.fullName}</p>
                  <p className="text-sm text-zinc-400">{employee.department} • {employee.designation}</p>
                </div>
                <div className="text-right text-sm text-zinc-400">
                  <p>{employee.employeeId}</p>
                  <p>{employee.employmentStatus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
