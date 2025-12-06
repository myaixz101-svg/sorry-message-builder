import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

const colors = [
  'text-primary',
  'text-accent',
  'text-rose-medium',
  'text-rose-light',
];

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const newPieces: ConfettiPiece[] = [];
    for (let i = 0; i < 50; i++) {
      newPieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        size: 12 + Math.random() * 20,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setPieces(newPieces);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        >
          <Heart
            className={`${piece.color} fill-current`}
            style={{
              width: piece.size,
              height: piece.size,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Confetti;
