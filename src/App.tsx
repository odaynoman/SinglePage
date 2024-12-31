import React from 'react';
import Logo from './assets/logo.svg';
import { SocialLink } from './components/SocialLink';
import { BackgroundEffects } from './components/BackgroundEffects';
import { CtaButton } from './components/CtaButton';
import { LinkedInIcon } from './components/icons/LinkedInIcon';
import { XIcon } from './components/icons/XIcon';
import { InstagramIcon } from './components/icons/InstagramIcon';

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      <BackgroundEffects />

      <div className="relative z-10 flex flex-col items-center justify-center p-4 md:p-6 text-center">
        <img 
          src={Logo} 
          alt="Logo" 
          className="w-48 md:w-64 lg:w-96 mb-8 md:mb-12 hover:scale-105 transition-transform duration-300
                     filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" 
        />
        
        <CtaButton email="hala@odayy.com" />

        <div className="flex space-x-4 md:space-x-8">
          <SocialLink href="https://www.linkedin.com/in/odaynoman/" icon={<LinkedInIcon />} label="LinkedIn" />
          <SocialLink href="https://x.com/odaynoman" icon={<XIcon />} label="X" />
          <SocialLink href="https://instagram.com/oday.noman" icon={<InstagramIcon />} label="Instagram" />
        </div>
      </div>
    </div>
  );
}

export default App;