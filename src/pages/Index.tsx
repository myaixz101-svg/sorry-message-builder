import FloatingHearts from '@/components/FloatingHearts';
import ApologyCard from '@/components/ApologyCard';
import LoveQuotes from '@/components/LoveQuotes';
import { Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-romantic relative overflow-hidden">
      {/* Floating Hearts Background */}
      <FloatingHearts />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-20">
        <Heart className="w-16 h-16 text-primary fill-primary animate-sway" />
      </div>
      <div className="absolute top-20 right-16 opacity-15">
        <Heart className="w-12 h-12 text-accent fill-accent animate-float animation-delay-500" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-20">
        <Heart className="w-10 h-10 text-primary fill-primary animate-bounce-gentle animation-delay-300" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-15">
        <Heart className="w-14 h-14 text-accent fill-accent animate-sway animation-delay-700" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center py-12">
        <ApologyCard />
        <LoveQuotes />
        
        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="font-body text-sm text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-primary fill-primary animate-heartbeat" /> just for you
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
