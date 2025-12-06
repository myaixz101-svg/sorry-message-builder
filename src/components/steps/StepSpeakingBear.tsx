import { useState, useEffect } from 'react';
import { Heart, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import bearSorry from '@/assets/bear-sorry.png';
import bearSad from '@/assets/bear-sad.png';
import bearLove from '@/assets/bear-love.png';

interface StepSpeakingBearProps {
  onNext: () => void;
}

const sorryMessages = [
  "I'm so sorry my love...",
  "Please forgive me baby...",
  "I never meant to hurt you...",
  "You mean everything to me...",
  "I promise to be better...",
];

const StepSpeakingBear = ({ onNext }: StepSpeakingBearProps) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [muted, setMuted] = useState(false);
  const [bearImage, setBearImage] = useState(bearSorry);

  const speakMessage = (text: string) => {
    if ('speechSynthesis' in window && !muted) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1.1;
      utterance.volume = 0.8;
      
      // Try to get a female voice
      const voices = window.speechSynthesis.getVoices();
      const femaleVoice = voices.find(v => v.name.includes('Female') || v.name.includes('Samantha') || v.name.includes('Google UK English Female'));
      if (femaleVoice) utterance.voice = femaleVoice;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const playNextMessage = () => {
    const nextIndex = (currentMessage + 1) % sorryMessages.length;
    setCurrentMessage(nextIndex);
    speakMessage(sorryMessages[nextIndex]);
    
    // Cycle through bear images
    const bears = [bearSorry, bearSad, bearLove];
    setBearImage(bears[nextIndex % bears.length]);
  };

  useEffect(() => {
    // Load voices
    window.speechSynthesis?.getVoices();
    
    // Speak first message after a delay
    const timer = setTimeout(() => {
      speakMessage(sorryMessages[0]);
    }, 1000);

    return () => {
      clearTimeout(timer);
      window.speechSynthesis?.cancel();
    };
  }, []);

  return (
    <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-romantic border border-rose-light/50 text-center">
      {/* Mute Button */}
      <button
        onClick={() => {
          setMuted(!muted);
          if (!muted) window.speechSynthesis?.cancel();
        }}
        className="absolute top-4 right-4 p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
      >
        {muted ? <VolumeX className="w-5 h-5 text-muted-foreground" /> : <Volume2 className="w-5 h-5 text-primary" />}
      </button>

      {/* Animated Bear */}
      <div className="relative mb-6">
        <motion.div
          animate={isSpeaking ? {
            scale: [1, 1.05, 1],
            rotate: [-2, 2, -2],
          } : {}}
          transition={{
            duration: 0.3,
            repeat: isSpeaking ? Infinity : 0,
          }}
        >
          <img 
            src={bearImage} 
            alt="Speaking bear" 
            className="w-44 h-44 md:w-56 md:h-56 mx-auto object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* Speech Bubble */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          key={currentMessage}
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-4 py-2 shadow-lg border border-rose-light/50 min-w-[200px]"
        >
          <p className="font-script text-lg text-primary">{sorryMessages[currentMessage]}</p>
          {/* Speech bubble tail */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r border-b border-rose-light/50 rotate-45" />
        </motion.div>

        {/* Sound Waves Animation */}
        {isSpeaking && (
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1 bg-primary rounded-full"
                animate={{
                  height: ['8px', '20px', '8px'],
                }}
                transition={{
                  duration: 0.4,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Title */}
      <h1 className="font-script text-4xl md:text-5xl text-gradient mb-4 mt-8">
        Dudu Says Sorry 🐻💕
      </h1>

      {/* Tap to hear more */}
      <Button
        onClick={playNextMessage}
        variant="outline"
        className="mb-6 rounded-full border-primary/50 hover:bg-primary/10"
      >
        <Volume2 className="w-4 h-4 mr-2" />
        Tap to hear more
      </Button>

      {/* Hearts decoration */}
      <div className="flex justify-center gap-2 mb-6">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            <Heart className="w-6 h-6 text-primary fill-primary" />
          </motion.div>
        ))}
      </div>

      {/* Continue Button */}
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

export default StepSpeakingBear;
