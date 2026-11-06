import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin, ArrowRight } from 'lucide-react';
import { categories } from '../data/categories';
import { useState } from 'react';
import { useStore } from '../store/StoreContext';

export default function Footer() {
  const { showToast } = useStore();
  const [email, setEmail] = useState('');

  const handleBerlangganan = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      showToast('Berlangganand! Check your inbox for updates.', 'success');
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 mt-20">
      {/* Newsletter */}
      <div className="border-b border-slate-800">
        <div className="container-x py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl font-bold text-white">Dapatkan Informasi Terbaru</h3>
              <p className="mt-1.5 text-slate-400">Berlangganan untuk mendapatkan promo eksklusif, produk terbaru, dan berita teknologi.</p>
            </div>
            <form onSubmit={handleBerlangganan} className="flex w-full max-w-md gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan alamat email Anda"
                className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 outline-none transition"
              />
              <button type="submit" className="btn-primary shrink-0">
                Berlangganan <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-x py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 text-white">
                <Zap className="h-5 w-5" />
              </div>
              <span className="font-display text-xl font-extrabold text-white">Digital<span className="text-primary-400">World</span></span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 max-w-xs leading-relaxed">
              Destinasi pilihan untuk produk teknologi premium. Kami menghadirkan gadget terbaru dengan harga terbaik, pengiriman cepat, dan layanan istimewa.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 hover:bg-primary-600 text-slate-400 hover:text-white transition-all duration-200 hover:scale-105" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Belanja</h4>
            <ul className="space-y-2.5 text-sm">
              {categories.map((cat) => (
                <li key={cat.id}><Link to={`/products?category=${cat.slug}`} className="text-slate-400 hover:text-primary-400 transition">{cat.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Perusahaan</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-slate-400 hover:text-primary-400 transition">Tentang Kami</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-primary-400 transition">Kontak</Link></li>
              <li><Link to="/orders" className="text-slate-400 hover:text-primary-400 transition">Lacak Pesanan</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-primary-400 transition">Karier</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary-400 transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-400 shrink-0" />
                <span>123 Tech Avenue, San Francisco, CA 94016</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Phone className="h-4 w-4 text-primary-400 shrink-0" />
                <a href="tel:+18005550199" className="hover:text-primary-400 transition">+1 (800) 555-0199</a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Mail className="h-4 w-4 text-primary-400 shrink-0" />
                <a href="mailto:support@digitalworld.com" className="hover:text-primary-400 transition">support@digitalworld.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} DigitalWorld. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition">Kebijakan Privasi</a>
            <a href="#" className="hover:text-slate-300 transition">Ketentuan Layanan</a>
            <a href="#" className="hover:text-slate-300 transition">Kebijakan Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
