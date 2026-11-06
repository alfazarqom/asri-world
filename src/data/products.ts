import type { Product, Review } from '../types';

const makeReview = (author: string, rating: number, date: string, title: string, comment: string, verified = true): Review => ({
  id: Math.random().toString(36).slice(2),
  author, rating, date, title, comment, verified,
});

const reviewsPool: Review[] = [
  makeReview('Sarah Mitchell', 5, '2026-06-12', 'Melebihi Ekspektasi', 'Saya sangat menyukai produk ini. Kualitas pembuatannya premium dan berfungsi dengan sempurna. Saya akan membelinya lagi.'),
  makeReview('James Carter', 4, '2026-05-28', 'Sangat Sepadan dengan Harganya', 'Secara keseluruhan produk ini sangat baik. Ada beberapa hal kecil yang bisa ditingkatkan, tetapi tidak mengganggu penggunaan.'),
  makeReview('Priya Sharma', 5, '2026-05-15', 'Sangat Direkomendasikan!', 'Pengiriman cepat dan produk sesuai deskripsi. Performanya sangat memuaskan.'),
  makeReview('David Chen', 4, '2026-04-30', 'Bagus, tetapi Harganya Cukup Tinggi', 'Quality is undeniable but it\'s on the expensive side. Still, you get what you pay for.'),
  makeReview('Emily Rodriguez', 5, '2026-04-18', 'Pembelian Terbaik Tahun Ini', 'Awalnya saya ragu, tetapi produk ini kini menjadi bagian penting dari rutinitas harian saya.'),
  makeReview('Michael Brown', 3, '2026-04-02', 'Cukup Baik, Masih Bisa Ditingkatkan', 'Produk ini berfungsi dengan baik, tetapi saya mengharapkan lebih untuk harganya. Layanan pelanggannya cukup membantu.'),
];

