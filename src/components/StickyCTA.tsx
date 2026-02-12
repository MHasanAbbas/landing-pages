"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { appLinks } from "@/lib/seo";

type StickyCTAProps = {
  mode?: "hub" | "list" | "app";
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
    mode === "hub" || mode === "list" ? `#${targetId}` : appLinks.appStore
  );

  useEffect(() => {
    if (mode === "hub" || mode === "list") {
      setHref(`#${targetId}`);
      return;
    }
    setHref(getStoreLink());
  }, [mode, targetId]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (mode !== "list") {
      return;
    }
    if (typeof window === "undefined") {
      return;
    }
    if (window.scrollY < 80) {
      event.preventDefault();
      window.location.href = "/go/app";
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto flex w-full max-w-6xl px-4 pb-3 sm:px-8 sm:pb-4">
        <div className="w-full rounded-2xl border border-white/70 bg-[linear-gradient(135deg,_rgba(255,255,255,0.96)_0%,_rgba(247,242,232,0.92)_100%)] p-3 shadow-[0_20px_50px_-22px_rgba(15,47,36,0.65)] backdrop-blur">
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
              onClick={handleClick}
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[color:var(--brand-secondary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--brand-ring)]"
            >
              Open Totalee Halal App
            </a>
          </div>
          {mode === "hub" ? (
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <a
                href="/hounslow/deals"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--brand-primary)]/15 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)] transition hover:border-transparent hover:bg-white"
              >
                See 30% OFF deals
              </a>
              <a
                href="/hounslow/ramadan-deals"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--brand-primary)]/15 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-primary)] transition hover:border-transparent hover:bg-white"
              >
                See Ramadan deals
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
