"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@next/third-parties/google";

const CONSENT_KEY = "cookie_consent";

type ConsentValue = "accepted" | "rejected" | null;

export function AnalyticsGate() {
    const [consent, setConsent] = useState<ConsentValue>(null);

    useEffect(() => {
        const stored = window.localStorage.getItem(
            CONSENT_KEY,
        ) as ConsentValue | null;
        setConsent(stored);
    }, []);

    if (consent !== "accepted") {
        return null;
    }

    return (
        <>
            <Analytics />
            <GoogleTagManager gtmId="G-VSX61LB6TV" />
        </>
    );
}
