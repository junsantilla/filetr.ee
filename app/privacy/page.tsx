import Link from "next/link";

const lastUpdated = "May 18, 2026";

export default function PrivacyPage() {
    return (
        <section className="mx-auto w-full max-w-3xl px-4 py-16">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                Last updated: {lastUpdated}
            </p>

            <p className="mt-6 text-base text-neutral-600 dark:text-neutral-300">
                Filetr.ee is a public, read-only resource that provides curated
                folder structures. We do not require accounts or collect
                payments.
            </p>

            <div className="mt-10 space-y-8">
                <section>
                    <h2 className="text-xl font-semibold">
                        Information We Collect
                    </h2>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-600 dark:text-neutral-300">
                        <li>
                            Usage data via analytics (page views, referrers,
                            device/browser info) to understand traffic and
                            improve the site.
                        </li>
                        <li>
                            Cookies and similar technologies that may be set by
                            analytics or third-party services.
                        </li>
                        <li>
                            If you choose to comment through the embedded GitHub
                            discussion widget, your comment data is processed by
                            GitHub under its policies.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        Third-Party Services
                    </h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                        We use third-party services for analytics and comments.
                        These services may collect data independently according
                        to their own privacy policies.
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-600 dark:text-neutral-300">
                        <li>Vercel Analytics</li>
                        <li>Google Tag Manager</li>
                        <li>GitHub (Giscus comments)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Your Choices</h2>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-600 dark:text-neutral-300">
                        <li>
                            You can disable cookies in your browser settings.
                        </li>
                        <li>
                            You can avoid using the comment widget if you do not
                            want GitHub to process your data.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Contact</h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                        For questions, please open an issue on GitHub:{" "}
                        <a
                            href="https://github.com/junsantilla/filetr.ee/issues"
                            className="underline"
                            target="_blank"
                            rel="noreferrer"
                        >
                            junsantilla/filetr.ee
                        </a>
                        .
                    </p>
                    <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
                        By using this site, you also agree to the Terms of
                        Service.{" "}
                        <Link className="underline" href="/terms">
                            Read Terms
                        </Link>
                    </p>
                </section>
            </div>
        </section>
    );
}
