"use client";

import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";

export function AnalyticsGate() {
    const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

    if (!isProduction) {
        return null;
    }

    return (
        <>
            <Analytics />
            <GoogleTagManager gtmId="G-VSX61LB6TV" />
            <GoogleAnalytics gaId="G-VSX61LB6TV" />
            <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
        </>
    );
}
