import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail, Linkedin, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#222220]"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#222220] pb-6 mb-16 gap-4">
        <div>
          <span className="text-xs font-mono-code uppercase tracking-widest text-[#73736F] block mb-1">
            10 / INITIATE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#E8E8E5]">
            CONTACT
          </h2>
        </div>

        <span className="font-mono-code text-xs text-[#8E8E88] uppercase tracking-wider">
          GURGAON &bull; BENGALURU &bull; GLOBAL
        </span>
      </div>

      {/* Massive LET'S TALK Typography */}
      <div className="mb-14">
        <h3 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-[#E8E8E5] leading-[0.88] select-none">
          LET&apos;S
          <br />
          TALK.
        </h3>

        <p className="mt-8 text-xl sm:text-2xl md:text-3xl font-light text-[#A3A39E] max-w-xl">
          Have a problem worth solving?
        </p>
      </div>

      {/* Interactive Action Area */}
      <div className="pt-12 border-t border-[#1e1e1c] grid grid-cols-1 lg:grid-cols-12 gap-12 items-baseline">
        {/* Big Interactive Email Button */}
        <div className="lg:col-span-8">
          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Strategy%20%26%20Growth%20Conversation`}
            className="group block p-8 md:p-12 border border-[#2a2a28] hover:border-[#E8E8E5] bg-[#161614] hover:bg-[#1a1a18] transition-all duration-300 relative overflow-hidden"
          >
            <span className="text-xs font-mono-code uppercase tracking-widest text-[#73736F] block mb-2">
              PRIMARY DIRECT CHANNEL
            </span>

            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono-code font-bold text-[#E8E8E5] break-all group-hover:text-white transition-colors">
              {PERSONAL_INFO.email}
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[#222220] pt-6">
              <span className="text-xs font-mono-code uppercase tracking-widest text-[#A3A39E]">
                CLICK TO OPEN MAIL CLIENT
              </span>
              <span className="text-sm font-bold font-mono-code uppercase tracking-wider text-[#E8E8E5] group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                GET IN TOUCH &rarr;
              </span>
            </div>
          </a>

          {/* Quick Copy email bar */}
          <div className="mt-4 flex items-center justify-between px-4 py-2 border border-[#222220] bg-[#141413] text-xs font-mono-code text-[#73736F]">
            <span>Need to paste into your notes?</span>
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 text-[#E8E8E5] hover:text-white transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY EMAIL ADDRESS</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Secondary Channels & Metadata */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 border border-[#222220] bg-[#161614] space-y-4">
            <span className="text-xs font-mono-code uppercase tracking-widest text-[#73736F] block">
              PROFESSIONAL NETWORK
            </span>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-sm font-bold text-[#E8E8E5] hover:text-white group border-b border-[#20201e] pb-3"
            >
              <span className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-[#8E8E88]" />
                linkedin.com/in/venkateshprasadh
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#73736F] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            <div className="flex items-center justify-between text-sm text-[#A3A39E] font-mono-code pt-1">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#73736F]" />
                {PERSONAL_INFO.phone}
              </span>
              <span className="text-xs text-[#73736F]">Direct</span>
            </div>
          </div>

          <div className="p-6 border border-[#222220] bg-[#161614] text-xs font-mono-code text-[#73736F] space-y-2">
            <div className="flex justify-between">
              <span>LOCATION:</span>
              <span className="text-[#C8C8C4]">Gurgaon &amp; Bengaluru</span>
            </div>
            <div className="flex justify-between">
              <span>TIMEZONE:</span>
              <span className="text-[#C8C8C4]">IST (UTC +5:30)</span>
            </div>
            <div className="flex justify-between">
              <span>RESPONSE:</span>
              <span className="text-[#C8C8C4]">&lt; 24 Hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
