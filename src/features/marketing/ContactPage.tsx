import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Stethoscope, 
  HeartHandshake,
  Mail,
  MapPin,
  Globe,
  ArrowRight
} from 'lucide-react';
import { Button, Typography, Input, Textarea, Select } from '../../components/ui';
import { Logo } from '../../components/shared/Logo';
import { useNavigate } from 'react-router-dom';

export function ContactPage() {
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
            <button onClick={() => navigate('/about')} className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">About</button>
          </div>
        </div>
      </nav>

      <section className="py-24 max-w-7xl mx-auto px-6 md:px-[60px]">
        <div className="grid lg:grid-cols-2 gap-24">
           <div>
              <h1 className="text-5xl font-serif font-bold text-primary mb-8">Partner with us.</h1>
              <p className="text-xl text-text-secondary mb-12">
                 Join us in building the infrastructure for specialist paediatric mental health assessment. 
                 Select the pathway that matches your interest.
              </p>
              
              <div className="space-y-6">
                 {[
                   { icon: <Stethoscope className="text-primary" />, title: "Clinical Beta Interest", desc: "For private practitioners and specialist clinics looking to trial the platform." },
                   { icon: <Building2 className="text-primary" />, title: "Institutional Partnership", desc: "For hospital networks, community health, and GP clinics evaluating system-wide deployment." },
                   { icon: <HeartHandshake className="text-primary" />, title: "Strategic & Investor", desc: "For venture capital and strategic corporate partners evaluating Threadline." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-6 p-6 rounded-2xl border border-divider hover:border-primary/20 hover:bg-primary-light/5 transition-all cursor-pointer group">
                      <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                         {item.icon}
                      </div>
                      <div>
                         <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
                         <p className="text-text-secondary text-sm">{item.desc}</p>
                      </div>
                      <div className="ml-auto flex items-center">
                         <ArrowRight className="text-divider group-hover:text-primary transition-colors" size={20} />
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="bg-workspace-bg rounded-3xl border border-divider p-8 md:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <Typography variant="label-micro">FIRST NAME</Typography>
                       <Input placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                       <Typography variant="label-micro">LAST NAME</Typography>
                       <Input placeholder="Doe" />
                    </div>
                 </div>
                 
                 <div className="space-y-2">
                    <Typography variant="label-micro">EMAIL ADDRESS</Typography>
                    <Input type="email" placeholder="jane@clinic.com" />
                 </div>
                 
                 <div className="space-y-2">
                    <Typography variant="label-micro">INTEREST PATHWAY</Typography>
                    <div className="grid grid-cols-1 gap-2">
                       <select className="flex h-10 w-full rounded-md border border-divider bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option>Clinical Beta Program</option>
                          <option>Institutional Pilot</option>
                          <option>Investor/Strategic Inquiry</option>
                          <option>General Inquiry</option>
                       </select>
                    </div>
                 </div>

                 <div className="space-y-2">
                    <Typography variant="label-micro">MESSAGE</Typography>
                    <Textarea placeholder="How can we help?" className="min-h-[120px]" />
                 </div>

                 <Button variant="brand" className="w-full h-12 rounded-full text-lg">
                    Send Expression of Interest
                 </Button>
                 
                 <p className="text-center text-xs text-text-secondary/60">
                    By submitting, you agree to our privacy policy. We will be in touch shortly.
                 </p>
              </form>
           </div>
        </div>
      </section>
    </div>
  );
}
