import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Stethoscope, 
  Zap, 
  Search, 
  Activity, 
  FileCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Button, Typography } from '../../components/ui';
import { Logo } from '../../components/shared/Logo';
import { useNavigate } from 'react-router-dom';

export function CliniciansPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen">
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-divider h-20 px-6 md:px-[60px] flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="cursor-pointer" onClick={() => navigate('/')}>
             <Logo size={36} />
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => navigate('/clinicians')} className="text-sm font-bold text-primary transition-colors border-b-2 border-primary py-1">For Clinicians</button>
            <button onClick={() => navigate('/health-systems')} className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">For Health Systems</button>
            <button onClick={() => navigate('/about')} className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">About</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate('/clients')} className="hidden sm:block">Sign In</Button>
          <Button variant="brand" onClick={() => navigate('/contact')} className="rounded-full px-6">Partner</Button>
        </div>
      </nav>

      <header className="pt-20 pb-16 bg-primary-light/20 border-b border-divider">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary font-bold text-sm mb-6 uppercase tracking-widest">
               <Stethoscope size={18} />
               <span>Clinician-Centred Support</span>
            </div>
            <h1 className="text-5xl font-serif font-bold text-primary mb-8 leading-tight">
              Evidence-structured <br /> diagnostic intelligence.
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Threadline is a clinical decision support platform, not an autonomous diagnostic tool. 
              We organise the complex multimodal signals of paediatric assessment so you can focus on reasoning.
            </p>
          </div>
        </div>
      </header>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-[60px]">
        <div className="grid md:grid-cols-2 gap-24 items-center">
           <div>
              <Typography variant="label-micro" className="text-primary uppercase mb-4 tracking-widest">The Core Insight</Typography>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Explainable Reasoners, <br />not Black Boxes.</h2>
              <p className="text-lg text-text-secondary mb-8">
                Every output in the Threadline Evidence Workspace is tracesable back to primary data. 
                Our AI highlights patterns in caregiver reports and behavioral observations, but the provenance of every signal is visible.
              </p>
              <ul className="space-y-4">
                 {[
                   "Traceability to recorded evidence",
                   "Confidence scores for each domain",
                   "Integration of teacher & caregiver data",
                   "One-click formulation notes"
                 ].map((item, i) => (
                   <li key={i} className="flex gap-4 items-center">
                      <CheckCircle2 className="text-emerald-500" size={20} />
                      <Typography variant="body-base" className="font-medium text-primary">{item}</Typography>
                   </li>
                 ))}
              </ul>
           </div>
           <div className="bg-workspace-bg rounded-3xl border border-divider p-8 shadow-inner">
              <div className="space-y-6">
                 <div className="bg-white p-4 rounded-xl border border-divider shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                       <Typography variant="label-micro" className="text-primary font-bold">ATTENTIONAL DOMAIN</Typography>
                       <span className="text-[10px] bg-secondary-balance px-2 py-0.5 rounded-full font-bold">HIGH RELEVANCE</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full mb-4">
                       <div className="w-[85%] h-full bg-emerald-500 rounded-full"></div>
                    </div>
                    <Typography variant="body-xs" className="italic text-text-secondary">
                      &quot;Frequent teacher report of difficulty staying on task during low-stimulation activities...&quot;
                    </Typography>
                 </div>
                 <div className="bg-white p-4 rounded-xl border border-divider shadow-sm opacity-60">
                    <div className="flex justify-between items-center mb-3">
                       <Typography variant="label-micro" className="text-primary font-bold">HYPERACTIVITY DOMAIN</Typography>
                       <span className="text-[10px] bg-secondary-focus px-2 py-0.5 rounded-full font-bold">MODERATE</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full grow">
                       <div className="w-[40%] h-full bg-amber-400 rounded-full"></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-6">Designed for Regulatory Rigor</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                 Threadline is being built to meet TGA Class IIa Software as a Medical Device (SaMD) requirements, 
                 ensuring clinical safety and efficacy are validated by independent review.
              </p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                 <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck size={32} />
                 </div>
                 <h3 className="text-xl font-bold mb-4 font-serif">Clinical Validation</h3>
                 <p className="text-white/60">Undergoing rigorous independent validation studies against specialist gold standards.</p>
              </div>
              <div className="text-center">
                 <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap size={32} />
                 </div>
                 <h3 className="text-xl font-bold mb-4 font-serif">Human-in-the-loop</h3>
                 <p className="text-white/60">Designed to support, not replace, clinician judgment with transparent evidence triage.</p>
              </div>
              <div className="text-center">
                 <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileCheck size={32} />
                 </div>
                 <h3 className="text-xl font-bold mb-4 font-serif">Auditable AI</h3>
                 <p className="text-white/60">Every inference is linked to source evidence for full forensic clinical audit.</p>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Join the Clinical Beta</h2>
            <p className="text-lg text-text-secondary mb-12">
               We are inviting private paediatric and psychiatric practices to trial the Threadline workflow 
               ahead of official commercial release.
            </p>
            <Button size="lg" variant="brand" onClick={() => navigate('/contact')} className="rounded-full px-12 h-14">
               Expression of Interest
            </Button>
         </div>
      </section>
    </div>
  );
}
