import { useEffect, useState } from 'react';
import axios from 'axios';

export default function PayrollPage() {
  const [payrolls, setPayrolls] = useState([]);
  const [form, setForm] = useState({ employee: '', month: '', basicSalary: '', hra: '', bonus: '', pf: '', tax: '', otherDeductions: '', netSalary: '' });

  const load = async () => {
    const res = await axios.get('/payroll');
    setPayrolls(res.data);
  };

  useEffect(() => { load(); }, []);

  const submit = async (event) => {
    event.preventDefault();
    await axios.post('/payroll', { ...form, basicSalary: Number(form.basicSalary), hra: Number(form.hra), bonus: Number(form.bonus), pf: Number(form.pf), tax: Number(form.tax), otherDeductions: Number(form.otherDeductions), netSalary: Number(form.netSalary) });
    setForm({ employee: '', month: '', basicSalary: '', hra: '', bonus: '', pf: '', tax: '', otherDeductions: '', netSalary: '' });
    load();
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
        <h1 className="text-2xl font-semibold">Payroll</h1>
        <p className="mt-2 text-sm text-zinc-400">Create salary structures, process payroll, and manage payslips.</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-[0.96fr_1.04fr]">
        <form onSubmit={submit} className="space-y-4 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">Generate Payslip</h2>
          <input className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Employee ID" value={form.employee} onChange={(e) => setForm({ ...form, employee: e.target.value })} />
          <input className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Month" value={form.month} onChange={(e) => setForm({ ...form, month: e.target.value })} />
          {['basicSalary', 'hra', 'bonus', 'pf', 'tax', 'otherDeductions', 'netSalary'].map((field) => (
            <input key={field} type="number" className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder={field} value={form[field]} onChange={(e) => setForm({ ...form, [field]: e.target.value })} />
          ))}
          <button className="rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white">Process Payroll</button>
        </form>
        <div className="space-y-4">
          {payrolls.map((entry) => (
            <div key={entry._id} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{entry.employee?.fullName || 'Employee'}</h3>
                  <p className="text-sm text-zinc-400">{entry.month}</p>
                </div>
                <span className="rounded-full bg-emerald-600/20 px-3 py-1 text-sm text-emerald-300">{entry.status}</span>
              </div>
              <p className="mt-3 text-sm text-zinc-400">Net Salary: ${entry.netSalary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
