import {
  Cpu, Code2, Terminal, ShieldCheck,
  Lightbulb, MessagesSquare, ArrowUpRight, Github,
  Layers,
  Zap,
  Briefcase
} from 'lucide-react';

const techDisciplines = [
  {
    title: "Full-Stack Architecture",
    icon: Code2,
    description: "Guiding founders through the Next.js App Router, TypeScript type-safety, and scalable Node.js patterns.",
    focus: "T3 Stack / MERN"
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cpu,
    description: "Advising on Lanka Government Cloud (LGC 2.0) transitions, Docker containerization, and serverless scaling.",
    focus: "AWS / LGC 2.0"
  },
  {
    title: "Information Security",
    icon: ShieldCheck,
    description: "Ensuring every venture meets national security standards, digital ID protocols, and data integrity benchmarks.",
    focus: "Governance & Sec"
  },
  {
    title: "IoT & Embedded Systems",
    icon: Terminal,
    description: "Supporting hardware-software convergence for Smart City sensors and AgriTech monitoring nodes.",
    focus: "Hardware Integration"
  },
  {
    title: "AI and Automation",
    icon: Zap,
    description: "Deploying machine learning models and robotic process automation to eliminate structural inefficiencies and enable autonomous decision-making.",
    focus: "MLOps & Workflow Auto"
  },
  {
    title: "Blockchain and Digital Assets",
    icon: ShieldCheck,
    description: "Architecting decentralized ledgers and tokenized asset frameworks to ensure transaction transparency and secure ownership across the digital economy.",
    focus: "Web3 & Tokenomics"
  }
  ,
  {
    title: "Digital Twin and Cyber Physics",
    icon: Layers,
    description: "Bridging the physical and virtual worlds through real-time data replicas and intelligent feedback loops for infrastructure optimization.",
    focus: "Predictive Modeling & CPS"
  }
  ,
  {
    title: "Product and Project Management",
    icon: Briefcase,
    description: "Orchestrating the venture lifecycle from ideation to exit using agile methodologies and rigorous governance to ensure high-velocity delivery.",
    focus: "Agile Governance & Delivery"
  }
];

export default function MentorPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* UNIFORM HERO SECTION */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 text-emerald-500 mb-6">
            <div className="h-px w-10 bg-emerald-500" />
            <span className="font-bold uppercase tracking-[0.3em] text-xs">Technical Council</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8">
            Scale Through <br />
            <span className="text-emerald-500">Technical Mastery.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            We are looking for Senior Architects and Tech Leads to mentor the next generation of founders on the SAVINEX Unified Tech Engine.
          </p>
        </div>
      </section>

      {/* THE MENTORSHIP STREAMS: UNIFORM GRID */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techDisciplines.map((d, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-900 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <d.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{d.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {d.description}
                </p>
              </div>

              <div>
                <div className="pt-6 border-t border-slate-200">
                  <span className="text-[10px] font-black uppercase tracking-tighter text-emerald-600 bg-emerald-50 px-2 py-1 rounded inline-block">
                    {d.focus}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MENTOR ENGAGEMENT MODEL */}
      <section className="bg-slate-900 py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 italic">How We Partner</h2>
            <div className="space-y-6">
              {[
                { icon: MessagesSquare, title: "Office Hours", desc: "Bi-weekly deep-dives with founding teams to unblock architectural bottlenecks." },
                { icon: Github, title: "Code Reviews", desc: "Setting high-quality standards through peer review of core venture repositories." },
                { icon: Lightbulb, title: "Tech Theses", desc: "Help define the studio's technical roadmap for new verticals like IoT or BioTech." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <item.icon className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Join the Council</h3>
            <p className="text-slate-500 text-sm mb-8">Apply to become a technical mentor and help de-risk the engineering journey for our 2026 cohort.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/50" />
              <input type="text" placeholder="Current Role / Company" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/50" />
              <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-2">
                Submit Interest <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}