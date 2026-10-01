import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Vactionstnh.com collects, uses, and protects personal data.",
};

const policySections = [
  {
    heading: "1. Overview",
    text:
      "This Privacy Policy explains how Vactionstnh.com (Vacations T&H or 'we') collects, uses, stores, and protects information from visitors, customers, and business contacts. By using our website, booking services, or contacting us, you agree to the terms of this policy.",
  },
  {
    heading: "2. Information We Collect",
    text:
      "We may collect personal information such as your name, email address, phone number, travel preferences, destination details, payment information, and communication records. We may also collect non-personal technical data such as browser type, device information, IP address, and site usage patterns to improve the quality of our services.",
  },
  {
    heading: "3. How We Use Your Information",
    text:
      "We use personal information to respond to inquiries, process tour bookings, provide travel assistance, confirm reservations, communicate service updates, manage customer support requests, and improve our website and customer experience. We may also use your information to comply with legal obligations and internal business operations.",
  },
  {
    heading: "4. Sharing of Information",
    text:
      "We do not sell your personal information. We may share your details with trusted service providers who support our operations, including payment processors, IT providers, email delivery services, and travel partner networks when required to fulfill a booking or provide a service. We may also disclose information to authorities if required by law or to prevent fraud or misuse.",
  },
  {
    heading: "5. Cookies and Tracking",
    text:
      "Our website may use cookies, analytics tools, and similar technologies to understand visitor behavior, improve website performance, and maintain security. These tools help us measure traffic, improve user experience, and personalize content. You can manage cookie preferences in your browser settings.",
  },
  {
    heading: "6. Data Security",
    text:
      "We take reasonable administrative, technical, and physical safeguards to protect personal information against unauthorized access, disclosure, or misuse. However, no online system can guarantee absolute security, and we encourage you to protect your personal devices and account information.",
  },
  {
    heading: "7. Your Rights",
    text:
      "Depending on applicable law, you may have the right to access, update, correct, delete, or restrict the use of your personal information. You may also object to marketing communications and request that your information not be processed for certain purposes. To exercise your rights, please contact us using the details below.",
  },
  {
    heading: "8. Retention",
    text:
      "We keep personal information only as long as necessary to provide services, meet legal obligations, resolve disputes, and maintain business records. When no longer needed, we securely delete or anonymize the information in accordance with our retention policies.",
  },
  {
    heading: "9. Contact Us",
    text:
      "If you have any questions regarding this Privacy Policy or how your information is handled, please contact us at info@vacationstnh.com. We will do our best to respond promptly and clearly.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <div className="mb-10 border-b border-slate-200 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Legal Information
          </p>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Effective date: October 1, 2026
          </p>
        </div>

        <div className="space-y-8">
          {policySections.map((section) => (
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
