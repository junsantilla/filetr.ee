import Link from "next/link";

const lastUpdated = "May 18, 2026";

export default function TermsPage() {
    return (
        <section className="mx-auto w-full max-w-3xl px-4 py-16">
            <h1 className="text-3xl font-bold">Terms of Service</h1>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                Last updated: {lastUpdated}
            </p>

            <p className="mt-6 text-base text-neutral-600 dark:text-neutral-300">
                By accessing or using Filetr.ee, you agree to these terms. If
                you do not agree, do not use the site.
            </p>

            <div className="mt-10 space-y-8">
                <section>
                    <h2 className="text-xl font-semibold">Use of the Site</h2>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-neutral-600 dark:text-neutral-300">
                        <li>
                            The content is provided for informational purposes
                            only.
                        </li>
                        <li>You may view, share, and reference the content.</li>
                        <li>
                            You agree not to disrupt the site or attempt to gain
                            unauthorized access to its systems.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        Intellectual Property
                    </h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                        All site content and branding belong to Filetr.ee or its
                        contributors unless stated otherwise.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        Third-Party Services
                    </h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                        The site uses third-party services such as analytics and
                        GitHub comments. Your use of those services is governed
                        by their own terms and policies.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Disclaimer</h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                        The site is provided &quot;as is&quot; without
                        warranties of any kind. We do not guarantee accuracy,
                        completeness, or availability.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">
                        Limitation of Liability
                    </h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                        To the fullest extent permitted by law, Filetr.ee is not
                        liable for any damages arising from your use of the
                        site.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold">Changes</h2>
                    <p className="mt-3 text-neutral-600 dark:text-neutral-300">
                        We may update these terms from time to time. Continued
                        use of the site means you accept the updated terms.
                    </p>
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
                        For privacy details, see the{" "}
                        <Link className="underline" href="/privacy">
                            Privacy Policy
                        </Link>
                        .
                    </p>
                </section>
            </div>
        </section>
    );
}
