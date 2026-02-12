"use client";

import { useEffect, useState } from "react";
import { appLinks } from "@/lib/seo";

type StickyCTAProps = {
  mode?: "hub" | "app";
  targetId?: string;
};

function getStoreLink() {
  if (typeof navigator === "undefined") {
    return appLinks.appStore;
  }
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("android")) {
    return appLinks.playStore;
  }
  if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) {
    return appLinks.appStore;
  }
  return appLinks.appStore;
}

export default function StickyCTA({
  mode = "app",
  targetId = "restaurants",
}: StickyCTAProps) {
  const [href, setHref] = useState(
    mode === "hub" ? `#${targetId}` : appLinks.appStore
  );

  useEffect(() => {
    if (mode === "hub") {
      setHref(`#${targetId}`);
      return;
    }
    setHref(getStoreLink());
  }, [mode, targetId]);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto flex w-full max-w-6xl px-5 pb-4 sm:px-8">
        <div className="w-full rounded-2xl border border-white/70 bg-white/92 p-3 shadow-[0_18px_45px_-20px_rgba(15,47,36,0.65)] backdrop-blur">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)]">
                Verified halal-only &bull; One-tap order
              </p>
              <p className="text-sm font-semibold text-[color:var(--brand-ink)]">
                Open Totalee Halal App
              </p>
            </div>
            <a
              href={href}
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[color:var(--brand-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)]"
            >
              Open Totalee Halal App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
