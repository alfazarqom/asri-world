import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff, Zap, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { useStore } from '../store/StoreContext';

export default function SignupPage() {
  const { login } = useStore();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; password?: string; confirmPassword?: string; agree?: string }>({});
  const [loading, setLoading] = useState(false);

  const passwordChecks = {
    length: password.length >= 6,
    upper: /[A-Z]/.test(password),
    number: /\d/.test(password),
  };

  const validate = () => {
    const e: typeof errors = {};
    if (!name.trim()) e.name = 'Name is required';
    else if (name.trim().length < 2) e.name = 'Name must be at least 2 characters';
    if (!email) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email address';
    if (!password) e.password = 'Password is required';
    else if (password.length < 6) e.password = 'Password must be at least 6 characters';
    else if (!passwordChecks.upper || !passwordChecks.number) e.password = 'Password needs an uppercase letter and a number';
    if (password !== confirmPassword) e.confirmPassword = 'Passwords do not match';
    if (!agree) e.agree = 'Please agree to the terms';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      login(email, name);
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
          <h1 className="mt-4 font-display text-2xl font-bold text-slate-900 dark:text-white">Create your account</h1>
          <p className="mt-1.5 text-sm text-slate-500">Join DigitalWorld and start shopping smarter</p>
        </div>

        <div className="card p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: undefined })); }}
                  className={`input-field pl-11 ${errors.name ? 'border-error-500' : ''}`}
                  placeholder="John Doe"
                />
              </div>
              {errors.name && <p className="mt-1.5 text-xs text-error-500">{errors.name}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setErrors((p) => ({ ...p, email: undefined })); }}
                  className={`input-field pl-11 ${errors.email ? 'border-error-500' : ''}`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <p className="mt-1.5 text-xs text-error-500">{errors.email}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setErrors((p) => ({ ...p, password: undefined })); }}
                  className={`input-field pl-11 pr-11 ${errors.password ? 'border-error-500' : ''}`}
                  placeholder="Create a password"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                  {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                </button>
              </div>
              {password && (
                <div className="mt-2 space-y-1">
                  {[
                    { ok: passwordChecks.length, label: 'At least 6 characters' },
                    { ok: passwordChecks.upper, label: 'One uppercase letter' },
                    { ok: passwordChecks.number, label: 'One number' },
                  ].map((check, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-xs">
                      {check.ok ? <CheckCircle2 className="h-3.5 w-3.5 text-success-500" /> : <XCircle className="h-3.5 w-3.5 text-slate-300 dark:text-slate-600" />}
                      <span className={check.ok ? 'text-success-600 dark:text-success-400' : 'text-slate-400'}>{check.label}</span>
                    </div>
                  ))}
                </div>
              )}
              {errors.password && <p className="mt-1.5 text-xs text-error-500">{errors.password}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value); setErrors((p) => ({ ...p, confirmPassword: undefined })); }}
                  className={`input-field pl-11 ${errors.confirmPassword ? 'border-error-500' : ''}`}
                  placeholder="Re-enter your password"
                />
              </div>
              {errors.confirmPassword && <p className="mt-1.5 text-xs text-error-500">{errors.confirmPassword}</p>}
            </div>

            <label className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 cursor-pointer">
              <input type="checkbox" checked={agree} onChange={(e) => { setAgree(e.target.checked); setErrors((p) => ({ ...p, agree: undefined })); }} className="h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500/30 mt-0.5" />
              <span>I agree to the <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">Terms of Service</a> and <a href="#" className="text-primary-600 dark:text-primary-400 hover:underline">Privacy Policy</a></span>
            </label>
            {errors.agree && <p className="text-xs text-error-500 -mt-2">{errors.agree}</p>}

            <button type="submit" disabled={loading} className="btn-primary w-full h-11">
              {loading ? 'Creating account...' : <>Create Account <ArrowRight className="h-4 w-4" /></>}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Already have an account? <Link to="/login" className="font-semibold text-primary-600 dark:text-primary-400 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
