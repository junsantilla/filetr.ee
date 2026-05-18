"use client";

import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@next/third-parties/google";

export function AnalyticsGate() {
    return (
        <>
            <Analytics />
            <GoogleTagManager gtmId="G-VSX61LB6TV" />
        </>
    );
}
