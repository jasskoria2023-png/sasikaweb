import { Handshake, Target, TrendingUp, Lightbulb, Users, Blocks, Play, FileQuestion, DollarSign, Rocket, Crown } from 'lucide-react';
import Image from 'next/image'
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';


export default function Home() {
  const sections = [
    { id: 'hero', title: 'Architecting the Next Generation of Convergent ICT', color: 'bg-emerald-500 text-white', desc: 'We don’t just fund startups, we build them...' },
    { id: 'about', title: 'Get In Touch', color: 'bg-white text-black' },
    { id: 'how', title: 'How It Works: Our "Venture Engine"', color: 'bg-emerald-500 text-black', desc: 'Ideate & Prototype...' },
  ];

  return (
    <div>
      <section id='hero' className='flex min-h-screen flex-col justify-center'>
        <div className="grid grid-cols-1 md:grid-cols-6 min-h-screen">
          <div className="col-span-1 md:col-span-2 overflow-y-auto h-screen bg-emerald-500 flex min-h-screen flex-col items-baseline justify-center p-12 ">
            <h2 className="text-3xl font-black uppercase tracking-tighter">
              From Student to Founder
            </h2>
            <p className="mt-4 text-xl opacity-100 text-slate-800">
              We are a Venture Studio that transforms high-potential university talent into the next generation of tech founders. By converging deep sector expertise with a high-velocity development engine, we build, fund, and scale the startups that will enrich Sri Lanka’s digital ecosystem.
            </p>
          </div>
          <div className="col-span-1 md:col-span-4 sticky top-0  flex justify-center bg-[url('/img1.svg')] bg-center bg-no-repeat bg-contain bg-white animate-pulse">
            <h1 className="relative text-4xl md:text-4xl font-bold text-slate-900 text-center align-text-top drop-shadow-2xl p-30">
              Collaborative <br />
              <span className="text-emerald-600">Innovation</span>
            </h1>
          </div>
        </div>
      </section>
      <section id='section1 '>

        <div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
            {/* Card 1: From image_8.png "Idea & Inception" */}
            <div className="bg-emerald-500 transition  items-center p-3">
              <div className="flex items-center">
                {/* The Icon: Customized with Tailwind */}
                <Lightbulb className="w-60 h-30  text-white rounded-xl align-middle" />
              </div>
              <p className="text-lg m-0 p-0 font-semibold  text-white">Idea</p>
            </div>

            {/* Card 2: Customizing the Icon based on image elements */}
            <div className="bg-emerald-600 transition items-center p-3">
              <div className="flex items-center">
                {/* The Icon: Customized with Tailwind */}
                <Users className="w-60 h-30  text-white rounded-xl align-middle" />
              </div>
              <p className="text-lg m-0 p-0 font-semibold  text-white">Build a Team</p>
            </div>

            {/* Card 3: Customizing the Icon color with a hover effect */}
            <div className="bg-emerald-700 transition items-center p-3">
              <div className="flex items-center">
                {/* The Icon: Customized with Tailwind */}
                <Blocks className="w-60 h-30  text-white rounded-xl align-middle" />
              </div>
              <p className="text-lg m-0 p-0 font-semibold  text-white">Create MVP</p>
            </div>

            {/* Card 4: From image_8.png "Unicorn IPO" */}
            <div className="bg-emerald-800 transition items-center p-3">
              <div className="flex items-center">
                {/* The Icon: Customized with Tailwind */}
                <Play className="w-60 h-30  text-white rounded-xl align-middle" />
              </div>
              <p className="text-lg m-0 p-0 font-semibold  text-white"> Run</p>
            </div>

            {/* Card 4: From image_8.png "Unicorn IPO" */}
            <div className="bg-emerald-900 transition hover:shadow-lg items-center p-3">
              <div className="flex items-center">
                {/* The Icon: Customized with Tailwind */}
                <FileQuestion className="w-60 h-30  text-white rounded-xl align-middle" />
              </div>
              <p className="text-lg m-0 p-0 font-semibold  text-white">Validate</p>
            </div>

            {/* Card 4: From image_8.png "Unicorn IPO" */}
            <div className="bg-emerald-950 transition hover:shadow-lg items-center p-3">
              <div className="flex items-center">
                {/* The Icon: Customized with Tailwind */}
                <DollarSign className="w-60 h-30  text-white rounded-xl align-middle" />
              </div>
              <p className="text-lg m-0 p-0 font-semibold  text-white">Invest</p>
            </div>

            {/* Card 4: From image_8.png "Unicorn IPO" */}
            <div className="bg-slate-900 transition hover:shadow-lg items-center p-3">
              <div className="flex items-center">
                {/* The Icon: Customized with Tailwind */}
                <Rocket className="w-60 h-30  text-white rounded-xl align-middle" />
              </div>
              <p className="text-lg m-0 p-0 font-semibold  text-white">Fly</p>
            </div>

            {/* Card 4: From image_8.png "Unicorn IPO" */}
            <div className="bg-orange-500 transition hover:shadow-lg items-center p-3">
              <div className="flex items-center">
                {/* The Icon: Customized with Tailwind */}
                <Crown className="w-60 h-30 text-white rounded-xl align-middle" />
              </div>
              <p className="text-lg font-semibold  text-white text-center">Unicorn</p>
            </div>
          </div>
        </div>
      </section>
      <section id='section2' className='flex min-h-screen flex-col justify-center'>
        <div className="grid grid-cols-1 md:grid-cols-1 min-h-screen">
          <div className="col-span-1 md:col-span-1 overflow-y-auto h-screen bg-slate-900 flex min-h-screen flex-col items-baseline justify-center p-12 ">
            <h2 className="text-6xl text-white uppercase tracking-tighter text-center" >
              "Stop building the basics and start building the future: We eliminate technical friction and capital waste to turn your vision into a vetted, de-risked reality."
            </h2>

          </div>

        </div>
      </section>
      <section id='section3' className='flex min-h-screen flex-col justify-center'>
        <div className="grid grid-cols-1 md:grid-cols-6 min-h-screen">
          <div className="col-span-1 md:col-span-3 overflow-y-auto h-screen bg-slate-900 flex min-h-screen flex-col items-baseline justify-center p-12 ">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-emerald-600">
              Join With Us
            </h2>
            <p className="mt-4 text-xl opacity-100 text-emerald-600">
              We don't just provide internships; we provide the blueprint for your future as a CEO. Join our ecosystem to build on a world-class technical foundation, access immediate seed capital, and transition from graduate to Founder with a de-risked path to a global exit.</p>
          </div>
          <div className="col-span-1 md:col-span-3 sticky top-0 h-screen flex justify-center ">
            <RegistrationForm />
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}