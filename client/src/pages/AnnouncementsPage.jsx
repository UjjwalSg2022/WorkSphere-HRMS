import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([]);
  const [form, setForm] = useState({ title: '', body: '', category: 'Company', pinned: false });

  const load = async () => {
    const res = await axios.get('/announcements');
    setAnnouncements(res.data);
  };

  useEffect(() => { load(); }, []);

  const submit = async (event) => {
    event.preventDefault();
    await axios.post('/announcements', form);
    setForm({ title: '', body: '', category: 'Company', pinned: false });
    load();
  };

  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6">
        <h1 className="text-2xl font-semibold">Announcements</h1>
        <p className="mt-2 text-sm text-zinc-400">Share updates, pin important company messages, and keep everyone aligned.</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <form onSubmit={submit} className="space-y-4 rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-xl font-semibold">Create Announcement</h2>
          <input className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          <textarea className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Message" value={form.body} onChange={(e) => setForm({ ...form, body: e.target.value })} />
          <select className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
            <option>Company</option><option>HR</option><option>Security</option>
          </select>
          <label className="flex items-center gap-2 text-sm text-zinc-400">
            <input type="checkbox" checked={form.pinned} onChange={(e) => setForm({ ...form, pinned: e.target.checked })} />
            Pin announcement
          </label>
          <button className="rounded-2xl bg-indigo-600 px-4 py-3 font-medium text-white">Publish</button>
        </form>
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <div key={announcement._id} className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-indigo-400">{announcement.category}</p>
                  <h3 className="mt-1 text-lg font-semibold">{announcement.title}</h3>
                </div>
                {announcement.pinned && <span className="rounded-full bg-emerald-600/20 px-3 py-1 text-sm text-emerald-300">Pinned</span>}
              </div>
              <p className="mt-3 text-sm text-zinc-400">{announcement.body}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
