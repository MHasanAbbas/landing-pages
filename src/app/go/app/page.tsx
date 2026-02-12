"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { appLinks } from "@/lib/seo";

export default function GoAppPage() {
  const [copied, setCopied] = useState(false);
  const [storeLink, setStoreLink] = useState(appLinks.appStore);

  useEffect(() => {
    window.location.href = "totaleehalal://";
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("android")) {
      setStoreLink(appLinks.playStore);
      return;
    }
    if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) {
      setStoreLink(appLinks.appStore);
      return;
    }
    setStoreLink(appLinks.appStore);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--brand-bg)] px-4 py-10 text-[color:var(--brand-ink)] sm:px-6 sm:py-12">
      <div className="w-full max-w-xl rounded-3xl border border-white/70 bg-white/85 p-6 text-center shadow-[0_30px_70px_-40px_rgba(15,47,36,0.6)] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-secondary)]">
          Totalee Halal
        </p>
        <h1 className="mt-4 text-2xl font-semibold">Opening the app...</h1>
        <p className="mt-2 text-sm text-[color:var(--brand-muted)]">
          If nothing happens, tap below.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={storeLink}
            className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-secondary)]"
          >
            Open App
          </a>
          <a
            href={appLinks.appStore}
            className="inline-flex w-full items-center justify-center rounded-full border border-[color:var(--brand-primary)]/15 bg-white/90 px-5 py-3 text-sm font-semibold text-[color:var(--brand-primary)] transition hover:border-transparent hover:bg-white"
          >
            Open on iPhone (App Store)
          </a>
          <a
            href={appLinks.playStore}
            className="inline-flex w-full items-center justify-center rounded-full border border-[color:var(--brand-primary)]/15 bg-white/80 px-5 py-3 text-sm font-semibold text-[color:var(--brand-primary)] transition hover:border-transparent hover:bg-white"
          >
            Open on Android (Google Play)
          </a>
          <Link
            href="/hounslow/deals"
            className="text-sm font-semibold text-[color:var(--brand-primary)]"
          >
            Back to Hounslow deals
          </Link>
          <button
            type="button"
            onClick={handleCopy}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--brand-secondary)]"
          >
            {copied ? "Link copied" : "Copy link"}
          </button>
        </div>
      </div>
    </div>
  );
}
