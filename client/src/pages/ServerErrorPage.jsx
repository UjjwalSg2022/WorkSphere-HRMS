export default function ServerErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-6 text-center">
      <div className="max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-400">500</p>
        <h1 className="mt-3 text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-3 text-sm text-zinc-400">Our team has been notified. Please try again shortly.</p>
      </div>
    </div>
  );
}
