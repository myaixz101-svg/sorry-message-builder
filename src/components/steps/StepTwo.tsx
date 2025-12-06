import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bearSad from '@/assets/bear-sad.png';

interface StepTwoProps {
  onNext: () => void;
}

const StepTwo = ({ onNext }: StepTwoProps) => {
  return (
    <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-romantic border border-rose-light/50 text-center">
      {/* Bear Image */}
      <div className="relative mb-6">
        <img 
          src={bearSad} 
          alt="Crying bear" 
          className="w-40 h-40 md:w-48 md:h-48 mx-auto animate-sway object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="font-script text-5xl md:text-6xl text-gradient mb-4">
        I'm So Sorry
      </h1>

      {/* Message */}
      <div className="space-y-4 mb-8">
        <p className="font-body text-lg text-muted-foreground leading-relaxed">
          I know I hurt you, and my heart breaks knowing I caused you pain.
        </p>
        <p className="font-body text-lg text-muted-foreground leading-relaxed">
          I was wrong, and there's no excuse for what I did. You didn't deserve that.
        </p>
        <p className="font-script text-2xl text-primary mt-4">
          Please forgive me... 💔
        </p>
      </div>

      {/* Broken Hearts Animation */}
      <div className="flex justify-center gap-3 mb-8">
        {[...Array(5)].map((_, i) => (
          <Heart 
            key={i} 
            className="w-4 h-4 text-rose-medium fill-rose-medium opacity-60"
            style={{ 
              animationDelay: `${i * 0.15}s`,
              transform: `rotate(${(i - 2) * 15}deg)`
            }}
          />
        ))}
      </div>

      {/* Button */}
      <Button 
        onClick={onNext}
        className="px-8 py-6 text-lg font-body font-semibold rounded-full bg-primary hover:bg-accent text-primary-foreground shadow-heart transition-all duration-300 hover:scale-105"
      >
        <Heart className="w-5 h-5 mr-2" />
        I Understand
      </Button>
    </div>
  );
};

export default StepTwo;
