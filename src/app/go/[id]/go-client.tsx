"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const appDownloadUrl = "https://example.com/app-download";

export default function GoClient({ restaurantId }: { restaurantId: string }) {
  const [showFallback, setShowFallback] = useState(false);
  const deepLink = useMemo(
    () => `totaleehalal://restaurant/${restaurantId}`,
    [restaurantId]
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setShowFallback(true), 800);
    window.location.href = deepLink;
    return () => window.clearTimeout(timer);
  }, [deepLink]);

  return (
    <div className="min-h-screen px-5 py-16">
      <div className="mx-auto flex w-full max-w-lg flex-col gap-6 rounded-3xl border border-white/70 bg-white/85 p-8 text-center shadow-[0_20px_50px_-30px_rgba(16,24,20,0.65)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2a5a47]">
          Open in app
        </p>
        <h1 className="text-3xl font-semibold text-[#101814]">
          Opening the app...
        </h1>
        <p className="text-sm text-[#516158]">
          If nothing happens, tap below to download or open Totalee Halal.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={appDownloadUrl}
            className={`inline-flex items-center justify-center rounded-full bg-[#0f2f24] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#2a5a47] ${
              showFallback ? "opacity-100" : "pointer-events-none opacity-60"
            }`}
          >
            Download / Open Totalee Halal
          </a>
          <Link
            href="/hounslow-deals"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#101814] transition hover:text-[#2a5a47]"
          >
            Back to Hounslow deals
          </Link>
        </div>
      </div>
    </div>
  );
}
