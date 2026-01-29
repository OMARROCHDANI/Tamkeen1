import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Scale,
  ArrowUpRight,
  Menu,
  X,
  HeartHandshake,
  Compass,
  Layout,
  Type,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? "py-4 bg-[#F2F0EB]/90 backdrop-blur-lg border-b border-stone-200/50" : "py-8 bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-serif tracking-tighter font-bold text-stone-800">
            TAMKEEN
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-700/80"></div>
        </div>

        <div className="hidden md:flex space-x-12 items-center">
          {["Our Focus", "Philosophy", "Connect"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-[10px] uppercase tracking-[0.25em] font-semibold text-stone-500 hover:text-stone-900 transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/212620042642?text=Assalamu%20Alaikum%20I%20would%20like%20to%20get%20in%20touch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-7 py-2.5 bg-stone-800 text-[#F2F0EB] text-[10px] uppercase tracking-widest hover:bg-emerald-900 transition-all rounded-full shadow-sm">
              Contact
            </button>
          </a>
        </div>

        <button
          className="md:hidden text-stone-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-[#F2F0EB] border-b border-stone-200 p-8 flex flex-col space-y-6 md:hidden shadow-xl overflow-hidden"
          >
            {["Our Focus", "Services", "Philosophy", "Connect"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-xl font-serif text-stone-800"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
      <div className="lg:col-span-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="inline-block text-emerald-800/70 font-bold tracking-[0.4em] uppercase text-[9px] mb-8 px-3 py-1 bg-emerald-800/5 rounded-full border border-emerald-800/10">
            A Values-Driven Digital Studio
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-serif leading-[0.85] text-stone-800 mb-10 tracking-tighter">
            Digital Craft <br />
            <span className="italic text-[#A6998A]">with Purpose.</span>
          </h1>
          <p className="max-w-xl text-stone-600/90 text-lg md:text-xl leading-relaxed font-light mb-12">
            Tamkeen designs clean, high-quality websites for brands that value
            honesty and refined aesthetics over marketing noise.
          </p>
          <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10 items-start sm:items-center">
            <a
              href="https://wa.me/212620042642?text=Assalamu%20Alaikum%20I%20would%20like%20to%20get%20in%20touch"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-5 bg-stone-800 text-[#F2F0EB] px-10 py-5 rounded-full hover:bg-emerald-900 transition-all duration-700 shadow-lg shadow-stone-900/5 cursor-pointer active:scale-[0.98]"
            >
              <span className="uppercase tracking-widest text-[10px] font-bold">
                Work with us
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="lg:col-span-4 relative hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1.5 }}
          className="aspect-[3/4] bg-stone-200/50 rounded-[40px] overflow-hidden shadow-2xl relative border border-stone-300/30"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent"></div>
          <div className="absolute inset-0 opacity-[0.1] flex items-center justify-center p-16">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-emerald-900"
            >
              <path fill="currentColor" d="M50 0 L100 50 L50 100 L0 50 Z" />
            </svg>
          </div>
          <div className="absolute bottom-10 left-10 right-10 text-stone-800">
            <p className="text-base font-serif italic mb-2">
              "Simplicity is the ultimate sophistication."
            </p>
            <div className="h-[1px] w-12 bg-emerald-800/30"></div>
          </div>
        </motion.div>
      </div>
    </div>

    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')]"></div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -8 }}
    className="p-10 bg-[#F7F6F2] border border-stone-200/60 rounded-[32px] transition-all hover:shadow-xl hover:shadow-stone-900/5 group"
  >
    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 text-emerald-800 shadow-sm group-hover:bg-emerald-800 group-hover:text-white transition-all duration-500">
      <Icon size={20} strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-serif mb-4 text-stone-800 tracking-tight">
      {title}
    </h3>
    <p className="text-stone-500 text-sm leading-relaxed font-light">{desc}</p>
  </motion.div>
);

const ServicesFocus = () => (
  <section id="our-focus" className="py-32 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-4xl mb-24">
        <span className="text-[10px] uppercase tracking-[0.4em] text-emerald-800 font-bold mb-6 block">
          The Pursuit of Essence
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-stone-800 leading-[1.1] tracking-tight">
          Selective by design, <br />
          <span className="italic text-[#A6998A]">precise in execution.</span>
        </h2>
        <p className="mt-10 text-stone-500 text-lg md:text-xl leading-relaxed font-light max-w-2xl border-l border-stone-300 pl-8">
          In an age of excess, we choose restraint. Our expertise is focused on
          the few things that define a brand's soul in the digital realm.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <ServiceCard
          icon={Layout}
          title="Minimalist Web Design"
          desc="Elevating user experiences through quiet interfaces, where every element has a reason to exist."
        />
        <ServiceCard
          icon={Type}
          title="Boutique Identity"
          desc="Translating your heritage into a digital language through refined typography and balanced composition."
        />
        <ServiceCard
          icon={Compass}
          title="Ethical Stewardship"
          desc="Aligning digital growth with your core values, ensuring every interaction honors your integrity."
        />
      </div>
    </div>
  </section>
);

const Ethics = () => (
  <section id="philosophy" className="py-40 bg-[#EDEBE6] relative">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="order-2 lg:order-1">
        <div className="space-y-12">
          <div className="flex items-start space-x-6">
            <div className="mt-1 w-10 h-10 rounded-full border border-emerald-800/20 flex items-center justify-center shrink-0">
              <ShieldCheck size={18} className="text-emerald-800" />
            </div>
            <div>
              <h4 className="font-serif text-xl text-stone-800 mb-2">
                Halal Income
              </h4>
              <p className="text-stone-500 text-sm leading-relaxed font-light">
                We exclusively work on projects that are Sharia-compliant,
                ensuring every project contributes to a pure and honest
                livelihood.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="mt-1 w-10 h-10 rounded-full border border-emerald-800/20 flex items-center justify-center shrink-0">
              <Scale size={18} className="text-emerald-800" />
            </div>
            <div>
              <h4 className="font-serif text-xl text-stone-800 mb-2">
                Absolute Transparency
              </h4>
              <p className="text-stone-500 text-sm leading-relaxed font-light">
                No complex jargon or hidden steps. We are honest about our
                process, our timelines, and our capabilities.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="mt-1 w-10 h-10 rounded-full border border-emerald-800/20 flex items-center justify-center shrink-0">
              <HeartHandshake size={18} className="text-emerald-800" />
            </div>
            <div>
              <h4 className="font-serif text-xl text-stone-800 mb-2">
                Ihsan (Excellence)
              </h4>
              <p className="text-stone-500 text-sm leading-relaxed font-light">
                As a boutique studio, we treat every project with the utmost
                care, aiming for excellence in the smallest details.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 font-bold mb-6 block text-center lg:text-left">
          The Foundation
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-stone-800 tracking-tight text-center lg:text-left">
          A focused studio.
          <br /> <span className="italic text-[#A6998A]">No compromise.</span>
        </h2>
        <div className="w-16 h-[1px] bg-emerald-800/40 mt-10 mx-auto lg:mx-0"></div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section
    id="connect"
    className="py-40 bg-stone-800 text-[#F2F0EB] relative overflow-hidden"
  >
    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <span className="text-[10px] uppercase tracking-[0.5em] text-emerald-400 font-bold mb-8 block">
        New Beginnings
      </span>
      <h2 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-10 tracking-tight max-w-4xl mx-auto">
        Start your digital journey with{" "}
        <span className="text-emerald-400 italic">honesty.</span>
      </h2>
      <p className="text-stone-400 text-lg leading-relaxed max-w-xl mx-auto mb-14 font-light">
        We partner with a small number of brands and individuals who value
        quality and integrity. If this aligns with you, we welcome the
        conversation.
      </p>
      <div className="flex flex-col items-center space-y-6">
        {/* <a
          href="mailto:hello@tamkeen.studio"
          className="text-3xl font-light hover:text-emerald-400 transition-all border-b border-stone-600 pb-2"
        >
          hello@tamkeen.studio
        </a> */}
        <a
          href="https://wa.me/212620042642?text=Assalamu%20Alaikum%20I%20would%20like%20to%20get%20in%20touch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-8 px-12 py-5 bg-[#F2F0EB] text-stone-800 rounded-2xl uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-emerald-400 hover:text-white transition-all duration-500">
            Send a Message
          </button>
        </a>
      </div>
    </div>
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 blur-[150px] rounded-full"></div>
  </section>
);

const Footer = () => (
  <footer className="py-16 bg-[#F2F0EB] text-stone-400 border-t border-stone-200">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[9px] tracking-[0.3em] uppercase font-bold space-y-8 md:space-y-0">
      <div className="flex items-center space-x-4">
        <span>© 2026 TAMKEEN STUDIO.</span>
      </div>
      <div className="flex space-x-12">
        <a
          href="https://wa.me/212620042642?text=Assalamu%20Alaikum%20I%20would%20like%20to%20get%20in%20touch"
          className="hover:text-stone-800 transition-colors"
        >
          Contact
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#F2F0EB] font-sans selection:bg-emerald-800 selection:text-white scroll-smooth text-stone-800">
      <Navbar />
      <main>
        <Hero />
        <ServicesFocus />
        <Ethics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
