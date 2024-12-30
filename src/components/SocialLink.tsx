import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/80 hover:text-white transform hover:scale-110 transition-all duration-300
                hover:rotate-[8deg] p-2 md:p-3"
      aria-label={label}
    >
      <div className="w-6 h-6 md:w-7 md:h-7">
        {icon}
      </div>
    </a>
  );
}