import Link from "next/link";

export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto flex max-w-2xl px-4 pb-4">
        <div className="w-full rounded-2xl border border-white/70 bg-white/80 p-3 shadow-[0_18px_45px_-20px_rgba(20,32,27,0.7)] backdrop-blur">
          <Link
            href="https://example.com/app-download"
            className="flex w-full items-center justify-center rounded-xl bg-[#14201b] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0f8b6a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d9822b]"
          >
            Open Totalee Halal App
          </Link>
        </div>
      </div>
    </div>
  );
}
