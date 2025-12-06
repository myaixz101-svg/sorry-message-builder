import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StepOne from '@/components/steps/StepOne';
import StepTwo from '@/components/steps/StepTwo';
import StepThree from '@/components/steps/StepThree';
import StepFour from '@/components/steps/StepFour';
import StepFive from '@/components/steps/StepFive';
import FloatingHearts from '@/components/FloatingHearts';
import ProgressIndicator from '@/components/ProgressIndicator';

const TOTAL_STEPS = 5;

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne onNext={handleNext} />;
      case 2:
        return <StepTwo onNext={handleNext} />;
      case 3:
        return <StepThree onNext={handleNext} />;
      case 4:
        return <StepFour onNext={handleNext} />;
      case 5:
        return <StepFive />;
      default:
        return <StepOne onNext={handleNext} />;
    }
  };

  return (
    <div className="min-h-screen bg-romantic relative overflow-hidden">
      <FloatingHearts />
      
      {/* Progress Indicator */}
      <ProgressIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center py-16 px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full max-w-lg"
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
