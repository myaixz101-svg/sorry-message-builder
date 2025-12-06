import { Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bearFlowers from '@/assets/bear-flowers.png';

interface StepThreeProps {
  onNext: () => void;
}

const reasons = [
  "Your beautiful smile that lights up my world",
  "The way you make everything better",
  "Your kindness and loving heart",
  "How you believe in me always",
  "Every moment I spend with you",
];

const StepThree = ({ onNext }: StepThreeProps) => {
  return (
    <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-romantic border border-rose-light/50 text-center">
      {/* Bear Image */}
      <div className="relative mb-6">
        <img 
          src={bearFlowers} 
          alt="Bear with flowers" 
          className="w-40 h-40 md:w-48 md:h-48 mx-auto animate-bounce-gentle object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="font-script text-4xl md:text-5xl text-gradient mb-6">
        Why I Love You
      </h1>

      {/* Reasons List */}
      <div className="space-y-3 mb-8">
        {reasons.map((reason, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 bg-secondary/50 rounded-xl p-3 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <Star className="w-5 h-5 text-accent fill-accent flex-shrink-0" />
            <span className="font-body text-foreground/90 text-left">{reason}</span>
          </div>
        ))}
      </div>

      {/* Message */}
      <p className="font-script text-xl text-primary mb-6">
        And so many more reasons... ✨
      </p>

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

export default StepThree;
