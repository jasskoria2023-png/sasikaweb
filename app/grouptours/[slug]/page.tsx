import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarDays, CheckCircle2, Clock3, MapPin, PlaneTakeoff } from 'lucide-react';
import { tours, toTourSlug } from '../tours-data';

export function generateStaticParams() {
  return tours.map((tour) => ({
    slug: toTourSlug(tour.id),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours.find((item) => toTourSlug(item.id) === slug);

  if (!tour) {
    return {
      title: 'Tour Not Found',
    };
  }

  return {
    title: `${tour.destination} Tour Package`,
    description: `${tour.title} - ${tour.duration}. Explore our ${tour.destination} group tour package.`,
  };
}

export default async function TourPackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = tours.find((item) => toTourSlug(item.id) === slug);

  if (!tour) {
    notFound();
  }

  const itinerary = [
    {
      day: 'Day 1',
      title: 'Arrival and welcome briefing',
      description: 'Meet your group, settle into the destination, and receive a local orientation with travel support throughout the journey.',
    },
    {
      day: 'Day 2',
      title: 'Signature city highlights',
      description: 'Explore the destination’s iconic sights, hidden gems, and cultural landmarks with guided time for local discovery.',
    },
    {
      day: 'Day 3',
      title: 'Experience and leisure time',
      description: 'Enjoy a curated mix of sightseeing, relaxation, shopping, dining, and optional activity upgrades recommended by our team.',
    },
    {
      day: 'Day 4+',
      title: 'Final stretch and departure',
      description: 'Complete the remaining itinerary with connection moments, last-minute discoveries, and seamless departure coordination.',
    },
  ];

  const includedItems = [
    'Pre-departure guidance and itinerary support',
    'Accommodation coordination based on package selection',
    'Destination and travel planning assistance',
    'Visa guidance and document support where applicable',
    'Dedicated support during the travel period',
  ];

  const excludedItems = [
    'Personal shopping and incidental expenses',
    'International airfare unless specified',
    'Optional tours and add-on activities',
    'Travel insurance and personal medical costs',
  ];

  return (
    <main className="bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <Link
          href="/grouptours"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-emerald-500 hover:text-emerald-600"
        >
          <ArrowLeft size={16} />
          Back to all tours
        </Link>

        <article className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_48px_rgba(15,23,42,0.06)]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[360px]">
              <img
                src={tour.image}
                alt={tour.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
              <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-slate-900/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-sm">
                {tour.category}
              </div>
            </div>

            <div className="p-7 md:p-9">
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                <MapPin size={16} />
                {tour.destination}
              </p>

              <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
                {tour.title}
              </h1>

              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <Clock3 size={16} className="text-emerald-600" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarDays size={16} className="text-emerald-600" />
                  <span>Available departures: {tour.departureMonths.join(', ')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <PlaneTakeoff size={16} className="text-emerald-600" />
                  <span>{tour.priceFrom} inquire for pricing and inclusions</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {tour.departureMonths.map((month) => (
                  <span
                    key={month}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700"
                  >
                    {month}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-3">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Style</div>
                  <div className="mt-2 text-sm font-bold text-slate-900">{tour.category}</div>
                </div>
                <div className="rounded-2xl bg-slate-100 p-3">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Best for</div>
                  <div className="mt-2 text-sm font-bold text-slate-900">Couples & groups</div>
                </div>
                <div className="rounded-2xl bg-slate-100 p-3">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Support</div>
                  <div className="mt-2 text-sm font-bold text-slate-900">24/7 assistance</div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-500"
                >
                  Request this package
                </a>
                <Link
                  href="/grouptours"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
                >
                  Explore other tours
                </Link>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900">Overview</h2>
            <p className="mt-4 text-base leading-8 text-slate-700">{tour.description}</p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black text-slate-900">Why travelers choose it</h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              {[
                'Curated route with iconic experiences and cultural discovery',
                'Balanced pace for sightseeing, rest, and shared travel moments',
                'Flexible departure options across the year',
                'Support from booking through final departure day',
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
            <h2 className="text-2xl font-black text-slate-900">Sample itinerary</h2>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">
              {tour.duration}
            </span>
          </div>

          <div className="space-y-4">
            {itinerary.map((item) => (
              <div
                key={item.day}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5"
              >
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
              {[tour.image, tour.image, tour.image].map((image, index) => (
                <div
                  key={`${tour.id}-${index}`}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100"
                >
                  <img
                    src={image}
                    alt={`${tour.destination} experience ${index + 1}`}
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
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Not included</h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                {excludedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="booking" className="mt-10 rounded-[28px] border border-slate-200 bg-slate-900 p-7 text-white shadow-[0_20px_48px_rgba(15,23,42,0.2)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Booking enquiry</p>
              <h2 className="mt-3 text-3xl font-black">Reserve your {tour.destination} journey</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Tell us your preferred month, group size, and travel requirements and our team will contact you with availability and next steps.
              </p>
            </div>

            <form className="rounded-3xl border border-slate-700 bg-slate-950 p-5">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Full name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Phone</label>
                  <input
                    type="tel"
                    placeholder="+94 77 123 4567"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Preferred month</label>
                  <select className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-sm text-white outline-none focus:border-emerald-500">
                    <option>Any Month</option>
                    {tour.departureMonths.map((month) => (
                      <option key={month} value={month}>{month}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us your preferred travel dates, group size, or any special requests..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-emerald-400"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
