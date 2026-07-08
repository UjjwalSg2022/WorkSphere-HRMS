import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export default function LoginPage({ onAuth }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('/auth/login', form);
      localStorage.setItem('token', res.data.token);
      onAuth?.(res.data.user);
      toast.success('Signed in successfully');
      navigate('/');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-950/90 p-8 shadow-2xl">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-400">WorkSphere HRMS</p>
          <h1 className="mt-2 text-3xl font-semibold">Welcome back</h1>
          <p className="mt-2 text-sm text-zinc-400">Secure access to your people operations.</p>
        </div>
        <form onSubmit={submit} className="space-y-4">
          <input className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input type="password" className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3" placeholder="Password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          <button className="w-full rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white transition hover:bg-indigo-500">Sign In</button>
        </form>
      </div>
    </div>
  );
}
