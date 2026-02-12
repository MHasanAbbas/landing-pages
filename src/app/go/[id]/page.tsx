"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { appLinks } from "@/lib/seo";

export default function GoPage() {
  const params = useParams();
  const idParam = params?.id;
  const id = Array.isArray(idParam) ? idParam[0] : idParam ?? "";
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (id) {
      window.location.href = `totaleehalal://restaurant/${id}`;
    }
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

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={appLinks.appStore}
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--brand-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--brand-secondary)]"
          >
            App Store
          </a>
          <a
            href={appLinks.playStore}
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--brand-primary)]/15 bg-white/80 px-5 py-3 text-sm font-semibold text-[color:var(--brand-primary)] transition hover:border-transparent hover:bg-white"
          >
            Google Play
          </a>
          <Link
            href="/hounslow/deals"
            className="text-sm font-semibold text-[color:var(--brand-primary)]"
          >
            Back to deals
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
