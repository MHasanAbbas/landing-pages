"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { appLinks } from "@/lib/seo";

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

export default function GoPage() {
  const params = useParams();
  const idParam = params?.id;
  const id = Array.isArray(idParam) ? idParam[0] : idParam ?? "";
  const [showFallback, setShowFallback] = useState(false);
  const [copied, setCopied] = useState(false);

  const storeLink = useMemo(() => getStoreLink(), []);

  useEffect(() => {
    if (id) {
      window.location.href = `totaleehalal://restaurant/${id}`;
    }
    const timer = window.setTimeout(() => setShowFallback(true), 900);
    return () => window.clearTimeout(timer);
  }, [id]);

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
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--brand-bg)] px-6 py-12 text-[color:var(--brand-ink)]">
      <div className="w-full max-w-xl rounded-3xl border border-white/70 bg-white/85 p-8 text-center shadow-[0_30px_70px_-40px_rgba(15,47,36,0.6)]">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-secondary)]">
          Totalee Halal
        </p>
        <h1 className="mt-4 text-2xl font-semibold">Opening the app...</h1>
        <p className="mt-2 text-sm text-[color:var(--brand-muted)]">
          If nothing happens, tap below.
        </p>

        {showFallback ? (
          <div className="mt-6 flex flex-col gap-3">
            <a
              href={storeLink}
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-secondary)]"
            >
              Open / Download Totalee Halal
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
        ) : (
          <div className="mt-6 h-10 w-full animate-pulse rounded-full bg-[color:var(--brand-primary)]/10" />
        )}
      </div>
    </div>
  );
}
