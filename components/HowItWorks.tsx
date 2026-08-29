"use client";

import Reveal from "./Reveal";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "8 Physical Tests",
      text: "Students complete eight fun PE activities including sprint, agility, balance and coordination."
    },
    {
      number: "02",
      title: "Helix AI Analysis",
      text: "Our AI identifies natural athletic strengths using performance patterns."
    },
    {
      number: "03",
      title: "Sports Strength Profile",
      text: "Teachers and parents receive a personalized report with the three best sports for every student."
    }
  ];

  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm font-semibold">
              How It Works
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-black">
              One PE Class.
              <br />
              Lifetime Insights.
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-slate-400 text-lg">
              Three simple steps that help every child discover the right sport.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 180}>
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:-translate-y-2 hover:border-cyan-400/50 transition-all duration-500">
                <div className="h-14 w-14 rounded-2xl bg-cyan-400/10 flex items-center justify-center">
                  <span className="text-cyan-400 font-black text-lg">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>

                <p className="mt-4 text-slate-400 leading-7">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}