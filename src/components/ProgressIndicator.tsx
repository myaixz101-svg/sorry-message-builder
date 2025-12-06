import { Heart } from 'lucide-react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressIndicator = ({ currentStep, totalSteps }: ProgressIndicatorProps) => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 bg-card/80 backdrop-blur-md rounded-full px-6 py-3 shadow-romantic border border-rose-light/30">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                i + 1 <= currentStep
                  ? 'bg-primary text-primary-foreground scale-110'
                  : 'bg-secondary text-muted-foreground'
              }`}
            >
              {i + 1 <= currentStep ? (
                <Heart className="w-4 h-4 fill-current animate-heartbeat" />
              ) : (
                <span className="text-sm font-body">{i + 1}</span>
              )}
            </div>
            {i < totalSteps - 1 && (
              <div
                className={`w-6 h-0.5 mx-1 transition-all duration-500 ${
                  i + 1 < currentStep ? 'bg-primary' : 'bg-secondary'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
