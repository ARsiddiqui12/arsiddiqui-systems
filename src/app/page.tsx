import Image from "next/image";
import {
  Briefcase,
  Code,
  Cpu,
  LineChart,
  Mail,
  MapPin,
  Menu,
  Settings,
  Smartphone,
  Terminal,
  Users,
  X
} from "lucide-react";
import ParticleNetwork from "./components/ParticleNetwork";
import RotatingBlobs from "./components/RotatingBlobs";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-brand-500/30">
      <ParticleNetwork />
      <RotatingBlobs />
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-panel border-b border-slate-200 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gradient">AR Siddiqui</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-6 lg:space-x-8">
                <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">About</a>
                <a href="#expertise" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Expertise</a>
                <a href="#services" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors">Services</a>
                <ThemeToggle />
                <a href="#contact" className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded-lg transition-colors shadow-lg shadow-brand-500/20 leading-none">Let's Talk</a>
              </div>
            </div>
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white p-2">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Added subtle gradient specifically for light mode to give better contrast to white cards */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 via-transparent to-transparent dark:hidden -z-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left animate-fade-up relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-600 dark:text-brand-300 font-medium text-sm mb-6">
                Available for New Projects
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-900 dark:text-white">
                Hi, I'm <span className="text-gradient">AR Siddiqui</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-slate-600 dark:text-slate-300 font-light mb-8 leading-relaxed">
                <span className="font-medium text-slate-900 dark:text-white">Business Systems Consultant</span> & <span className="font-medium text-slate-900 dark:text-white">Workflow Automation Specialist</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl">
                I help organizations streamline processes, optimize workflows, and improve operational efficiency by bridging technology with business strategy.
              </p>
              <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                <a href="#contact" className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-brand-500/25 flex items-center gap-2">
                  <Mail size={18} /> Get in Touch
                </a>
                <a href="#about" className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-3.5 rounded-xl font-medium transition-all flex items-center gap-2">
                  View My Work
                </a>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden glass-panel aspect-[4/5] sm:aspect-square w-full">
                <Image
                  src="/profile.jpg"
                  alt="AR Siddiqui - Business Systems Consultant"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-slate-900/80 via-transparent to-transparent"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass-panel rounded-xl p-4 flex items-center gap-4 animate-fade-up delay-200">
                <div className="bg-brand-500/20 p-3 rounded-lg text-brand-400">
                  <LineChart size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">13+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 border-y border-slate-200 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold tracking-widest text-slate-500 uppercase mb-8">Trusted Roles & Titles</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {['Business Software Solutions', 'AI & Software Engineer', 'Head of Department', 'CTO'].map((role, i) => (
              <div key={i} className="px-6 py-3 rounded-full glass-panel text-slate-700 dark:text-slate-300 font-medium">
                {role}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center gap-2">
                  <Users className="text-brand-500 dark:text-brand-400" size={32} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-4">Cross-functional</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Managed complex teams across industries.</p>
                </div>
                <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center gap-2">
                  <Settings className="text-brand-500 dark:text-brand-400" size={32} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-4">Automated</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Transforming manual into scalable processes.</p>
                </div>
                <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center gap-2">
                  <Terminal className="text-brand-500 dark:text-brand-400" size={32} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-4">Engineering</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">13+ years leading dev teams.</p>
                </div>
                <div className="glass-panel p-6 rounded-2xl flex flex-col justify-center gap-2">
                  <Cpu className="text-brand-500 dark:text-brand-400" size={32} />
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-4">AI-Driven</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Leveraging AI tools for smarter results.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">About Me</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">Bridging technology with business strategy.</h3>
              <div className="space-y-6 text-slate-700 dark:text-slate-300">
                <p>
                  As a Business Systems Consultant and Workflow Automation Specialist, I partner with business leaders to identify bottlenecks, implement intelligent systems, and ensure technology delivers measurable business outcomes.
                </p>
                <p>
                  With over 13 years of experience leading software and ERP development teams, I have successfully managed cross-functional teams, guided complex projects, and delivered high-impact solutions across diverse industries.
                </p>
                <p>
                  I am passionate about building high-performing teams, designing efficient business systems, and leveraging AI-driven automation tools to create reliable and business-focused solutions. My approach combines strategic planning, workflow engineering, and hands-on implementation to ensure organizations achieve results faster and smarter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section id="expertise" className="py-24 bg-white/50 dark:bg-slate-900/10 backdrop-blur-sm border-y border-slate-200 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">Core Expertise</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">Skills & Technologies</h3>
            <p className="text-slate-600 dark:text-slate-400">A comprehensive toolkit spanning strategy, automation, and full-stack engineering.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Business Systems Consulting", "Workflow Automation", "Process Optimization",
              "Team Leadership", "Digital Transformation", "AI-Driven Solutions",
              "Project Management", "ERP Solutions", "Workflow Engineering",
              "Zapier", "Make.com", "n8n", "CrewAI",
              "Python", "Django", "LangChain", "OpenAI",
              "Node.js", "Next.js", "React.js",
              "REST API Design", "AWS Cloud"
            ].map((skill, index) => (
              <div key={index} className="glass-panel p-4 rounded-xl flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <div className="w-2 h-2 rounded-full bg-brand-500"></div>
                <span className="text-slate-700 dark:text-slate-200 font-medium text-sm sm:text-base">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-600 dark:text-brand-400 font-semibold tracking-wide uppercase text-sm mb-3">What I Do</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">Comprehensive Services</h3>
            <p className="text-slate-600 dark:text-slate-400">Delivering end-to-end solutions that transform operational efficiency and drive growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Custom Software Development", icon: <Code className="w-6 h-6" />, desc: "Tailored applications built to solve your unique business challenges." },
              { title: "Business Consulting", icon: <Briefcase className="w-6 h-6" />, desc: "Strategic advice to align your technology with your organizational goals." },
              { title: "Application Development", icon: <Smartphone className="w-6 h-6" />, desc: "High-performance web and mobile apps using modern frameworks." },
              { title: "Project Management", icon: <Users className="w-6 h-6" />, desc: "Agile leadership guiding complex migrations and technical projects." },
              { title: "Cloud Development", icon: <Settings className="w-6 h-6" />, desc: "Scalable cloud-native applications deployed on AWS infrastructure." },
              { title: "IT Consulting & Support", icon: <Terminal className="w-6 h-6" />, desc: "Technical guidance and ongoing management for critical systems." },
            ].map((service, index) => (
              <div key={index} className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6 border border-slate-200 dark:border-slate-700">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Removed static background since we have dynamic blobs now */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="glass-panel p-12 md:p-16 rounded-3xl border-brand-500/30">
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">Ready to Automate Your Success?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how customized workflows and strategic software solutions can transform your business operations.
            </p>
            <a href="mailto:contact@example.com" className="inline-flex items-center justify-center gap-3 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-xl text-lg font-medium transition-all shadow-lg shadow-brand-500/25">
              <Mail size={24} /> Contact Me Today
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-gradient">AR Siddiqui</div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} AR Siddiqui. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Social Links Placeholders */}
            <a href="https://www.linkedin.com/in/ar-siddiqui/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
