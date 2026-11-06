import { Link } from 'react-router-dom';
import {
  Zap, Target, Eye, Award, Truck, ShieldCheck, HeadsetIcon, RotateCcw,
  TrendingUp, Users, Package, ChevronRight, ArrowRight, Sparkles, Heart,
} from 'lucide-react';

export default function Tentang KamiPage() {
  const stats = [
    { icon: Users, value: '500K+', label: 'Happy Customers' },
    { icon: Package, value: '10K+', label: 'Products Sold' },
    { icon: TrendingUp, value: '150+', label: 'Countries Served' },
    { icon: Award, value: '15+', label: 'Years in Business' },
  ];

  const values = [
    { icon: ShieldCheck, title: 'Quality First', desc: 'We rigorously test every product to ensure it meets our high standards before it reaches you.' },
    { icon: Truck, title: 'Fast & Reliable', desc: 'Free shipping on orders over $50, with express options for when you need it fast.' },
    { icon: HeadsetIcon, title: 'Always Supportive', desc: 'Our 24/7 support team is always ready to help with any question or concern.' },
    { icon: RotateCcw, title: 'Easy Returns', desc: 'Not satisfied? Return any product within 30 days for a full refund — no questions asked.' },
  ];

  return (
    <div className="container-x py-6">
      <nav className="flex items-center gap-1.5 text-sm text-slate-500 mb-6">
        <Link to="/" className="hover:text-primary-600">Beranda</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-slate-800 dark:text-slate-200 font-medium">Tentang Kami</span>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-700 via-primary-800 to-slate-900 p-8 sm:p-12 lg:p-16">
        <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-primary-400/20 blur-3xl" />
        <div className="relative z-10 max-w-2xl">
          <span className="badge bg-white/15 text-white backdrop-blur px-3 py-1">Cerita Kami</span>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl text-balance">
            Menghadirkan teknologi terbaik untuk semua orang
          </h1>
          <p className="mt-4 text-lg text-white/80 leading-relaxed">
            DigitalWorld was founded in 2011 with a simple mission: make premium technology accessible to everyone. Today, we serve over 500,000 customers across 150+ countries, offering the latest gadgets at prices that make sense.
          </p>
          <Link to="/products" className="btn-accent mt-6 group">
            Jelajahi Produk <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="card p-6 text-center hover:shadow-md transition-shadow">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 mb-3">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="font-display text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-4">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">Misi Kami</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              To democratize access to technology by offering premium products at honest prices. We believe everyone deserves to experience the best that tech has to offer — without overpaying or compromising on quality.
            </p>
          </div>
          <div className="card p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 dark:text-accent-400 mb-4">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">Visi Kami</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              To become the world's most trusted technology marketplace — where innovation meets affordability, and every customer feels confident in their purchase. We're building a future where great tech is just a click away.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mt-14">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Mengapa Memilih Kami</h2>
          <p className="mt-2 text-slate-500">Kami bukan sekadar toko teknologi biasa. Inilah keunggulan kami.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, i) => (
            <div key={i} className="card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 text-primary-600 dark:text-primary-400 mb-4">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline / journey */}
      <section className="mt-14">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Perjalanan Kami</h2>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 sm:-translate-x-1/2" />
          {[
            { year: '2011', title: 'The Beginning', desc: 'Started as a small online store with just 50 products.' },
            { year: '2015', title: 'Going Global', desc: 'Expanded to serve customers in 50+ countries worldwide.' },
            { year: '2019', title: '500K Customers', desc: 'Reached half a million happy customers with 99% satisfaction.' },
            { year: '2024', title: 'Innovation Hub', desc: 'Launched our AI-powered product recommendation engine.' },
          ].map((item, i) => (
            <div key={i} className={`relative flex items-start gap-6 mb-8 ${i % 2 === 0 ? 'sm:flex-row-reverse sm:text-right' : ''}`}>
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-white text-xs font-bold ring-4 ring-white dark:ring-slate-950 z-10">
                {i + 1}
              </div>
              <div className="ml-12 sm:ml-0 sm:w-1/2 card p-5">
                <span className="badge bg-primary-100 text-primary-700 dark:bg-primary-950 dark:text-primary-400">{item.year}</span>
                <h3 className="mt-2 font-semibold text-slate-800 dark:text-slate-100">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{item.desc}</p>
              </div>
              <div className="hidden sm:block sm:w-1/2" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14">
        <div className="rounded-3xl bg-gradient-to-r from-accent-500 to-accent-700 p-8 sm:p-12 text-center">
          <Sparkles className="mx-auto h-10 w-10 text-white mb-4" />
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Siap meningkatkan pengalaman teknologi Anda?</h2>
          <p className="mt-2 text-white/80">Bergabunglah dengan ribuan pelanggan puas dan temukan gadget favorit Anda berikutnya.</p>
          <Link to="/products" className="btn bg-white text-accent-700 hover:bg-slate-100 mt-6 group inline-flex">
            Mulai Belanja <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
