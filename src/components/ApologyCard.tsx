import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ApologyCard = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
    setTimeout(() => setShowMessage(true), 500);
  };

  return (
    <div className="relative z-10 w-full max-w-lg mx-auto px-4">
      <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-romantic border border-rose-light/50">
        {/* Main Heart */}
        <div className="flex justify-center mb-8">
          <div className="relative glow-effect">
            <Heart 
              className={`w-24 h-24 md:w-32 md:h-32 text-primary fill-primary ${isAccepted ? 'animate-heartbeat' : 'animate-bounce-gentle'}`}
            />
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-accent animate-pulse" />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-script text-5xl md:text-6xl lg:text-7xl text-center text-gradient mb-6 animate-fade-in-up">
          I'm Sorry
        </h1>

        {/* Message */}
        <div className="space-y-4 mb-8">
          <p className="font-body text-lg md:text-xl text-center text-foreground/90 animate-fade-in-up animation-delay-200">
            My dearest love,
          </p>
          <p className="font-body text-base md:text-lg text-center text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-300">
            I know I hurt you, and I'm truly sorry from the bottom of my heart. 
            You mean everything to me, and seeing you upset breaks my heart into a million pieces.
          </p>
          <p className="font-body text-base md:text-lg text-center text-muted-foreground leading-relaxed animate-fade-in-up animation-delay-500">
            Please forgive me. I promise to be better, 
            to love you more, and to never make you feel this way again.
          </p>
          <p className="font-script text-2xl md:text-3xl text-center text-primary animate-fade-in-up animation-delay-700">
            You are my everything ❤️
          </p>
        </div>

        {/* Button or Success Message */}
        {!isAccepted ? (
          <div className="flex justify-center animate-fade-in-up animation-delay-1000">
            <Button 
              onClick={handleAccept}
              className="group relative px-8 py-6 text-lg font-body font-semibold rounded-full bg-primary hover:bg-accent text-primary-foreground shadow-heart transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Heart className="w-5 h-5 mr-2 group-hover:animate-heartbeat" />
              Forgive Me?
              <Heart className="w-5 h-5 ml-2 group-hover:animate-heartbeat" />
            </Button>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Heart 
                  key={i} 
                  className="w-8 h-8 text-primary fill-primary animate-heartbeat"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            {showMessage && (
              <div className="animate-fade-in-up">
                <p className="font-script text-3xl md:text-4xl text-gradient">
                  Thank You, My Love!
                </p>
                <p className="font-body text-lg text-muted-foreground mt-2">
                  I love you more than words can say 💕
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ApologyCard;
