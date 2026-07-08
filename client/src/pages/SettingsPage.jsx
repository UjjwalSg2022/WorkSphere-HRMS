import { motion } from 'framer-motion';

export default function SettingsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
        <h1 className="text-2xl font-semibold">Company Settings</h1>
        <p className="mt-2 text-sm text-zinc-400">Manage profile, hours, theme, and company preferences.</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-lg font-semibold">Company Profile</h2>
          <div className="mt-4 space-y-3">
            <input className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Company Name" />
            <input className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Website" />
            <textarea className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Company Description" />
          </div>
        </div>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="text-lg font-semibold">Office Timings</h2>
          <div className="mt-4 space-y-3">
            <input className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Working Hours" />
            <input className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Time Zone" />
            <input className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3" placeholder="Holiday Calendar" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
