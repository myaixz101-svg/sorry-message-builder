import { useState } from 'react';
import { Heart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bearLove from '@/assets/bear-love.png';

interface StepFourProps {
  onNext: () => void;
}

const promises = [
  "I promise to always listen to you",
  "I promise to be more understanding",
  "I promise to never hurt you again",
  "I promise to love you more every day",
  "I promise to be the partner you deserve",
];

const StepFour = ({ onNext }: StepFourProps) => {
  const [checkedPromises, setCheckedPromises] = useState<number[]>([]);

  const handleCheck = (index: number) => {
    if (!checkedPromises.includes(index)) {
      setCheckedPromises(prev => [...prev, index]);
    }
  };

  const allChecked = checkedPromises.length === promises.length;

  return (
    <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-romantic border border-rose-light/50 text-center">
      {/* Bear Image */}
      <div className="relative mb-6">
        <img 
          src={bearLove} 
          alt="Bears in love" 
          className="w-40 h-40 md:w-48 md:h-48 mx-auto animate-float object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="font-script text-4xl md:text-5xl text-gradient mb-2">
        My Promises To You
      </h1>
      <p className="font-body text-muted-foreground mb-6">
        Tap each promise to seal it with love ❤️
      </p>

      {/* Promises List */}
      <div className="space-y-3 mb-8">
        {promises.map((promise, index) => (
          <button
            key={index}
            onClick={() => handleCheck(index)}
            className={`w-full flex items-center gap-3 rounded-xl p-4 transition-all duration-300 border-2 ${
              checkedPromises.includes(index)
                ? 'bg-primary/10 border-primary'
                : 'bg-secondary/50 border-transparent hover:border-rose-light'
            }`}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
              checkedPromises.includes(index)
                ? 'bg-primary text-primary-foreground'
                : 'bg-rose-light'
            }`}>
              {checkedPromises.includes(index) ? (
                <Check className="w-4 h-4" />
              ) : (
                <Heart className="w-3 h-3 text-primary" />
              )}
            </div>
            <span className={`font-body text-left transition-all duration-300 ${
              checkedPromises.includes(index) ? 'text-foreground' : 'text-muted-foreground'
            }`}>
              {promise}
            </span>
          </button>
        ))}
      </div>

      {/* Button */}
      <Button 
        onClick={onNext}
        disabled={!allChecked}
        className={`px-8 py-6 text-lg font-body font-semibold rounded-full transition-all duration-300 ${
          allChecked 
            ? 'bg-primary hover:bg-accent text-primary-foreground shadow-heart hover:scale-105' 
            : 'bg-muted text-muted-foreground cursor-not-allowed'
        }`}
      >
        <Heart className="w-5 h-5 mr-2" />
        {allChecked ? "I Promise All of This" : "Check All Promises"}
      </Button>
    </div>
  );
};

export default StepFour;
