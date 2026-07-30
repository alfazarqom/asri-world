import { useState } from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  count?: number;
  interactive?: boolean;
  onRate?: (rating: number) => void;
}

export default function Rating({ rating, size = 'sm', showCount = false, count, interactive = false, onRate }: RatingProps) {
  const sizes = { sm: 'h-3.5 w-3.5', md: 'h-4 w-4', lg: 'h-5 w-5' };
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = interactive ? hover >= star : rating >= star;
          const half = !interactive && rating >= star - 0.5 && rating < star;
          return (
            <button
              key={star}
              type="button"
              disabled={!interactive}
              onMouseEnter={() => interactive && setHover(star)}
              onMouseLeave={() => interactive && setHover(0)}
              onClick={() => interactive && onRate?.(star)}
              className={`${interactive ? 'cursor-pointer' : 'cursor-default'} relative`}
            >
              <Star className={`${sizes[size]} ${filled ? 'fill-accent-400 text-accent-400' : half ? 'fill-accent-400/50 text-accent-400' : 'fill-slate-200 text-slate-200 dark:fill-slate-700 dark:text-slate-700'}`} />
            </button>
          );
        })}
      </div>
      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
        {rating.toFixed(1)}
        {showCount && count !== undefined && ` (${count.toLocaleString()})`}
      </span>
    </div>
  );
}
