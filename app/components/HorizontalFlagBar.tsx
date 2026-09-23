export default function HorizontalFlagBar() {
const steps = [
  { country: 'az', label: 'Azerbaijan' },
  { country: 'cn', label: 'China' },
  { country: 'fr', label: 'France' },
  { country: 'ge', label: 'Georgia' },
  { country: 'gr', label: 'Greece' },
  { country: 'in', label: 'India' },
  { country: 'it', label: 'Italy' },
  { country: 'jp', label: 'Japan' },
  { country: 'ke', label: 'Kenya' },
  { country: 'my', label: 'Malaysia' },
  { country: 'mv', label: 'Maldives' },
  { country: 'ma', label: 'Morocco' },
  { country: 'ph', label: 'Philippines' },
  { country: 'sg', label: 'Singapore' },
  { country: 'kr', label: 'South Korea' },
  { country: 'ch', label: 'Switzerland' },
  { country: 'th', label: 'Thailand' },
  { country: 'tr', label: 'Turkey' },
  { country: 'ae', label: 'UAE' },
  { country: 'gb', label: 'United Kingdom' },
  { country: 'vn', label: 'Vietnam' },
];

  // Duplicate items to create a seamless infinite loop
  const infiniteSteps = [...steps, ...steps];

  return (
    <div id="section1" className="w-full overflow-hidden  ">
      <div className="animate-marquee py-2">
        {infiniteSteps.map((step, index) => (
          <div
            key={index}
            className={`h-32 w-32 shrink-0 flex flex-col items-center justify-center p-4 transition-all duration-300 hover:scale-110 hover:z-20 group cursor-pointer shadow-lg rounded-lg mx-2`}
          >
            <span
              className={`fi fi-${step.country} text-6xl mb-2 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all rounded-sm shadow-md`}
            />
            <p className="text-xs font-bold text-white uppercase tracking-widest text-center">
              {step.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}