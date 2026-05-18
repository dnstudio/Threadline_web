import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Scale, 
  TrendingUp,
  BarChart3,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { Button, Typography } from '../../components/ui';
import { Logo } from '../../components/shared/Logo';
import { useNavigate } from 'react-router-dom';

export function HealthSystemsPage() {
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
            <button onClick={() => navigate('/health-systems')} className="text-sm font-bold text-primary transition-colors border-b-2 border-primary py-1">For Health Systems</button>
            <button onClick={() => navigate('/about')} className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">About</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate('/clients')} className="hidden sm:block">Sign In</Button>
          <Button variant="brand" onClick={() => navigate('/contact')} className="rounded-full px-6">Partner</Button>
        </div>
      </nav>

      <header className="pt-20 pb-16 bg-secondary-balance/10 border-b border-divider">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-primary font-bold text-sm mb-6 uppercase tracking-widest">
               <Building2 size={18} />
               <span>Institutional Solutions</span>
            </div>
            <h1 className="text-5xl font-serif font-bold text-primary mb-8 leading-tight">
              Scaling specialist-quality <br /> assessment capability.
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Threadline enables hospital networks and community health services to standardise formulation 
              and extend specialist reach to rural and regional communities.
            </p>
          </div>
        </div>
      </header>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-[60px]">
        <div className="grid md:grid-cols-3 gap-12 text-center">
           {[
             { icon: <TrendingUp className="text-primary" />, title: "Diagnostic Throughput", desc: "Reduce wait-times by streamlining multimodal evidence collection before the first specialist session." },
             { icon: <Scale className="text-primary" />, title: "Clinical Standards", desc: "Reduce diagnostic variability by anchoring formulation in a structured, evidence-first framework." },
             { icon: <MapPin className="text-primary" />, title: "Geographic Equity", desc: "Deliver specialist-grade assessment workflows in under-served regional settings via remote capture." }
           ].map((item, i) => (
             <div key={i} className="p-8 rounded-2xl bg-white border border-divider shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                   {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-primary">{item.title}</h3>
                <p className="text-text-secondary">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl font-serif font-bold mb-8">Built for Health Systems</h2>
                 <p className="text-xl text-white/70 mb-12">
                   Managing the surge in ADHD referrals requires a shift from workforce-only strategies 
                   to infrastructure-led solutions that protect clinical standard.
                 </p>
                 <div className="space-y-6">
                   {[
                     "Secure, TGA-aligned evidence pipelines",
                     "Integrated reporting for referring GPs",
                     "Session-ready clinician workspaces",
                     "Service-wide data & throughput analytics"
                   ].map((feat, i) => (
                     <div key={i} className="flex gap-4 items-center">
                        <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                           <div className="w-1.5 h-1.5 rounded-full bg-secondary-balance" />
                        </div>
                        <span className="font-medium">{feat}</span>
                     </div>
                   ))}
                 </div>
              </div>
              <div className="relative">
                 <div className="aspect-[4/3] bg-white/5 rounded-3xl border border-white/10 p-12 flex flex-col justify-center gap-8">
                    <div className="space-y-2">
                       <Typography variant="label-micro" className="text-white/50">AVERAGE WAIT TIME REDUCTION</Typography>
                       <div className="flex items-end gap-2">
                          <span className="text-5xl font-serif font-bold text-secondary-balance">40%</span>
                          <Typography variant="body-sm" className="mb-2">Target Improvement</Typography>
                       </div>
                    </div>
                    <div className="w-full h-px bg-white/10" />
                    <div className="space-y-2">
                       <Typography variant="label-micro" className="text-white/50">SERVICE THROUGHPUT</Typography>
                       <div className="flex items-end gap-2">
                          <span className="text-5xl font-serif font-bold text-secondary-balance">2x</span>
                          <Typography variant="body-sm" className="mb-2">Assessment Efficiency</Typography>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <section className="py-24">
         <div className="max-center max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Discuss Institutional Partnership</h2>
            <p className="text-lg text-text-secondary mb-12">
               We are currently identifying hospital networks and community health services for 
               large-scale clinical validation pilots.
            </p>
            <Button size="lg" variant="brand" onClick={() => navigate('/contact')} className="rounded-full px-12 h-14">
               Begin Consultation
            </Button>
         </div>
      </section>
    </div>
  );
}
