import { useState } from 'react';
import { Heart, Sparkles, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bearHappy from '@/assets/bear-happy.png';
import Confetti from '@/components/Confetti';

const StepFive = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const handleNoHover = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 100 - 50;
    setNoButtonPosition({ x, y });
  };

  const handleAccept = () => {
    setIsAccepted(true);
  };

  if (isAccepted) {
    return (
      <>
        <Confetti />
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-romantic border border-rose-light/50 text-center">
          {/* Bear Image */}
          <div className="relative mb-6">
            <img 
              src={bearHappy} 
              alt="Happy celebrating bear" 
              className="w-48 h-48 md:w-56 md:h-56 mx-auto animate-bounce-gentle object-contain"
            />
            <PartyPopper className="absolute top-0 left-1/4 w-8 h-8 text-accent animate-pulse" />
            <PartyPopper className="absolute top-0 right-1/4 w-8 h-8 text-primary animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>

          {/* Title */}
          <h1 className="font-script text-5xl md:text-7xl text-gradient mb-4 animate-heartbeat">
            Thank You!
          </h1>

          {/* Message */}
          <div className="space-y-4 mb-6">
            <p className="font-body text-xl text-foreground">
              You've made me the happiest person alive!
            </p>
            <p className="font-script text-3xl text-primary">
              I Love You Forever! 💕
            </p>
          </div>

          {/* Hearts Animation */}
          <div className="flex justify-center gap-2">
            {[...Array(7)].map((_, i) => (
              <Heart 
                key={i} 
                className="w-8 h-8 text-primary fill-primary animate-heartbeat"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-romantic border border-rose-light/50 text-center">
      {/* Bear Image */}
      <div className="relative mb-6">
        <img 
          src={bearHappy} 
          alt="Happy bear" 
          className="w-40 h-40 md:w-48 md:h-48 mx-auto animate-bounce-gentle object-contain"
        />
        <Sparkles className="absolute top-2 right-1/4 w-6 h-6 text-accent animate-pulse" />
      </div>

      {/* Title */}
      <h1 className="font-script text-5xl md:text-6xl text-gradient mb-4">
        Will You Forgive Me?
      </h1>

      {/* Heart Animation */}
      <div className="flex justify-center mb-8">
        <Heart className="w-20 h-20 text-primary fill-primary animate-heartbeat" />
      </div>

      {/* Message */}
      <p className="font-body text-lg text-muted-foreground mb-8">
        I promise to love you better every single day. You mean everything to me. ❤️
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative">
        <Button 
          onClick={handleAccept}
          className="px-10 py-6 text-xl font-body font-semibold rounded-full bg-primary hover:bg-accent text-primary-foreground shadow-heart transition-all duration-300 hover:scale-110"
        >
          <Heart className="w-6 h-6 mr-2 fill-current" />
          Yes, I Forgive You!
        </Button>
        
        <Button 
          variant="outline"
          onMouseEnter={handleNoHover}
          onTouchStart={handleNoHover}
          className="px-8 py-6 text-lg font-body rounded-full border-rose-light text-muted-foreground transition-all duration-200"
          style={{ 
            transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
          }}
        >
          No
        </Button>
      </div>
    </div>
  );
};

export default StepFive;
