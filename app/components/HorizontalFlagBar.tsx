export default function HorizontalFlagBar() {
  const steps = [
    { country: 'sg', label: 'Singapore',  },
    { country: 'th', label: 'Thailand',  },
    { country: 'my', label: 'Malaysia', },
    { country: 'in', label: 'India', },
    { country: 'ae', label: 'UAE',  },
    { country: 'mv', label: 'Maldives',  },
  ];

  // Duplicate items to create a seamless infinite loop
  const infiniteSteps = [...steps, ...steps];

  return (
    <div id="section1" className="w-full overflow-hidden  ">
      <div className="animate-marquee py-2">
        {infiniteSteps.map((step, index) => (
          <div
            key={index}
            className={`${step.bg} h-32 w-32 flex-shrink-0 flex flex-col items-center justify-center p-4 transition-all duration-300 hover:scale-110 hover:z-20 group cursor-pointer shadow-lg rounded-lg mx-2`}
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