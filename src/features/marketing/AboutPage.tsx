import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Target, 
  Users, 
  Lightbulb,
  Microscope,
  Briefcase,
  History,
  ArrowRight
} from 'lucide-react';
import { Button, Typography } from '../../components/ui';
import { Logo } from '../../components/shared/Logo';
import { useNavigate } from 'react-router-dom';

export function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-divider h-20 px-6 md:px-[60px] flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="cursor-pointer" onClick={() => navigate('/')}>
             <Logo size={36} />
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => navigate('/clinicians')} className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">For Clinicians</button>
            <button onClick={() => navigate('/health-systems')} className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">For Health Systems</button>
            <button onClick={() => navigate('/about')} className="text-sm font-bold text-primary transition-colors border-b-2 border-primary py-1">About</button>
          </div>
        </div>
      </nav>

      <header className="py-32 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
           <Typography variant="label-micro" className="text-secondary-balance uppercase tracking-[0.2em] mb-4">Our Vision</Typography>
           <h1 className="text-5xl font-serif font-bold mb-8 leading-tight">
             Specialist mental health assessment <br /> for every child.
           </h1>
           <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
             Regardless of geography, socioeconomic status, or access to specialist services. 
             We are building the diagnostic infrastructure that democratises clinical expertise.
           </p>
        </div>
      </header>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-[60px]">
         <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
               <h2 className="text-4xl font-serif font-bold text-primary mb-8">The Infrastructure Problem.</h2>
               <p className="text-xl text-text-secondary leading-relaxed mb-8">
                 Diagnosis is not just a workforce problem. It is an infrastructure problem. 
                 Specialist diagnostic formulation exists, but it cannot currently be delivered consistently or at scale.
               </p>
               <p className="text-xl text-text-secondary leading-relaxed mb-8">
                 Threadline builds the evidence-intelligence layer that allows clinicians to collaborate with AI 
                 to achieve specialist-grade formulation in a fraction of the time.
               </p>
               
               <div className="grid grid-cols-2 gap-8 mt-12">
                  <div>
                     <Typography variant="h3" className="text-primary font-bold mb-2">1,000+</Typography>
                     <Typography variant="body-sm">Assessments targeted in next phase</Typography>
                  </div>
                  <div>
                     <Typography variant="h3" className="text-primary font-bold mb-2">Class IIa</Typography>
                     <Typography variant="body-sm">TGA Registration Pathway</Typography>
                  </div>
               </div>
            </div>
            <div className="relative">
               <div className="rounded-3xl overflow-hidden aspect-square shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" 
                    alt="Research and Clinical Data"
                    className="w-full h-full object-cover"
                  />
               </div>
            </div>
         </div>
      </section>

      <section className="py-24 bg-workspace-bg">
         <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-serif font-bold text-primary mb-4">Values & Trust</h2>
               <p className="text-text-secondary max-w-2xl mx-auto italic">
                 &quot;Threadline should feel like a senior clinician you trust: calm, precise, evidence-grounded.&quot;
               </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
               {[
                 { icon: <ShieldCheck size={32} />, title: "Explainable by Design", desc: "No black boxes. Every clinical flag refers back to the specific words or actions captured in evidence." },
                 { icon: <Target size={32} />, title: "Clinician-Centred", desc: "We support clinical reasoning, not replace it. The specialist remains the ultimate decision-maker." },
                 { icon: <Users size={32} />, title: "Equity of Access", desc: "Our objective is to bring specialist capability to every GP clinic and community health hub." }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-8 rounded-2xl border border-divider">
                    <div className="text-primary mb-6">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-4 font-serif text-primary">{item.title}</h3>
                    <p className="text-text-secondary">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <section className="py-32">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif font-bold text-primary mb-8">Our Roadmap</h2>
            <div className="space-y-12 text-left mt-16 relative">
               <div className="absolute left-8 top-0 bottom-0 w-px bg-divider hidden md:block" />
               {[
                 { phase: "Validated Clinical Workflow", status: "COMPLETE", desc: "Standardisation of multimodal evidence collection for paediatric ADHD." },
                 { phase: "Clinical Validation Study", status: "IN PROGRESS", desc: "Independent multi-site study comparing Threadline formulation to gold-standard assessment." },
                 { phase: "TGA Class IIa Registration", status: "PENDING", desc: "Formal regulatory submission for Software as a Medical Device status." },
                 { phase: "National Deployment", status: "FUTURE", desc: "Expanding access to 1,000+ assessments across Australia." }
               ].map((step, i) => (
                 <div key={i} className="flex gap-8 relative items-start">
                    <div className="w-16 h-16 rounded-full bg-primary-light border-4 border-white shadow-sm flex items-center justify-center shrink-0 z-10 hidden md:flex">
                       <Typography variant="body-sm" className="font-bold text-primary">{i+1}</Typography>
                    </div>
                    <div>
                       <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-serif font-bold text-primary">{step.phase}</h3>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${step.status === 'COMPLETE' ? 'bg-emerald-100 text-emerald-800' : step.status === 'IN PROGRESS' ? 'bg-amber-100 text-amber-800' : 'bg-gray-100 text-gray-500'}`}>
                             {step.status}
                          </span>
                       </div>
                       <p className="text-text-secondary">{step.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <section className="py-24 bg-primary text-white text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-serif font-bold mb-8">Ready to support the vision?</h2>
            <div className="flex gap-4 justify-center">
               <Button size="lg" variant="brand" onClick={() => navigate('/contact')} className="rounded-full px-12">
                  Contact the Team
               </Button>
            </div>
         </div>
      </section>
    </div>
  );
}
