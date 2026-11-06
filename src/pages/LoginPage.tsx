import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useStore } from '../store/StoreContext';

export default function LoginPage() {
  const { login } = useStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: typeof errors = {};
    if (!email) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email address';
    if (!password) e.password = 'Password is required';
    else if (password.length < 6) e.password = 'Password must be at least 6 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      login(email);
      navigate('/');
    }, 600);
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-600/30">
              <Zap className="h-6 w-6" />
            </div>
          </Link>
          <h1 className="mt-4 font-display text-2xl font-bold text-slate-900 dark:text-white">Selamat datang kembali</h1>
          <p className="mt-1.5 text-sm text-slate-500">Masuk ke akun Anda untuk melanjutkan</p>
        </div>

        <div className="card p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
                  className={`input-field pl-11 ${errors.email ? 'border-error-500 focus:border-error-500 focus:ring-error-500/30' : ''}`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <p className="mt-1.5 text-xs text-error-500">{errors.email}</p>}
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                <Link to="/forgot-password" className="text-xs font-medium text-primary-600 dark:text-primary-400 hover:underline">Lupa kata sandi?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: undefined })); }}
                  className={`input-field pl-11 pr-11 ${errors.password ? 'border-error-500 focus:border-error-500 focus:ring-error-500/30' : ''}`}
                  placeholder="Enter your password"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                  {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                </button>
              </div>
              {errors.password && <p className="mt-1.5 text-xs text-error-500">{errors.password}</p>}
            </div>

            <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500/30" />
              Remember me
            </label>

            <button type="submit" disabled={loading} className="btn-primary w-full h-11">
              {loading ? 'Sedang masuk...' : <>Sign In <ArrowRight className="h-4 w-4" /></>}
            </button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200 dark:border-slate-800" /></div>
            <div className="relative flex justify-center"><span className="bg-white dark:bg-slate-900 px-3 text-xs text-slate-400">or</span></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="btn-outline !py-2.5 text-sm" onClick={() => { login('demo.user@digitalworld.com', 'Demo User'); navigate('/'); }}>
              <span className="font-bold text-primary-600">D</span> Masuk Demo
            </button>
            <Link to="/signup" className="btn-outline !py-2.5 text-sm">Create Account</Link>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an account? <Link to="/signup" className="font-semibold text-primary-600 dark:text-primary-400 hover:underline">Daftar gratis</Link>
        </p>
      </div>
    </div>
  );
}
