"use client";

import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@next/third-parties/google";

export function AnalyticsGate() {
    const isProduction = process.env.NEXT_PUBLIC_VERCEL_ENV === "production";

    if (!isProduction) {
        return null;
    }

    return (
        <>
            <Analytics />
            <GoogleTagManager gtmId="G-VSX61LB6TV" />
        </>
    );
}
