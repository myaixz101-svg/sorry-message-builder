import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  "I loved you yesterday, I love you still. I always have, I always will.",
  "In all the world, there is no heart for me like yours.",
  "I'm sorry. I'll love you forever, that's my promise.",
  "You are my today and all of my tomorrows.",
  "Every love story is beautiful, but ours is my favorite.",
];

const LoveQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-10 w-full max-w-2xl mx-auto px-4 mt-12">
      <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-rose-light/30">
        <Quote className="w-8 h-8 text-primary/60 mb-4 mx-auto" />
        <p 
          key={currentQuote}
          className="font-script text-xl md:text-2xl text-center text-foreground/80 animate-fade-in-up"
        >
          "{quotes[currentQuote]}"
        </p>
        <div className="flex justify-center gap-2 mt-6">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuote(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentQuote 
                  ? 'bg-primary w-6' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveQuotes;
