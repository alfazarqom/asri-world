import type { Product, Review } from '../types';

const makeReview = (author: string, rating: number, date: string, title: string, comment: string, verified = true): Review => ({
  id: Math.random().toString(36).slice(2),
  author, rating, date, title, comment, verified,
});

const reviewsPool: Review[] = [
  makeReview('Sarah Mitchell', 5, '2026-06-12', 'Exceeded my expectations', 'Absolutely love this product. The build quality is premium and it works flawlessly. Would buy again.'),
  makeReview('James Carter', 4, '2026-05-28', 'Great value for money', 'Solid product overall. A few minor things could be improved but nothing deal-breaking.'),
  makeReview('Priya Sharma', 5, '2026-05-15', 'Highly recommend!', 'Fast delivery and the product is exactly as described. Performance has been outstanding.'),
  makeReview('David Chen', 4, '2026-04-30', 'Good but pricey', 'Quality is undeniable but it\'s on the expensive side. Still, you get what you pay for.'),
  makeReview('Emily Rodriguez', 5, '2026-04-18', 'Best purchase this year', 'I was skeptical at first but this has become an essential part of my daily routine.'),
  makeReview('Michael Brown', 3, '2026-04-02', 'Decent, has room to improve', 'Does the job but I expected a bit more for the price point. Customer service was helpful though.'),
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
    description: 'The iPhone 16 Pro Max pushes the boundaries of what a smartphone can do. Featuring the A18 Pro chip, a stunning 6.9-inch Super Retina XDR display with ProMotion, a 48MP triple camera system with Camera Control, and titanium design. The most powerful iPhone ever.',
    features: ['6.9" Super Retina XDR ProMotion', '48MP Triple Camera System', 'A18 Pro Chip', '33hr Video Playback', '5G Connectivity', '256GB Storage', 'Titanium Design', 'USB-C with USB 3'],
    specs: [
      { label: 'Display', value: '6.9" OLED 120Hz ProMotion' },
      { label: 'Chip', value: 'Apple A18 Pro' },
      { label: 'RAM', value: '8GB' },
      { label: 'Storage', value: '256GB' },
      { label: 'Camera', value: '48MP Fusion + 12MP Ultra Wide + 12MP 5x Telephoto' },
      { label: 'Battery', value: '33hr video playback' },
      { label: 'OS', value: 'iOS 18' },
      { label: 'Weight', value: '227g' },
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
    description: 'iPhone 15 Pro is the first iPhone with a titanium design, using the same grade 5 titanium used in spacecraft. It has the A17 Pro chip for outstanding performance, a customizable Action button, and a 12MP triple camera system with 5x optical zoom.',
    features: ['6.1" Super Retina XDR ProMotion', 'A17 Pro Chip', '12MP Triple Camera with 5x Zoom', 'Titanium Frame', 'Action Button', 'USB-C with USB 3', 'Always-On Display'],
    specs: [
      { label: 'Display', value: '6.1" OLED 120Hz ProMotion' },
      { label: 'Chip', value: 'Apple A17 Pro' },
      { label: 'RAM', value: '8GB' },
      { label: 'Storage', value: '128GB' },
      { label: 'Camera', value: '48MP Main + 12MP Ultra Wide + 12MP 5x Telephoto' },
      { label: 'Battery', value: '23hr video playback' },
      { label: 'OS', value: 'iOS 18' },
      { label: 'Weight', value: '187g' },
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
    description: 'iPhone 14 delivers an advanced dual-camera system, A15 Bionic chip, Emergency SOS via satellite, and all-day battery life. With its stunning 6.1-inch Super Retina XDR display, it perfectly balances power and everyday value.',
    features: ['6.1" Super Retina XDR Display', '12MP Dual Camera System', 'A15 Bionic Chip', 'Emergency SOS via Satellite', 'Crash Detection', 'All-Day Battery'],
    specs: [
      { label: 'Display', value: '6.1" OLED 60Hz' },
      { label: 'Chip', value: 'Apple A15 Bionic' },
      { label: 'RAM', value: '6GB' },
      { label: 'Storage', value: '128GB' },
      { label: 'Camera', value: '12MP Main + 12MP Ultra Wide' },
      { label: 'Battery', value: '20hr video playback' },
      { label: 'OS', value: 'iOS 18' },
      { label: 'Weight', value: '172g' },
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
    description: 'The MacBook Pro 16" is a creative powerhouse. Featuring a stunning 16-inch Liquid Retina XDR display, the M3 Max chip, and up to 22 hours of battery life. Built for professionals who demand the best.',
    features: ['16" Liquid Retina XDR', 'M3 Max Chip', '32GB Unified Memory', '1TB SSD', '22hr Battery Life', '1080p FaceTime Camera'],
    specs: [
      { label: 'Display', value: '16" Liquid Retina XDR' },
      { label: 'Chip', value: 'M3 Max 12-core' },
      { label: 'Memory', value: '32GB Unified' },
      { label: 'Storage', value: '1TB SSD' },
      { label: 'Graphics', value: '30-core GPU' },
      { label: 'Battery', value: '22 hours' },
      { label: 'Ports', value: '3x Thunderbolt 4' },
      { label: 'Weight', value: '2.16kg' },
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
    description: 'Dominate every game with the ASUS ROG Strix G16. Powered by the latest RTX 4070 GPU and Intel Core i9 processor, with a 240Hz QHD+ display that keeps up with the fastest action.',
    features: ['16" QHD+ 240Hz', 'RTX 4070 8GB', 'Intel Core i9-14900HX', '32GB DDR5', '1TB NVMe SSD', 'RGB Backlit Keyboard'],
    specs: [
      { label: 'Display', value: '16" QHD+ 240Hz' },
      { label: 'Processor', value: 'Intel Core i9-14900HX' },
      { label: 'RAM', value: '32GB DDR5' },
      { label: 'Storage', value: '1TB NVMe SSD' },
      { label: 'Graphics', value: 'RTX 4070 8GB' },
      { label: 'Battery', value: '90Wh' },
      { label: 'Ports', value: 'USB-C, HDMI 2.1' },
      { label: 'Weight', value: '2.3kg' },
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
    description: 'Thin, light, and ready to go. The MacBook Air 13" weighs just 1.24kg and delivers up to 18 hours of battery life with the M3 chip. Perfect for students and professionals on the move.',
    features: ['13.6" Liquid Retina', 'Apple M3 Chip', '16GB Unified Memory', '512GB SSD', '18hr Battery', '1.24kg Ultra-light'],
    specs: [
      { label: 'Display', value: '13.6" Liquid Retina' },
      { label: 'Chip', value: 'Apple M3 8-core' },
      { label: 'Memory', value: '16GB Unified' },
      { label: 'Storage', value: '512GB SSD' },
      { label: 'Graphics', value: '10-core GPU' },
      { label: 'Battery', value: '18 hours' },
      { label: 'Ports', value: '2x Thunderbolt / USB 4' },
      { label: 'Weight', value: '1.24kg' },
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
    description: 'Immerse yourself in studio-quality sound with adaptive noise cancellation. The Sony WH-1000XM5 delivers 30 hours of playback, plush memory-foam ear cushions, and crystal-clear calls with AI-enhanced mics.',
    features: ['Adaptive ANC', '30hr Battery Life', 'Hi-Res Audio LDAC', 'Multipoint Bluetooth 5.2', 'Memory Foam Cushions', 'Fast Charge (3min = 3hr)'],
    specs: [
      { label: 'Type', value: 'Over-Ear Wireless' },
      { label: 'Driver', value: '30mm Carbon Fiber' },
      { label: 'Battery', value: '30 hours (ANC on)' },
      { label: 'Bluetooth', value: '5.2 Multipoint' },
      { label: 'Charging', value: 'USB-C' },
      { label: 'Weight', value: '258g' },
      { label: 'ANC', value: 'Adaptive Hybrid' },
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
    description: 'True wireless freedom with active noise cancellation. The AirPods Pro 2 feature a compact design, IP54 water resistance, and 30 hours of total playback with the USB-C charging case.',
    features: ['Active Noise Cancellation', '30hr Total Playback', 'IP54 Water Resistant', 'Touch Controls', 'USB-C + MagSafe Charging', 'Spatial Audio'],
    specs: [
      { label: 'Type', value: 'True Wireless Earbuds' },
      { label: 'Driver', value: 'Apple Custom Driver' },
      { label: 'Battery', value: '6hr + 24hr case' },
      { label: 'Bluetooth', value: '5.3' },
      { label: 'Water Resistance', value: 'IP54' },
      { label: 'Charging', value: 'USB-C + MagSafe' },
      { label: 'ANC', value: 'Yes' },
      { label: 'Weight', value: '4.8g per bud' },
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
    description: 'Beats Studio Pro delivers premium sound with custom acoustic platform, active noise cancellation, and up to 40 hours of battery life. Designed for music lovers who demand rich, immersive audio.',
    features: ['Custom Acoustic Platform', 'Active Noise Cancellation', '40hr Battery', 'USB-C + 3.5mm', 'Spatial Audio', 'Transparency Mode'],
    specs: [
      { label: 'Type', value: 'Over-Ear Wireless' },
      { label: 'Driver', value: '40mm Custom' },
      { label: 'Battery', value: '40 hours' },
      { label: 'Connectivity', value: 'USB-C + 3.5mm' },
      { label: 'Bluetooth', value: 'Class 1 5.3' },
      { label: 'ANC', value: 'Yes' },
      { label: 'Weight', value: '260g' },
      { label: 'Charging', value: 'USB-C Fast Fuel' },
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
    description: 'The ultimate adventure companion. Apple Watch Ultra 2 features a titanium case, dual-frequency GPS, 100m water resistance, and a bright 3000-nit always-on display that\'s readable in direct sunlight.',
    features: ['Titanium Case', 'Dual-Frequency GPS', '100m Water Resistant', '3000-nit Always-On Display', '72hr Battery (Low Power)', 'ECG + Blood Oxygen'],
    specs: [
      { label: 'Case', value: '49mm Titanium' },
      { label: 'Display', value: 'LTPO OLED 3000-nit' },
      { label: 'Battery', value: '72 hours (Low Power)' },
      { label: 'Water Resistance', value: '100m (EN13319)' },
      { label: 'GPS', value: 'Dual Frequency L1/L5' },
      { label: 'Sensors', value: 'ECG, SpO2, Temp' },
      { label: 'Connectivity', value: 'LTE + WiFi + BT' },
      { label: 'Weight', value: '61g' },
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
    description: 'Your daily fitness companion. Track over 100 workouts, monitor your heart rate 24/7, and stay connected with smart notifications. With Crash Detection and Fall Detection, it keeps you safe and active.',
    features: ['100+ Workouts', '24/7 Heart Rate', 'Crash Detection', 'Sleep Tracking', 'Smart Notifications', '50m Water Resistant'],
    specs: [
      { label: 'Case', value: '44mm Aluminum' },
      { label: 'Display', value: 'LTPO OLED Retina' },
      { label: 'Battery', value: '18 hours' },
      { label: 'Water Resistance', value: '50m' },
      { label: 'Sensors', value: 'HR, Accel, Gyro' },
      { label: 'Connectivity', value: 'WiFi + BT 5.3' },
      { label: 'GPS', value: 'Built-in' },
      { label: 'Weight', value: '32g' },
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
    description: 'Professional mirrorless camera with a 24.2MP full-frame sensor, 4K60p video, and in-body image stabilization. The Canon EOS R6 Mark II delivers stunning image quality in a compact body.',
    features: ['24.2MP Full-Frame Sensor', '4K60p Video', '5-axis IBIS', '1053-point Autofocus', 'Dual SD Card Slots', 'Weather Sealed'],
    specs: [
      { label: 'Sensor', value: '24.2MP Full-Frame CMOS' },
      { label: 'Video', value: '4K 60p / FHD 120p' },
      { label: 'Stabilization', value: '5-axis IBIS 8 stops' },
      { label: 'Autofocus', value: '1053-point Dual Pixel II' },
      { label: 'ISO', value: '100-51200' },
      { label: 'Storage', value: 'Dual SD UHS-II' },
      { label: 'Viewfinder', value: '3.69M-dot OLED' },
      { label: 'Weight', value: '658g' },
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
    description: 'A versatile vlog camera with a 20-50mm wide-angle lens. Capture everything from sweeping landscapes to creative close-ups with the Sony ZV-1F. Built-in WiFi lets you share instantly.',
    features: ['20.1MP 1-inch Sensor', '20-50mm Wide Lens', '4K Video', 'Built-in WiFi', 'Vari-angle Touchscreen', 'Real-time Eye AF'],
    specs: [
      { label: 'Sensor', value: '20.1MP 1.0-type CMOS' },
      { label: 'Lens', value: '20-50mm f/2.0-4.0' },
      { label: 'Zoom', value: '2.5x Optical' },
      { label: 'Video', value: '4K 30p' },
      { label: 'Stabilization', value: 'Optical SteadyShot' },
      { label: 'Display', value: '3" Vari-angle Touch' },
      { label: 'Connectivity', value: 'WiFi + BT' },
      { label: 'Weight', value: '340g' },
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
    description: 'Never run out of power. The Anker PowerCore 20000 packs 20,000mAh of capacity with 65W USB-C PD fast charging — enough to charge a laptop, phone, and earbuds simultaneously.',
    features: ['20000mAh Capacity', '65W USB-C PD', 'Charge 3 Devices', 'LED Battery Indicator', 'Pass-Through Charging', 'Travel Safe'],
    specs: [
      { label: 'Capacity', value: '20000mAh' },
      { label: 'Output', value: '65W USB-C PD' },
      { label: 'Ports', value: '1x USB-C, 2x USB-A' },
      { label: 'Input', value: '65W USB-C' },
      { label: 'Weight', value: '350g' },
      { label: 'Dimensions', value: '152 x 78 x 22mm' },
      { label: 'Compatibility', value: 'Phones, Tablets, Laptops' },
      { label: 'Safety', value: 'Temp + Surge Protection' },
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
    description: 'A premium 75% mechanical keyboard with hot-swappable switches, per-key RGB lighting, and a CNC aluminum frame. Connect via USB-C, Bluetooth, or 2.4GHz wireless. The Keychron K2 is built for typists who demand tactile perfection.',
    features: ['Hot-Swappable Switches', 'Per-Key RGB', 'Tri-Mode Wireless', 'CNC Aluminum Frame', '75% Layout', 'PBT Keycaps'],
    specs: [
      { label: 'Layout', value: '75% (84 keys)' },
      { label: 'Switches', value: 'Hot-Swappable' },
      { label: 'Keycaps', value: 'PBT Double-shot' },
      { label: 'Connectivity', value: 'USB-C / BT / 2.4GHz' },
      { label: 'Battery', value: '4000mAh' },
      { label: 'Frame', value: 'CNC Aluminum' },
      { label: 'Lighting', value: 'Per-key RGB' },
      { label: 'Weight', value: '1.2kg' },
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
    description: 'A lightweight wireless gaming mouse with a 25,600 DPI HERO sensor, 70-hour battery, and ultra-low-latency 2.4GHz connection. The Logitech G Pro X is designed for competitive gaming and productivity.',
    features: ['25600 DPI HERO Sensor', '70hr Battery', '63g Lightweight', '2.4GHz + Bluetooth', 'PTFE Feet', 'Programmable Buttons'],
    specs: [
      { label: 'Sensor', value: '25600 DPI HERO' },
      { label: 'Weight', value: '63g' },
      { label: 'Battery', value: '70 hours' },
      { label: 'Connectivity', value: '2.4GHz / BT 5.1' },
      { label: 'Polling Rate', value: '1000Hz' },
      { label: 'Buttons', value: '6 programmable' },
      { label: 'Switches', value: 'Optical 100M clicks' },
      { label: 'Feet', value: '100% PTFE' },
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
