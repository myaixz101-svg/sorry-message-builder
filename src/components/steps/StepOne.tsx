import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bearSorry from '@/assets/bear-sorry.png';

interface StepOneProps {
  onNext: () => void;
}

const StepOne = ({ onNext }: StepOneProps) => {
  return (
    <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-romantic border border-rose-light/50 text-center">
      {/* Bear Image */}
      <div className="relative mb-6">
        <img 
          src={bearSorry} 
          alt="Sad bear holding heart" 
          className="w-40 h-40 md:w-48 md:h-48 mx-auto animate-bounce-gentle object-contain"
        />
        <Sparkles className="absolute top-0 right-1/4 w-6 h-6 text-accent animate-pulse" />
      </div>

      {/* Title */}
      <h1 className="font-script text-5xl md:text-6xl text-gradient mb-4">
        My Love...
      </h1>

      {/* Message */}
      <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
        I need to tell you something important. Please take a moment to read what's in my heart...
      </p>

      {/* Decorative Hearts */}
      <div className="flex justify-center gap-2 mb-8">
        {[...Array(3)].map((_, i) => (
          <Heart 
            key={i} 
            className="w-5 h-5 text-primary fill-primary animate-float"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>

      {/* Button */}
      <Button 
        onClick={onNext}
        className="px-8 py-6 text-lg font-body font-semibold rounded-full bg-primary hover:bg-accent text-primary-foreground shadow-heart transition-all duration-300 hover:scale-105"
      >
        <Heart className="w-5 h-5 mr-2" />
        Continue
      </Button>
    </div>
  );
};

export default StepOne;
