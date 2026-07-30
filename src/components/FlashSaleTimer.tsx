import { useState, useEffect } from 'react';
import { Zap, Timer } from 'lucide-react';

function getTimeUntilEndOfDay() {
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  const diff = end.getTime() - now.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { hours, minutes, seconds };
}

export default function FlashSaleTimer() {
  const [time, setTime] = useState(getTimeUntilEndOfDay());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeUntilEndOfDay()), 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1.5 text-accent-600 dark:text-accent-400">
        <Zap className="h-5 w-5 fill-accent-500" />
        <span className="font-display font-bold text-lg">Flash Sale</span>
      </div>
      <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
        <Timer className="h-4 w-4" />
        <div className="flex items-center gap-1 font-mono font-bold text-sm">
          <span className="flex h-7 w-8 items-center justify-center rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900">{pad(time.hours)}</span>
          <span className="text-slate-400">:</span>
          <span className="flex h-7 w-8 items-center justify-center rounded-md bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900">{pad(time.minutes)}</span>
          <span className="text-slate-400">:</span>
          <span className="flex h-7 w-8 items-center justify-center rounded-md bg-accent-500 text-white animate-pulse">{pad(time.seconds)}</span>
        </div>
      </div>
    </div>
  );
}