export const products: Product[] = [
  // ===== MOBILES =====
  {
    id: 'm1', name: 'iPhone 16 Pro Max', brand: 'Apple', category: 'mobiles',
    price: 1199, originalPrice: 1399, rating: 4.8, reviewCount: 1243, stock: 24,
    images: [
      'https://images.pexels.com/photos/11120516/pexels-photo-11120516.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/14979013/pexels-photo-14979013.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/947407/pexels-photo-947407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'iPhone 16 Pro Max menghadirkan kemampuan smartphone ke tingkat yang lebih tinggi. Dilengkapi chip A18 Pro, layar Super Retina XDR 6,9 inci dengan ProMotion, sistem tiga kamera 48 MP dengan Kontrol Kamera, serta desain titanium. Inilah iPhone paling bertenaga.',
    features: ['Layar Super Retina XDR ProMotion 6,9 inci', 'Sistem Tiga Kamera 48 MP', 'Chip A18 Pro', 'Pemutaran Video hingga 33 Jam', 'Konektivitas 5G', 'Penyimpanan 256 GB', 'Desain Titanium', 'USB-C dengan USB 3'],
    specs: [
      { label: 'Layar', value: '6.9" OLED 120Hz ProMotion' },
      { label: 'Prosesor', value: 'Apple A18 Pro' },
      { label: 'RAM', value: '8GB' },
      { label: 'Penyimpanan', value: '256GB' },
      { label: 'Kamera', value: '48MP Fusion + 12MP Ultra Wide + 12MP 5x Telephoto' },
      { label: 'Baterai', value: '33hr video playback' },
      { label: 'OS', value: 'iOS 18' },
      { label: 'Berat', value: '227g' },
    ],
    reviews: reviewsPool.slice(0, 4),
    tags: ['featured', 'bestseller', 'deal'],
    colors: ['Black Titanium', 'White Titanium', 'Natural Titanium', 'Desert Titanium'],
  },
  {
    id: 'm2', name: 'iPhone 15 Pro', brand: 'Apple', category: 'mobiles',
    price: 899, originalPrice: 1099, rating: 4.6, reviewCount: 876, stock: 41,
    images: [
      'https://images.pexels.com/photos/17984647/pexels-photo-17984647.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/9403817/pexels-photo-9403817.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/1796469/pexels-photo-1796469.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'iPhone 15 Pro adalah iPhone pertama dengan desain titanium yang menggunakan titanium kelas 5 seperti pada wahana antariksa. Dilengkapi chip A17 Pro untuk performa unggul, tombol Aksi yang dapat disesuaikan, serta sistem tiga kamera 12 MP dengan zoom optik 5x.',
    features: ['Layar Super Retina XDR ProMotion 6,1 inci', 'Chip A17 Pro', 'Tiga Kamera 12 MP dengan Zoom 5x', 'Rangka Titanium', 'Tombol Aksi', 'USB-C dengan USB 3', 'Layar Selalu Aktif'],
    specs: [
      { label: 'Layar', value: '6.1" OLED 120Hz ProMotion' },
      { label: 'Prosesor', value: 'Apple A17 Pro' },
      { label: 'RAM', value: '8GB' },
      { label: 'Penyimpanan', value: '128GB' },
      { label: 'Kamera', value: '48MP Main + 12MP Ultra Wide + 12MP 5x Telephoto' },
      { label: 'Baterai', value: '23hr video playback' },
      { label: 'OS', value: 'iOS 18' },
      { label: 'Berat', value: '187g' },
    ],
    reviews: reviewsPool.slice(2, 5),
    tags: ['new', 'flash'],
    colors: ['Black Titanium', 'White Titanium', 'Blue Titanium', 'Natural Titanium'],
  },
  {
    id: 'm3', name: 'iPhone 14', brand: 'Apple', category: 'mobiles',
    price: 599, originalPrice: 799, rating: 4.3, reviewCount: 521, stock: 78,
    images: [
      'https://images.pexels.com/photos/8473285/pexels-photo-8473285.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/947407/pexels-photo-947407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'iPhone 14 menghadirkan sistem kamera ganda canggih, chip A15 Bionic, fitur SOS Darurat melalui satelit, dan daya tahan baterai sepanjang hari. Layar Super Retina XDR 6,1 inci memberikan perpaduan performa dan nilai terbaik untuk kebutuhan sehari-hari.',
    features: ['Layar Super Retina XDR 6,1 inci', 'Sistem Kamera Ganda 12 MP', 'Chip A15 Bionic', 'SOS Darurat melalui Satelit', 'Deteksi Tabrakan', 'Baterai Sepanjang Hari'],
    specs: [
      { label: 'Layar', value: '6.1" OLED 60Hz' },
      { label: 'Prosesor', value: 'Apple A15 Bionic' },
      { label: 'RAM', value: '6GB' },
      { label: 'Penyimpanan', value: '128GB' },
      { label: 'Kamera', value: '12MP Main + 12MP Ultra Wide' },
      { label: 'Baterai', value: '20hr video playback' },
      { label: 'OS', value: 'iOS 18' },
      { label: 'Berat', value: '172g' },
    ],
    reviews: reviewsPool.slice(1, 4),
    tags: ['deal'],
    colors: ['Midnight', 'Starlight', 'Blue', 'Purple', 'Red'],
  },

  // ===== LAPTOPS =====
  {
    id: 'l1', name: 'MacBook Pro 16"', brand: 'Apple', category: 'laptops',
    price: 2499, originalPrice: 2799, rating: 4.9, reviewCount: 634, stock: 12,
    images: [
      'https://images.pexels.com/photos/18311089/pexels-photo-18311089.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/12200696/pexels-photo-12200696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/211856/pexels-photo-211856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'MacBook Pro 16 inci adalah perangkat andalan untuk pekerjaan kreatif. Dilengkapi layar Liquid Retina XDR 16 inci, chip M3 Max, dan daya tahan baterai hingga 22 jam. Dirancang untuk para profesional yang membutuhkan performa terbaik.',
    features: ['Liquid Retina XDR 16 inci', 'Chip M3 Max', 'Memori Terpadu 32 GB', '1TB SSD', 'Daya Tahan Baterai 22 Jam', 'Kamera FaceTime 1080p'],
    specs: [
      { label: 'Layar', value: 'Liquid Retina XDR 16 inci' },
      { label: 'Prosesor', value: 'M3 Max 12-core' },
      { label: 'Memori', value: '32GB Unified' },
      { label: 'Penyimpanan', value: '1TB SSD' },
      { label: 'Grafis', value: '30-core GPU' },
      { label: 'Baterai', value: '22 hours' },
      { label: 'Port', value: '3x Thunderbolt 4' },
      { label: 'Berat', value: '2.16kg' },
    ],
    reviews: reviewsPool.slice(0, 5),
    tags: ['featured', 'bestseller'],
    colors: ['Space Black', 'Silver'],
  },
  {
    id: 'l2', name: 'ASUS ROG Strix G16', brand: 'ASUS', category: 'laptops',
    price: 1599, originalPrice: 1899, rating: 4.7, reviewCount: 892, stock: 18,
    images: [
      'https://images.pexels.com/photos/12877898/pexels-photo-12877898.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/11982694/pexels-photo-11982694.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4225229/pexels-photo-4225229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Taklukkan setiap permainan dengan ASUS ROG Strix G16. Didukung GPU RTX 4070 terbaru dan prosesor Intel Core i9, serta layar QHD+ 240 Hz yang mampu mengikuti aksi tercepat.',
    features: ['QHD+ 240 Hz 16 inci', 'RTX 4070 8 GB', 'Intel Core i9-14900HX', '32GB DDR5', '1TB NVMe SSD', 'Keyboard dengan Lampu Latar RGB'],
    specs: [
      { label: 'Layar', value: 'QHD+ 240 Hz 16 inci' },
      { label: 'Prosesor', value: 'Intel Core i9-14900HX' },
      { label: 'RAM', value: '32GB DDR5' },
      { label: 'Penyimpanan', value: '1TB NVMe SSD' },
      { label: 'Grafis', value: 'RTX 4070 8 GB' },
      { label: 'Baterai', value: '90Wh' },
      { label: 'Port', value: 'USB-C, HDMI 2.1' },
      { label: 'Berat', value: '2.3kg' },
    ],
    reviews: reviewsPool.slice(2, 6),
    tags: ['deal', 'flash'],
    colors: ['Eclipse Black'],
  },
  {
    id: 'l3', name: 'MacBook Air 13"', brand: 'Apple', category: 'laptops',
    price: 1099, originalPrice: 1299, rating: 4.5, reviewCount: 445, stock: 33,
    images: [
      'https://images.pexels.com/photos/29765802/pexels-photo-29765802.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4533076/pexels-photo-4533076.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/2657669/pexels-photo-2657669.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Tipis, ringan, dan siap dibawa ke mana saja. MacBook Air 13 inci memiliki bobot hanya 1,24 kg dan daya tahan baterai hingga 18 jam berkat chip M3. Cocok untuk pelajar dan profesional dengan mobilitas tinggi.',
    features: ['Liquid Retina 13,6 inci', 'Chip Apple M3', '16GB Unified Memory', '512GB SSD', 'Baterai hingga 18 Jam', 'Sangat Ringan, 1,24 kg'],
    specs: [
      { label: 'Layar', value: 'Liquid Retina 13,6 inci' },
      { label: 'Prosesor', value: 'Apple M3 8-core' },
      { label: 'Memori', value: '16GB Unified' },
      { label: 'Penyimpanan', value: '512GB SSD' },
      { label: 'Grafis', value: '10-core GPU' },
      { label: 'Baterai', value: '18 hours' },
      { label: 'Port', value: '2x Thunderbolt / USB 4' },
      { label: 'Berat', value: '1.24kg' },
    ],
    reviews: reviewsPool.slice(3, 6),
    tags: ['new'],
    colors: ['Midnight', 'Starlight', 'Space Gray'],
  },

  // ===== HEADPHONES =====
  {
    id: 'h1', name: 'Sony WH-1000XM5', brand: 'Sony', category: 'headphones',
    price: 399, originalPrice: 499, rating: 4.8, reviewCount: 2103, stock: 56,
    images: [
      'https://images.pexels.com/photos/9058883/pexels-photo-9058883.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/9058878/pexels-photo-9058878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/33298190/pexels-photo-33298190.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Nikmati kualitas suara setara studio dengan peredam bising adaptif. Sony WH-1000XM5 menawarkan pemutaran hingga 30 jam, bantalan telinga busa memori yang nyaman, serta panggilan jernih melalui mikrofon yang ditingkatkan dengan AI.',
    features: ['Peredam Bising Adaptif', 'Daya Tahan Baterai 30 Jam', 'Audio Resolusi Tinggi LDAC', 'Multipoint Bluetooth 5.2', 'Bantalan Busa Memori', 'Pengisian Cepat (3 Menit = 3 Jam)'],
    specs: [
      { label: 'Jenis', value: 'Over-Ear Wireless' },
      { label: 'Driver', value: '30mm Carbon Fiber' },
      { label: 'Baterai', value: '30 hours (ANC on)' },
      { label: 'Bluetooth', value: '5.2 Multipoint' },
      { label: 'Pengisian Daya', value: 'USB-C' },
      { label: 'Berat', value: '258g' },
      { label: 'Peredam Bising Aktif', value: 'Adaptive Hybrid' },
      { label: 'Codec', value: 'LDAC, AAC, SBC' },
    ],
    reviews: reviewsPool.slice(0, 6),
    tags: ['featured', 'bestseller', 'deal'],
    colors: ['Black', 'Silver'],
  },
  {
    id: 'h2', name: 'AirPods Pro 2', brand: 'Apple', category: 'headphones',
    price: 249, originalPrice: 279, rating: 4.5, reviewCount: 1567, stock: 92,
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/3394662/pexels-photo-3394662.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Nikmati kebebasan nirkabel sejati dengan peredam bising aktif. AirPods Pro 2 memiliki desain ringkas, ketahanan air IP54, dan total waktu pemutaran hingga 30 jam dengan casing pengisian daya USB-C.',
    features: ['Peredam Bising Aktif', 'Total Pemutaran 30 Jam', 'Tahan Air IP54', 'Kontrol Sentuh', 'Pengisian USB-C + MagSafe', 'Audio Spasial'],
    specs: [
      { label: 'Jenis', value: 'True Wireless Earbuds' },
      { label: 'Driver', value: 'Apple Custom Driver' },
      { label: 'Baterai', value: '6hr + 24hr case' },
      { label: 'Bluetooth', value: '5.3' },
      { label: 'Ketahanan Air', value: 'IP54' },
      { label: 'Pengisian Daya', value: 'USB-C + MagSafe' },
      { label: 'Peredam Bising Aktif', value: 'Yes' },
      { label: 'Berat', value: '4.8g per bud' },
    ],
    reviews: reviewsPool.slice(1, 5),
    tags: ['new', 'flash'],
    colors: ['White'],
  },
  {
    id: 'h3', name: 'Beats Studio Pro', brand: 'Beats', category: 'headphones',
    price: 349, originalPrice: 399, rating: 4.4, reviewCount: 312, stock: 27,
    images: [
      'https://images.pexels.com/photos/18311088/pexels-photo-18311088.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Beats Studio Pro menghadirkan suara premium melalui platform akustik khusus, peredam bising aktif, dan daya tahan baterai hingga 40 jam. Dirancang untuk pencinta musik yang menginginkan audio kaya dan imersif.',
    features: ['Platform Akustik Khusus', 'Peredam Bising Aktif', 'Baterai hingga 40 Jam', 'USB-C + 3.5mm', 'Audio Spasial', 'Mode Transparansi'],
    specs: [
      { label: 'Jenis', value: 'Over-Ear Wireless' },
      { label: 'Driver', value: '40mm Custom' },
      { label: 'Baterai', value: '40 hours' },
      { label: 'Konektivitas', value: 'USB-C + 3.5mm' },
      { label: 'Bluetooth', value: 'Class 1 5.3' },
      { label: 'Peredam Bising Aktif', value: 'Yes' },
      { label: 'Berat', value: '260g' },
      { label: 'Pengisian Daya', value: 'USB-C Fast Fuel' },
    ],
    reviews: reviewsPool.slice(2, 4),
    tags: ['deal'],
  },

  // ===== SMART WATCHES =====
  {
    id: 'w1', name: 'Apple Watch Ultra 2', brand: 'Apple', category: 'smartwatches',
    price: 799, originalPrice: 899, rating: 4.7, reviewCount: 945, stock: 38,
    images: [
      'https://images.pexels.com/photos/31541678/pexels-photo-31541678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/12564670/pexels-photo-12564670.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/11677077/pexels-photo-11677077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'The ultimate adventure companion. Apple Watch Ultra 2 features a titanium case, dual-frequency GPS, 100m water resistance, and a bright 3000-nit always-on display yang tetap terbaca di bawah sinar matahari langsung.',
    features: ['Casing Titanium', 'GPS Frekuensi Ganda', 'Tahan Air hingga 100 Meter', '3000-nit Layar Selalu Aktif', 'Baterai hingga 72 Jam (Mode Daya Rendah)', 'EKG + Oksigen Darah'],
    specs: [
      { label: 'Casing', value: '49mm Titanium' },
      { label: 'Layar', value: 'LTPO OLED 3000-nit' },
      { label: 'Baterai', value: '72 hours (Low Power)' },
      { label: 'Ketahanan Air', value: '100m (EN13319)' },
      { label: 'GPS', value: 'Dual Frequency L1/L5' },
      { label: 'Sensor', value: 'ECG, SpO2, Temp' },
      { label: 'Konektivitas', value: 'LTE + WiFi + BT' },
      { label: 'Berat', value: '61g' },
    ],
    reviews: reviewsPool.slice(0, 5),
    tags: ['featured', 'bestseller', 'flash'],
    colors: ['Natural Titanium', 'Blue Titanium', 'Black Titanium'],
  },
  {
    id: 'w2', name: 'Apple Watch SE', brand: 'Apple', category: 'smartwatches',
    price: 249, originalPrice: 299, rating: 4.4, reviewCount: 678, stock: 64,
    images: [
      'https://images.pexels.com/photos/12880803/pexels-photo-12880803.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/31541678/pexels-photo-31541678.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Pendamping kebugaran harian Anda. Lacak lebih dari 100 jenis olahraga, pantau detak jantung sepanjang waktu, dan tetap terhubung melalui notifikasi pintar. Fitur Deteksi Tabrakan dan Deteksi Jatuh membantu menjaga keamanan dan aktivitas Anda.',
    features: ['Lebih dari 100 Jenis Olahraga', 'Pemantauan Detak Jantung 24 Jam', 'Deteksi Tabrakan', 'Pelacakan Tidur', 'Notifikasi Pintar', 'Tahan Air hingga 50 Meter'],
    specs: [
      { label: 'Casing', value: '44mm Aluminum' },
      { label: 'Layar', value: 'LTPO OLED Retina' },
      { label: 'Baterai', value: '18 hours' },
      { label: 'Ketahanan Air', value: '50m' },
      { label: 'Sensor', value: 'HR, Accel, Gyro' },
      { label: 'Konektivitas', value: 'WiFi + BT 5.3' },
      { label: 'GPS', value: 'Built-in' },
      { label: 'Berat', value: '32g' },
    ],
    reviews: reviewsPool.slice(1, 4),
    tags: ['new', 'deal'],
    colors: ['Midnight', 'Starlight', 'Silver'],
  },

  // ===== CAMERAS =====
  {
    id: 'c1', name: 'Canon EOS R6 Mark II', brand: 'Canon', category: 'cameras',
    price: 2499, originalPrice: 2799, rating: 4.9, reviewCount: 423, stock: 9,
    images: [
      'https://images.pexels.com/photos/9660955/pexels-photo-9660955.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8636869/pexels-photo-8636869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/16671406/pexels-photo-16671406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Kamera mirrorless profesional dengan sensor full-frame 24,2 MP, perekaman video 4K 60p, dan stabilisasi gambar dalam bodi. Canon EOS R6 Mark II menghasilkan kualitas gambar luar biasa dalam bodi yang ringkas.',
    features: ['Sensor Full-Frame 24,2 MP', 'Video 4K 60p', 'IBIS 5 Sumbu', 'Fokus Otomatis 1.053 Titik', 'Dua Slot Kartu SD', 'Tahan Cuaca'],
    specs: [
      { label: 'Sensor', value: '24.2MP Full-Frame CMOS' },
      { label: 'Video', value: '4K 60p / FHD 120p' },
      { label: 'Stabilisasi', value: 'IBIS 5 Sumbu 8 stops' },
      { label: 'Fokus Otomatis', value: '1053-point Dual Pixel II' },
      { label: 'ISO', value: '100-51200' },
      { label: 'Penyimpanan', value: 'Dual SD UHS-II' },
      { label: 'Jendela Bidik', value: '3.69M-dot OLED' },
      { label: 'Berat', value: '658g' },
    ],
    reviews: reviewsPool.slice(0, 5),
    tags: ['featured', 'bestseller'],
    colors: ['Black'],
  },
  {
    id: 'c2', name: 'Sony ZV-1F Vlog Camera', brand: 'Sony', category: 'cameras',
    price: 549, originalPrice: 699, rating: 4.3, reviewCount: 256, stock: 22,
    images: [
      'https://images.pexels.com/photos/14346818/pexels-photo-14346818.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/8637237/pexels-photo-8637237.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/13827131/pexels-photo-13827131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Kamera vlog serbaguna dengan lensa sudut lebar 20–50 mm. Abadikan berbagai momen, mulai dari lanskap luas hingga foto jarak dekat yang kreatif dengan Sony ZV-1F. Wi-Fi bawaan memudahkan Anda berbagi hasil secara langsung.',
    features: ['Sensor 1 Inci 20,1 MP', 'Lensa Sudut Lebar 20–50 mm', 'Video 4K', 'Wi-Fi Bawaan', 'Layar Sentuh Sudut Variabel', 'Fokus Otomatis Mata Real-Time'],
    specs: [
      { label: 'Sensor', value: '20.1MP 1.0-type CMOS' },
      { label: 'Lensa', value: '20-50mm f/2.0-4.0' },
      { label: 'Zoom', value: '2.5x Optical' },
      { label: 'Video', value: '4K 30p' },
      { label: 'Stabilisasi', value: 'Optical SteadyShot' },
      { label: 'Layar', value: '3" Vari-angle Touch' },
      { label: 'Konektivitas', value: 'WiFi + BT' },
      { label: 'Berat', value: '340g' },
    ],
    reviews: reviewsPool.slice(2, 5),
    tags: ['deal', 'flash'],
  },

  // ===== ACCESSORIES =====
  {
    id: 'a1', name: 'Anker PowerCore 20000', brand: 'Anker', category: 'accessories',
    price: 59, originalPrice: 89, rating: 4.6, reviewCount: 3421, stock: 150,
    images: [
      'https://images.pexels.com/photos/4533076/pexels-photo-4533076.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/3143791/pexels-photo-3143791.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Jangan sampai kehabisan daya. Anker PowerCore 20000 memiliki kapasitas 20.000 mAh dengan pengisian cepat USB-C PD 65 W, cukup untuk mengisi daya laptop, ponsel, dan earbud secara bersamaan.',
    features: ['Kapasitas 20.000 mAh', 'USB-C PD 65 W', 'Mengisi Daya 3 Perangkat', 'Indikator Baterai LED', 'Pengisian Daya Pass-Through', 'Aman untuk Perjalanan'],
    specs: [
      { label: 'Kapasitas', value: '20000mAh' },
      { label: 'Keluaran', value: 'USB-C PD 65 W' },
      { label: 'Port', value: '1x USB-C, 2x USB-A' },
      { label: 'Masukan', value: '65W USB-C' },
      { label: 'Berat', value: '350g' },
      { label: 'Dimensi', value: '152 x 78 x 22mm' },
      { label: 'Kompatibilitas', value: 'Phones, Tablets, Laptops' },
      { label: 'Keamanan', value: 'Temp + Surge Protection' },
    ],
    reviews: reviewsPool.slice(1, 5),
    tags: ['bestseller', 'deal'],
  },
  {
    id: 'a2', name: 'Keychron K2 Wireless', brand: 'Keychron', category: 'accessories',
    price: 99, originalPrice: 139, rating: 4.5, reviewCount: 789, stock: 47,
    images: [
      'https://images.pexels.com/photos/12877898/pexels-photo-12877898.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/4225229/pexels-photo-4225229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Keyboard mekanis premium dengan tata letak 75%, switch yang dapat diganti tanpa solder, pencahayaan RGB per tombol, dan rangka aluminium CNC. Terhubung melalui USB-C, Bluetooth, atau nirkabel 2,4 GHz. Keychron K2 dirancang untuk pengguna yang mengutamakan pengalaman mengetik presisi.',
    features: ['Switch yang Dapat Diganti', 'RGB pada Setiap Tombol', 'Nirkabel Tiga Mode', 'Rangka Aluminium CNC', 'Tata Letak 75%', 'Keycap PBT'],
    specs: [
      { label: 'Tata Letak', value: '75% (84 keys)' },
      { label: 'Switch', value: 'Hot-Swappable' },
      { label: 'Tutup Tombol', value: 'PBT Double-shot' },
      { label: 'Konektivitas', value: 'USB-C / BT / 2.4GHz' },
      { label: 'Baterai', value: '4000mAh' },
      { label: 'Rangka', value: 'CNC Aluminum' },
      { label: 'Pencahayaan', value: 'Per-key RGB' },
      { label: 'Berat', value: '1.2kg' },
    ],
    reviews: reviewsPool.slice(0, 4),
    tags: ['new', 'flash'],
  },
  {
    id: 'a3', name: 'Logitech G Pro X', brand: 'Logitech', category: 'accessories',
    price: 129, originalPrice: 159, rating: 4.4, reviewCount: 534, stock: 85,
    images: [
      'https://images.pexels.com/photos/2657669/pexels-photo-2657669.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      'https://images.pexels.com/photos/3143791/pexels-photo-3143791.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    ],
    description: 'Mouse gaming nirkabel ringan dengan sensor HERO 25.600 DPI, baterai hingga 70 jam, dan koneksi 2,4 GHz dengan latensi sangat rendah. Logitech G Pro X dirancang untuk gaming kompetitif dan produktivitas.',
    features: ['Sensor HERO 25.600 DPI', 'Baterai hingga 70 Jam', 'Ringan, 63 g', '2,4 GHz + Bluetooth', 'Kaki Mouse PTFE', 'Tombol yang Dapat Diprogram'],
    specs: [
      { label: 'Sensor', value: '25600 DPI HERO' },
      { label: 'Berat', value: '63g' },
      { label: 'Baterai', value: '70 hours' },
      { label: 'Konektivitas', value: '2.4GHz / BT 5.1' },
      { label: 'Laju Polling', value: '1000Hz' },
      { label: 'Tombol', value: '6 programmable' },
      { label: 'Switch', value: 'Optical 100M clicks' },
      { label: 'Kaki Mouse', value: '100% PTFE' },
    ],
    reviews: reviewsPool.slice(1, 4),
    tags: ['deal'],
  },
];

export const getProductById = (id: string): Product | undefined => products.find((p) => p.id === id);

export const getProductsByCategory = (category: string): Product[] =>
  products.filter((p) => p.category === category);

export const getProductsByTag = (tag: Product['tags'][number]): Product[] =>
  products.filter((p) => p.tags.includes(tag));

export const searchProducts = (query: string): Product[] => {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
};
