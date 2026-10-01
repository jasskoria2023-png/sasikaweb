import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Vactionstnh.com uses cookies and similar tracking technologies.",
};

const cookieSections = [
  {
    heading: "1. What Are Cookies?",
    text:
      "Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, recognize your browser, and improve overall performance and user experience.",
  },
  {
    heading: "2. Types of Cookies We Use",
    text:
      "We may use essential cookies to keep the website functioning correctly, performance cookies to understand how the site is used, and preference cookies to remember choices such as language or display settings. We may also use analytics tools to review traffic patterns and improve our offerings.",
  },
  {
    heading: "3. Why We Use Cookies",
    text:
      "Cookies help us provide a smoother browsing experience, measure site performance, prevent fraudulent activity, monitor website efficiency, and improve the relevance of our content. They also support security and help us understand which sections of the website are most useful to visitors.",
  },
  {
    heading: "4. Third-Party Cookies",
    text:
      "Some third-party services we use may place cookies in order to provide analytics, advertising, or embedded media functionality. These cookies are governed by the privacy and cookie practices of those providers and may be managed through your browser settings.",
  },
  {
    heading: "5. Managing Cookie Preferences",
    text:
      "You can change your browser settings to accept, reject, or delete cookies at any time. Please note that disabling some cookies may affect website functionality, features, or the quality of your browsing experience.",
  },
  {
    heading: "6. Updates to This Policy",
    text:
      "We may update this Cookie Policy from time to time to reflect changes in technology, laws, or business practices. Any revised version will be posted on this page with an updated date.",
  },
  {
    heading: "7. Contact",
    text:
      "If you have questions about cookies or this policy, please contact us at info@vacationstnh.com.",
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <div className="mb-10 border-b border-slate-200 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Website Settings
          </p>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Cookie Policy
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Updated: October 1, 2026
          </p>
        </div>

        <div className="space-y-8">
          {cookieSections.map((section) => (
            <section key={section.heading} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="mb-3 text-xl font-bold text-slate-900">{section.heading}</h2>
              <p className="text-base leading-8 text-slate-700">{section.text}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
