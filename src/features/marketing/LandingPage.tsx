import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  BrainCircuit, 
  ShieldCheck, 
  Users, 
  Database,
  Search,
  MessageSquare,
  FileText,
  Activity,
  ChevronRight,
  Globe,
  MapPin
} from 'lucide-react';
import { Button, Typography } from '../../components/ui';
import { Logo } from '../../components/shared/Logo';
import { useNavigate } from 'react-router-dom';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white overflow-hidden">
      {/* Navigation - Marketing Version */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-divider h-20 px-6 md:px-[60px] flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Logo size={36} />
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => navigate('/clinicians')} className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">For Clinicians</button>
            <button onClick={() => navigate('/health-systems')} className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">For Health Systems</button>
            <button onClick={() => navigate('/about')} className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">About</button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/clients')} className="hidden sm:block text-sm font-medium text-text-secondary hover:text-primary mr-4">Sign In</button>
          <Button variant="brand" onClick={() => navigate('/contact')} className="rounded-full px-6">
            Partner with Us
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 md:px-[60px] max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold mb-6">
              <ShieldCheck size={14} />
              <span>Designed for TGA Class IIa SaMD</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-semibold leading-[1.1] text-primary mb-6">
              Clinician-Centred <br />
              <span className="text-primary/70 italic">Intelligence.</span>
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed mb-8 max-w-xl">
              The infrastructure that democratises expert paediatric mental health assessment. 
              We power the formulation—you make the decision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="brand" onClick={() => navigate('/contact')} className="rounded-full px-8 gap-2">
                Join the Clinical Beta <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="ghost" onClick={() => navigate('/clinicians')} className="rounded-full px-8 border border-divider">
                See the Workflow
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-divider">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
                alt="Clinician using Threadline" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              
              {/* Product Floating Elements */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md rounded-xl border border-white/20 shadow-lg flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white">
                  <BrainCircuit size={24} />
                </div>
                <div>
                  <Typography variant="label-micro" className="text-primary/60">EVIDENCE ANALYSIS</Typography>
                  <Typography variant="body-sm" className="font-semibold">Explainable Formulation Pathway</Typography>
                </div>
                <div className="ml-auto">
                    <ChevronRight className="text-primary" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Typography variant="label-micro" className="text-secondary-balance uppercase tracking-[0.2em] mb-4">The Infrastructure Gap</Typography>
              <h2 className="text-4xl font-serif font-bold mb-8 leading-tight">
                Paediatric ADHD assessment <br /> shouldn&apos;t depend on geography.
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Months of Wait-time", text: "Long windows between initial referral and first specialist appointment." },
                  { title: "Variable Pathways", text: "Inconsistent standard of evidence across different practices and regions." },
                  { title: "Inequitable Access", text: "Specialist care concentrated in major metros, leaving rural families behind." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Typography variant="body-sm" className="font-bold">{i+1}</Typography>
                    </div>
                    <div>
                      <Typography variant="body-base" className="font-bold text-white mb-1">{item.title}</Typography>
                      <Typography variant="body-sm" className="text-white/70">{item.text}</Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative lg:pl-12">
               <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 p-8 flex flex-col justify-center">
                  <Globe className="w-32 h-32 text-secondary-balance opacity-20 absolute top-0 right-0 -translate-y-1/2 translate-x-1/2" />
                  <blockquote className="text-2xl font-serif italic mb-8 relative">
                    &ldquo;Diagnosis is not just a workforce problem. It is an infrastructure problem. We build the infrastructure to change that.&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-avatar-bg" />
                    <div>
                      <Typography variant="body-sm" className="font-bold">Threadline Mission</Typography>
                      <Typography variant="body-xs" className="text-white/50">Specialist care for every child</Typography>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3-Stage Process */}
      <section className="py-24 bg-workspace-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
          <div className="text-center mb-16">
            <Typography variant="label-micro" className="text-primary uppercase tracking-[0.2em] mb-4">How it works</Typography>
            <h2 className="text-4xl font-serif font-bold text-primary">A Structured Formulation Journey</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Search className="text-primary" />, 
                title: "Evidence Gathering", 
                desc: "Multimodal data collection from caregivers, teachers, and behavioral recordings.",
                color: "bg-secondary-focus/20"
              },
              { 
                icon: <Activity className="text-primary" />, 
                title: "Evidence Workspace", 
                desc: "AI-assisted triage and organization of evidence into structured clinical domains.",
                color: "bg-secondary-balance/20"
              },
              { 
                icon: <FileText className="text-primary" />, 
                title: "Clinical Formulation", 
                desc: "Explainable pathways that support—not replace—your clinical reasoning.",
                color: "bg-secondary-mood/20"
              }
            ].map((step, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl border border-divider shadow-sm"
              >
                <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-6`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-serif">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed mb-6">{step.desc}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:gap-3 transition-all">
                  Learn more <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Visualization Imperative */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative group">
                 <div className="absolute -inset-4 bg-primary-light rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                 <div className="relative bg-white rounded-2xl border border-divider shadow-2xl overflow-hidden">
                    <div className="bg-gray-50 border-b border-divider p-4 flex items-center justify-between">
                       <div className="flex gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                          <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                       </div>
                       <Typography variant="label-micro" className="text-primary font-bold">THREADLINE WORKSPACE</Typography>
                       <div className="w-8"></div>
                    </div>
                    <div className="p-2 aspect-video bg-workspace-bg">
                       {/* Mock UI Preview */}
                       <div className="grid grid-cols-12 gap-2 h-full">
                          <div className="col-span-3 space-y-2">
                             <div className="h-20 bg-white border border-divider rounded-lg p-2">
                                <div className="w-1/2 h-2 bg-gray-100 rounded mb-2"></div>
                                <div className="w-3/4 h-2 bg-gray-50 rounded"></div>
                             </div>
                             <div className="h-20 bg-primary/5 border border-primary/10 rounded-lg p-2">
                                <div className="w-1/2 h-2 bg-primary/20 rounded mb-2"></div>
                                <div className="w-3/4 h-2 bg-primary/10 rounded"></div>
                             </div>
                          </div>
                          <div className="col-span-9 bg-white border border-divider rounded-lg p-4 relative overflow-hidden">
                             <div className="flex justify-between items-center mb-4">
                                <div className="w-1/4 h-4 bg-gray-100 rounded"></div>
                                <div className="flex gap-2">
                                   <div className="w-16 h-6 bg-secondary-balance/30 rounded-full"></div>
                                   <div className="w-16 h-6 bg-secondary-focus/30 rounded-full"></div>
                                </div>
                             </div>
                             <div className="space-y-4">
                                <div className="flex gap-3">
                                   <div className="w-10 h-10 rounded-full bg-gray-50 shrink-0"></div>
                                   <div className="space-y-2 flex-grow">
                                      <div className="w-full h-3 bg-gray-50 rounded"></div>
                                      <div className="w-5/6 h-3 bg-gray-50 rounded"></div>
                                   </div>
                                </div>
                                <div className="p-4 bg-primary-light/30 rounded-xl border border-primary/5">
                                   <div className="flex gap-2 mb-3">
                                      <ShieldCheck size={14} className="text-primary" />
                                      <div className="w-32 h-3 bg-primary/20 rounded"></div>
                                   </div>
                                   <div className="w-full h-12 bg-white/50 rounded-lg"></div>
                                </div>
                             </div>
                             {/* Floating Annotations */}
                             <motion.div 
                              animate={{ y: [0, -4, 0] }}
                              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                              className="absolute top-1/4 right-1/4 bg-white shadow-xl border border-divider p-3 rounded-lg flex items-center gap-2"
                             >
                                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                <Typography variant="body-xs" className="font-bold">High Evidence Confidence</Typography>
                             </motion.div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Typography variant="label-micro" className="text-primary uppercase tracking-[0.2em] mb-4">Explainable AI</Typography>
              <h2 className="text-4xl font-serif font-bold text-primary mb-6 leading-tight">
                See the provenance <br /> of every insight.
              </h2>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                Clinicians are sceptical of "black-box" diagnosis. Threadline exposes the reasoning chain, linking every formulation signal back to primary evidence—recordings, observations, and structured questionnaires.
              </p>
              <ul className="space-y-4">
                 {[
                   "Flagged evidence provenance links",
                   "Dynamic confidence indicators",
                   "Formulation pathway visualisations",
                   "Structured clinical notes generation"
                 ].map((feat, i) => (
                   <li key={i} className="flex gap-3 items-center text-text-secondary">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                         <ShieldCheck size={14} />
                      </div>
                      <span className="font-medium">{feat}</span>
                   </li>
                 ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & CTA */}
      <section className="py-24 bg-primary-light/30">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif font-bold text-primary mb-8">Ready to evolve your clinical workflow?</h2>
            <p className="text-xl text-text-secondary mb-12">
               We are currently accepting expressions of interest for our Clinical Beta program. 
               Join the first cohort of paediatricians and psychiatrists defining the future of assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
               <Button size="lg" variant="brand" onClick={() => navigate('/contact')} className="rounded-full px-12 h-14 text-lg">
                  Expression of Interest
               </Button>
               <Button size="lg" variant="ghost" onClick={() => navigate('/about')} className="rounded-full px-12 h-14 border border-divider bg-white">
                  Learn about TGA Pathway
               </Button>
            </div>
            
            <div className="mt-20 pt-12 border-t border-divider grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
               <div className="flex flex-col items-center gap-2">
                  <ShieldCheck size={32} />
                  <Typography variant="label-micro">Regulatory Compliance</Typography>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <Users size={32} />
                  <Typography variant="label-micro">Clinician Led</Typography>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <Database size={32} />
                  <Typography variant="label-micro">Evidence First</Typography>
               </div>
               <div className="flex flex-col items-center gap-2">
                  <Globe size={32} />
                  <Typography variant="label-micro">National Delivery</Typography>
               </div>
            </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-divider">
         <div className="max-w-7xl mx-auto px-6 md:px-[60px] flex flex-col md:flex-row justify-between items-center gap-8">
            <Logo size={28} />
            <div className="flex gap-8 text-sm text-text-secondary">
               <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
               <a href="#" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <Typography variant="code" className="text-text-secondary/50">
               © 2026 Threadline Health. specialist mental health assessment for every child.
            </Typography>
         </div>
      </footer>
    </div>
  );
}
