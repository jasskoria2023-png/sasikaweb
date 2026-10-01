import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarDays, CheckCircle2, Clock3, MapPin, PlaneTakeoff } from 'lucide-react';
import { corporatePackages, toCorporatePackageSlug } from '../packages-data';

export function generateStaticParams() {
  return corporatePackages.map((pkg) => ({
    slug: toCorporatePackageSlug(pkg.id),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = corporatePackages.find((item) => toCorporatePackageSlug(item.id) === slug);

  if (!pkg) {
    return { title: 'Package Not Found' };
  }

  return {
    title: `${pkg.destination} Corporate Package`,
    description: `${pkg.title} - ${pkg.duration}. Explore our ${pkg.destination} corporate travel package.`,
  };
}

export default async function CorporatePackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pkg = corporatePackages.find((item) => toCorporatePackageSlug(item.id) === slug);

  if (!pkg) {
    notFound();
  }

  const includedItems = [
    'Dedicated itinerary planning and route design',
    'Premium accommodation and airport transfers',
    'Visa and document guidance support',
    'Corporate event coordination and service support',
    'On-ground assistance throughout the itinerary',
  ];

  const excludedItems = [
    'Personal shopping and incidental expenses',
    'Flights unless specifically included in the quote',
    'Optional leisure activities and upgrades',
    'Insurance and personal medical costs',
  ];

  return (
    <main className="bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <Link
          href="/corporatetour"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-emerald-500 hover:text-emerald-600"
        >
          <ArrowLeft size={16} />
          Back to all corporate packages
        </Link>

        <article className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_48px_rgba(15,23,42,0.06)]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[360px]">
              <img src={pkg.image} alt={pkg.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
              <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-slate-900/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-sm">
                {pkg.category}
              </div>
            </div>

            <div className="p-7 md:p-9">
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                <MapPin size={16} />
                {pkg.destination}
              </p>

              <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">{pkg.title}</h1>

              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <Clock3 size={16} className="text-emerald-600" />
                  <span>{pkg.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarDays size={16} className="text-emerald-600" />
                  <span>Fully customizable corporate schedule</span>
                </div>
                <div className="flex items-center gap-3">
                  <PlaneTakeoff size={16} className="text-emerald-600" />
                  <span>Tailored for delegates, teams, and executive groups</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {pkg.highlights.map((item) => (
                  <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/corporatetour#rfq-form"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-500"
                >
                  Request this package
                </a>
                <Link
                  href="/corporatetour"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
                >
                  Explore other packages
                </Link>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900">Overview</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">{pkg.description}</p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900">Why this works for business travel</h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              {[
                'Built around meetings, incentives, delegation flow, and team engagement',
                'Flexible scheduling for corporate calendars and executive requirements',
                'Strong support for logistics, ground handling, and VIP coordination',
                'A polished experience that balances business objectives with comfort',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-10 rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-black text-slate-900">Typical journey flow</h2>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">
              {pkg.duration}
            </span>
          </div>

          <div className="space-y-4">
            {[
              {
                day: 'Day 1',
                title: 'Arrival and delegation setup',
                description: 'Welcoming, private transfers, hotel check-in, and coordinated briefing for the business group.',
              },
              {
                day: 'Day 2',
                title: 'Business engagement and meetings',
                description: 'Structured agenda with venue coordination, partner visits, and executive-level scheduling support.',
              },
              {
                day: 'Day 3',
                title: 'Experience and team connection',
                description: 'A curated activity block that blends brand experience, leisure, and team bonding moments.',
              },
              {
                day: 'Day 4+',
                title: 'Final stretch and departure',
                description: 'Smooth wrap-up, travel support, and departure coordination for the return journey.',
              },
            ].map((item) => (
              <div key={item.day} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-sm font-black text-white">
                  {item.day.split(' ')[0]}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">{item.day}</p>
                  <h3 className="mt-1 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900">Gallery</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[pkg.image, pkg.image, pkg.image].map((image, index) => (
                <div key={`${pkg.id}-${index}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                  <img
                    src={image}
                    alt={`${pkg.destination} experience ${index + 1}`}
                    className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900">Includes & exclusions</h2>

            <div className="mt-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Included</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-700">Excluded</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                {excludedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-slate-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
