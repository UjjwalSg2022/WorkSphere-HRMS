export default function EmptyState({ title, description }) {
  return (
    <div className="rounded-3xl border border-dashed border-zinc-800 bg-zinc-900/60 p-8 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-zinc-400">{description}</p>
    </div>
  );
}
