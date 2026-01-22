"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_ID = "G-L6H40VWTW2";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: unknown[];
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryString = searchParams?.toString();

  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag) return;
    const url = queryString ? `${pathname}?${queryString}` : pathname;
    window.gtag("config", GA_ID, { page_path: url });
  }, [pathname, queryString]);

  return null;
}
