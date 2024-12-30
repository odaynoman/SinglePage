import React from 'react';

interface CtaButtonProps {
  email: string;
}

export function CtaButton({ email }: CtaButtonProps) {
  return (
    <a 
      href={`mailto:${email}`}
      className="group mb-8 md:mb-12 px-6 md:px-8 py-2.5 md:py-3 bg-transparent 
                border border-white/20 text-white rounded-lg
                font-medium tracking-wide transition-all duration-300
                hover:bg-white/5 hover:border-white/40
                text-sm md:text-base"
    >
      Get in Touch
    </a>
  );
}