import { useState } from 'react';
import { Mail, Telepon, MapPin, Send, MessageSquare, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/StoreContext';

export default function KontakPage() {
  const { showToast } = useStore();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Nama wajib diisi';
    if (!form.email) e.email = 'Alamat email wajib diisi';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Alamat email tidak valid';
    if (!form.subject.trim()) e.subject = 'Subjek wajib diisi';
    if (!form.message.trim()) e.message = 'Pesan wajib diisi';
    else if (form.message.trim().length < 10) e.message = 'Pesan harus terdiri dari minimal 10 karakter';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setForm({ name: '', email: '', subject: '', message: '' });
      showToast('Message sent! We\'ll get back to you soon.', 'success');
    }, 800);
  };

  const update = (field: string, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: '' }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'support@digitalworld.com', href: 'mailto:support@digitalworld.com' },
    { icon: Telepon, label: 'Telepon', value: '+1 (800) 555-0199', href: 'tel:+18005550199' },
    { icon: MapPin, label: 'Alamat', value: '123 Tech Avenue, San Francisco, CA 94016', href: null },
    { icon: Clock, label: 'Jam Operasional', value: 'Senin–Jumat, 09.00–18.00 WIB', href: null },
  ];

  const faqs = [
    { q: 'Berapa lama waktu pengiriman?', a: 'Pengiriman reguler membutuhkan 5–7 hari kerja, sedangkan pengiriman ekspres membutuhkan 2–3 hari kerja.' },
    { q: 'Bagaimana kebijakan pengembalian barang?', a: 'Kami menyediakan kebijakan pengembalian barang selama 30 hari. Barang harus dalam kondisi asli.' },
    { q: 'Apakah produk dilengkapi garansi?', a: 'Ya, semua produk dilengkapi garansi produsen selama 2 tahun yang mencakup cacat dan kerusakan fungsi.' },
    { q: 'Bagaimana cara melacak pesanan?', a: 'Once your order ships, you\'ll receive a tracking link via email. You can also track it from your account.' },
  ];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div classNama="container-x py-6">
      <nav classNama="flex items-center gap-1.5 text-sm text-slate-500 mb-6">
        <Link to="/" classNama="hover:text-primary-600">Beranda</Link>
        <ChevronRight classNama="h-3.5 w-3.5" />
        <span classNama="text-slate-800 dark:text-slate-200 font-medium">Kontak</span>
      </nav>

      {/* Header */}
      <div classNama="text-center mb-10">
        <h1 classNama="font-display text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Hubungi Kami</h1>
        <p classNama="mt-2 text-slate-500 max-w-xl mx-auto">Punya pertanyaan atau membutuhkan bantuan? Hubungi kami dan kami akan merespons dalam 24 jam.</p>
      </div>

      <div classNama="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kontak info cards */}
        <div classNama="space-y-4">
          {contactInfo.map((info, i) => (
            <div key={i} classNama="card p-5 hover:shadow-md transition-shadow">
              <div classNama="flex items-start gap-4">
                <div classNama="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400">
                  <info.icon classNama="h-5.5 w-5.5" />
                </div>
                <div>
                  <p classNama="text-xs font-semibold text-slate-400 uppercase">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} classNama="text-sm font-medium text-slate-800 dark:text-slate-100 hover:text-primary-600 transition">{info.value}</a>
                  ) : (
                    <p classNama="text-sm font-medium text-slate-800 dark:text-slate-100">{info.value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Kontak form */}
        <div classNama="lg:col-span-2">
          <div classNama="card p-6 sm:p-8">
            <h2 classNama="font-semibold text-lg text-slate-800 dark:text-slate-100 mb-1 flex items-center gap-2">
              <MessageSquare classNama="h-5 w-5 text-primary-600" /> Kirim Pesan kepada Kami
            </h2>
            <p classNama="text-sm text-slate-500 mb-6">Isi formulir di bawah ini dan kami akan segera menghubungi Anda.</p>
            <form onSubmit={handleSubmit} classNama="space-y-4" noValidate>
              <div classNama="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label classNama="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Nama</label>
                  <input value={form.name} onChange={(e) => update('name', e.target.value)} classNama={`input-field ${errors.name ? 'border-error-500' : ''}`} placeholder="Nama Anda" />
                  {errors.name && <p classNama="mt-1 text-xs text-error-500">{errors.name}</p>}
                </div>
                <div>
                  <label classNama="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Email</label>
                  <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} classNama={`input-field ${errors.email ? 'border-error-500' : ''}`} placeholder="you@example.com" />
                  {errors.email && <p classNama="mt-1 text-xs text-error-500">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label classNama="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Subject</label>
                <input value={form.subject} onChange={(e) => update('subject', e.target.value)} classNama={`input-field ${errors.subject ? 'border-error-500' : ''}`} placeholder="Apa yang bisa kami bantu?" />
                {errors.subject && <p classNama="mt-1 text-xs text-error-500">{errors.subject}</p>}
              </div>
              <div>
                <label classNama="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Message</label>
                <textarea value={form.message} onChange={(e) => update('message', e.target.value)} rows={5} classNama={`input-field resize-none ${errors.message ? 'border-error-500' : ''}`} placeholder="Ceritakan lebih lanjut..." />
                {errors.message && <p classNama="mt-1 text-xs text-error-500">{errors.message}</p>}
              </div>
              <button type="submit" disabled={loading} classNama="btn-primary w-full h-11">
                {loading ? 'Sending...' : <><Send classNama="h-4 w-4" /> Kirim Pesan</>}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div classNama="mt-14">
        <h2 classNama="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Pertanyaan yang Sering Diajukan</h2>
        <div classNama="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} classNama="card overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                classNama="flex w-full items-center justify-between p-4 text-left"
              >
                <span classNama="font-semibold text-sm text-slate-800 dark:text-slate-100">{faq.q}</span>
                <ChevronRight classNama={`h-4 w-4 text-slate-400 transition-transform shrink-0 ${openFaq === i ? 'rotate-90' : ''}`} />
              </button>
              {openFaq === i && (
                <div classNama="px-4 pb-4 text-sm text-slate-600 dark:text-slate-300 animate-fade-in">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Map placeholder */}
      <div classNama="mt-14">
        <h2 classNama="font-display text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Temukan Kami</h2>
        <div classNama="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
          <iframe
            title="Lokasi DigitalWorld"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-122.45,37.74,-122.38,37.80&layer=mapnik&marker=37.7749,-122.4194"
            classNama="w-full h-[360px] border-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
