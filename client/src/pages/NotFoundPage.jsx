export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-6 text-center">
      <div className="max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-400">404</p>
        <h1 className="mt-3 text-3xl font-semibold">Page not found</h1>
        <p className="mt-3 text-sm text-zinc-400">The page you were looking for is unavailable or has moved.</p>
      </div>
    </div>
  );
}
