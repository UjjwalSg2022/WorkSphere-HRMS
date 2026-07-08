import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';

export default function GlobalSearch({ items = [] }) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const value = query.toLowerCase();
    if (!value) return [];
    return items.filter((item) => item.label.toLowerCase().includes(value) || item.type.toLowerCase().includes(value));
  }, [items, query]);

  return (
    <div className="relative w-full max-w-md">
      <div className="flex items-center rounded-2xl border border-zinc-800 bg-zinc-900/70 px-3 py-2.5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
        <Search className="mr-2 h-4 w-4 text-zinc-500" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search employees, departments, payroll..." className="w-full bg-transparent text-sm outline-none" />
      </div>
      {results.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-20 mt-2 rounded-2xl border border-zinc-800 bg-zinc-950 p-2 shadow-2xl">
          {results.map((item) => (
            <div key={`${item.type}-${item.label}`} className="rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900">
              <div className="font-medium">{item.label}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">{item.type}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
