import { useState, useRef } from 'react';
import { Heart, Play, Pause, Music, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import bearLove from '@/assets/bear-love.png';

interface StepMusicProps {
  onNext: () => void;
}

const StepMusic = ({ onNext }: StepMusicProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-romantic border border-rose-light/50 text-center">
      {/* Bear Image */}
      <div className="relative mb-6">
        <img 
          src={bearLove} 
          alt="Bear with love" 
          className="w-40 h-40 md:w-48 md:h-48 mx-auto animate-bounce-gentle object-contain"
        />
      </div>

      {/* Title */}
      <h1 className="font-script text-4xl md:text-5xl text-gradient mb-4">
        Our Song 💕
      </h1>

      <p className="font-body text-foreground/80 mb-8 text-lg">
        This song reminds me of us...
      </p>

      {/* Music Player Card */}
      <div className="bg-secondary/60 rounded-2xl p-6 mb-8 border border-rose-light/30">
        {/* Album Art Style */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          <div className={`w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
            <div className="w-10 h-10 bg-card rounded-full" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Music className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>

        {/* Song Info */}
        <h3 className="font-script text-2xl text-primary mb-1">Ishaqzaade</h3>
        <p className="font-body text-muted-foreground text-sm mb-4">Javed Ali & Shreya Ghoshal</p>

        {/* Play Button */}
        <button
          onClick={togglePlay}
          className="w-16 h-16 rounded-full bg-primary hover:bg-accent text-primary-foreground flex items-center justify-center mx-auto transition-all duration-300 hover:scale-110 shadow-heart"
        >
          {isPlaying ? (
            <Pause className="w-8 h-8" />
          ) : (
            <Play className="w-8 h-8 ml-1" />
          )}
        </button>

        {/* Audio Element - Using a sample romantic track URL */}
        <audio 
          ref={audioRef} 
          loop
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        />

        {/* Volume Indicator */}
        <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground">
          <Volume2 className="w-4 h-4" />
          <div className="w-24 h-1 bg-secondary rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-primary rounded-full" />
          </div>
        </div>
      </div>

      {/* Romantic Message */}
      <p className="font-script text-xl text-primary/80 mb-6 italic">
        "Every love story is beautiful, but ours is my favorite" 💗
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

export default StepMusic;
