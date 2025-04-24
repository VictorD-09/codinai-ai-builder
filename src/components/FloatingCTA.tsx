
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingCTAProps {
  onClick: () => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ onClick }) => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show the floating CTA after scrolling down 600px
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!visible) return null;
  
  return (
    <div className="fixed bottom-6 right-6 z-50 transition-all duration-300 transform translate-y-0">
      <Button
        onClick={onClick}
        className="bg-[#F97316] hover:bg-orange-600 text-white font-bold rounded-full px-6 py-6 shadow-2xl flex items-center gap-2"
      >
        <span className="hidden md:inline">Garanta sua vaga</span>
        <span className="md:hidden">Inscrever-se</span>
        <ArrowRight size={20} />
      </Button>
    </div>
  );
};

export default FloatingCTA;
