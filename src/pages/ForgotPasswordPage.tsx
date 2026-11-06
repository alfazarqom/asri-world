import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Zap, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useStore } from '../store/StoreContext';

export default function ForgotPasswordPage() {
  const { showToast } = useStore();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!email) { setError('Alamat email wajib diisi'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Masukkan alamat email yang valid'); return; }
    setError('');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      showToast('Tautan pengaturan ulang kata sandi telah dikirim!', 'success');
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
          <h1 className="mt-4 font-display text-2xl font-bold text-slate-900 dark:text-white">Atur Ulang Kata Sandi</h1>
          <p className="mt-1.5 text-sm text-slate-500">Kami akan mengirimkan tautan untuk mengatur ulang kata sandi Anda</p>
        </div>

        <div className="card p-6 sm:p-8">
          {sent ? (
            <div className="text-center py-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-100 dark:bg-success-950 mb-4">
                <CheckCircle2 className="h-8 w-8 text-success-600 dark:text-success-400" />
              </div>
              <h2 className="font-semibold text-lg text-slate-800 dark:text-slate-100">Periksa email Anda</h2>
              <p className="mt-2 text-sm text-slate-500">
                Kami telah mengirim tautan pengaturan ulang kata sandi ke <span className="font-medium text-slate-700 dark:text-slate-300">{email}</span>
              </p>
              <button onClick={() => { setSent(false); setEmail(''); }} className="btn-outline mt-6 text-sm">
                Gunakan alamat email lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Alamat Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(''); }}
                    className={`input-field pl-11 ${error ? 'border-error-500' : ''}`}
                    placeholder="nama@email.com"
                  />
                </div>
                {error && <p className="mt-1.5 text-xs text-error-500">{error}</p>}
              </div>

              <button type="submit" disabled={loading} className="btn-primary w-full h-11">
                {loading ? 'Sending...' : <>Kirim Tautan Pengaturan Ulang <ArrowRight className="h-4 w-4" /></>}
              </button>
            </form>
          )}
        </div>

        <Link to="/login" className="mt-6 flex items-center justify-center gap-1.5 text-sm font-medium text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition">
          <ArrowLeft className="h-4 w-4" /> Kembali ke halaman masuk
        </Link>
      </div>
    </div>
  );
}
