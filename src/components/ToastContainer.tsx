import { CheckCircle2, Info, XCircle, Heart, X } from 'lucide-react';
import { useStore } from '../store/StoreContext';

export default function ToastContainer() {
  const { toasts, dismissToast } = useStore();

  const icons = {
    success: <CheckCircle2 className="h-5 w-5 text-success-500" />,
    error: <XCircle className="h-5 w-5 text-error-500" />,
    info: <Info className="h-5 w-5 text-primary-500" />,
    wishlist: <Heart className="h-5 w-5 text-error-500 fill-error-500" />,
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2.5 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center gap-3 rounded-xl bg-white dark:bg-slate-900 px-4 py-3 shadow-lg ring-1 ring-slate-200 dark:ring-slate-800 animate-slide-in-right min-w-[280px] max-w-sm"
        >
          {icons[toast.type]}
          <p className="text-sm font-medium text-slate-700 dark:text-slate-200 flex-1">{toast.message}</p>
          <button onClick={() => dismissToast(toast.id)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition">
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
