import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Governance",
  description: "Terms governing the use, oversight, and operation of Vactionstnh.com.",
};

const terms = [
  {
    heading: "1. Purpose and Scope",
    text:
      "These Terms of Governance define the general rules for operating and using the Vactionstnh.com website and related services. They are intended to support transparency, responsible use, and lawful business operations for our customers, partners, and visitors.",
  },
  {
    heading: "2. Website Use",
    text:
      "Users must use the website in a lawful and respectful manner. You agree not to misuse, interfere with, or attempt to access restricted areas of the site, manipulate content, or use the platform for fraudulent, abusive, or harmful purposes.",
  },
  {
    heading: "3. Content and Information",
    text:
      "Content provided on this website, including travel packages, descriptions, offers, images, and pricing information, is intended for informational and marketing purposes. We may update or amend such content without prior notice as market conditions, availability, or service requirements change.",
  },
  {
    heading: "4. Booking and Service Commitments",
    text:
      "Any booking request or inquiry submitted through our website or contact channels is subject to availability, confirmation from our partners, and applicable terms imposed by airlines, hotels, visa processing authorities, and other third-party providers. We act as an intermediary and will do our best to facilitate the arrangement of services on your behalf.",
  },
  {
    heading: "5. Intellectual Property",
    text:
      "All design elements, text, visuals, branding, software, and material available on the website are protected by intellectual property rights and may not be copied, distributed, altered, or reused without written permission from Vactionstnh.com.",
  },
  {
    heading: "6. Liability and Disclosures",
    text:
      "We aim to provide accurate and timely information, but we do not guarantee that all content is free from errors or omissions. We are not liable for indirect, incidental, or consequential damages arising from reliance on the website, travel decisions, pricing changes, external provider issues, or service interruptions beyond our reasonable control.",
  },
  {
    heading: "7. Compliance and Governance",
    text:
      "Vactionstnh.com is committed to lawful conduct, fair business practices, and responsible operational governance. We expect our partners, staff, and customers to uphold values of integrity, transparency, and respect in all commercial and digital interactions.",
  },
  {
    heading: "8. Changes to These Terms",
    text:
      "We may revise these Terms of Governance at any time to reflect changes in law, business practice, or service offerings. Continued use of the website after any update indicates acceptance of the revised terms.",
  },
  {
    heading: "9. Contact",
    text:
      "Questions or concerns regarding these terms may be directed to info@vacationstnh.com. We appreciate the opportunity to address inquiries and maintain a constructive relationship with our users.",
  },
];

export default function TermsOfGovernancePage() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <div className="mb-10 border-b border-slate-200 pb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Governance
          </p>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
            Terms of Governance
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Updated: October 1, 2026
          </p>
        </div>

        <div className="space-y-8">
          {terms.map((term) => (
            <section key={term.heading} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <h2 className="mb-3 text-xl font-bold text-slate-900">{term.heading}</h2>
              <p className="text-base leading-8 text-slate-700">{term.text}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
