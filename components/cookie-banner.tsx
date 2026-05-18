"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "cookie_consent";

type ConsentValue = "accepted" | "rejected" | null;

export function CookieBanner() {
	const [consent, setConsent] = useState<ConsentValue>(null);

	useEffect(() => {
		const stored = window.localStorage.getItem(CONSENT_KEY) as
			| ConsentValue
			| null;
		setConsent(stored);
	}, []);

	const updateConsent = (value: Exclude<ConsentValue, null>) => {
		window.localStorage.setItem(CONSENT_KEY, value);
		setConsent(value);
	};

	if (consent !== null) {
		return null;
	}

	return (
		<div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-xl border border-neutral-200 bg-white/95 p-4 shadow-lg backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/95">
			<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<div className="text-sm text-neutral-600 dark:text-neutral-300">
					<p className="font-medium text-neutral-900 dark:text-neutral-100">
						We use cookies and analytics
					</p>
					<p className="mt-1">
						We use analytics to understand traffic and improve the site.
						You can accept or reject non-essential cookies. See our{" "}
						<Link className="underline" href="/privacy">
							Privacy Policy
						</Link>
						.
					</p>
				</div>
				<div className="flex gap-2">
					<Button variant="outline" onClick={() => updateConsent("rejected")}>
						Reject
					</Button>
					<Button onClick={() => updateConsent("accepted")}>Accept</Button>
				</div>
			</div>
		</div>
	);
}
