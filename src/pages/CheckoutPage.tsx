import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, CreditCard, Truck, MapPin, User, Mail, Phone, Check, Lock, ShoppingBag } from 'lucide-react';
import { useStore } from '../store/StoreContext';

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart, user } = useStore();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: user?.name?.split(' ')[0] || '', lastName: user?.name?.split(' ').slice(1).join(' ') || '',
    email: user?.email || '', phone: '', address: '', city: '', state: '', zip: '', country: 'United States',
    cardNumber: '', cardName: '', expiry: '', cvv: '',
    shippingMethod: 'standard',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const shippingCost = form.shippingMethod === 'express' ? 19.99 : cartTotal > 50 ? 0 : 9.99;
  const tax = cartTotal * 0.08;
  const finalTotal = cartTotal + shippingCost + tax;

  const update = (field: string, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: '' }));
  };

  const validateStep = (s: number) => {
    const e: Record<string, string> = {};
    if (s === 1) {
      if (!form.firstName) e.firstName = 'Required';
      if (!form.lastName) e.lastName = 'Required';
      if (!form.email) e.email = 'Required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
      if (!form.phone) e.phone = 'Required';
      if (!form.address) e.address = 'Required';
      if (!form.city) e.city = 'Required';
      if (!form.state) e.state = 'Required';
      if (!form.zip) e.zip = 'Required';
    }
    if (s === 3) {
      if (!form.cardNumber) e.cardNumber = 'Required';
      else if (form.cardNumber.replace(/\s/g, '').length < 16) e.cardNumber = 'Invalid card number';
      if (!form.cardName) e.cardName = 'Required';
      if (!form.expiry) e.expiry = 'Required';
      if (!form.cvv) e.cvv = 'Required';
      else if (form.cvv.length < 3) e.cvv = 'Invalid CVV';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) setStep((s) => Math.min(3, s + 1));
  };

  const handlePlaceOrder = () => {
    if (!validateStep(3)) return;
    const orderId = 'DW' + Date.now().toString().slice(-8);
    const orderData = {
      id: orderId, date: new Date().toISOString(), items: cart, total: finalTotal,
      shipping: { name: `${form.firstName} ${form.lastName}`, address: form.address, city: form.city, state: form.state, zip: form.zip },
    };
    const existing = JSON.parse(localStorage.getItem('dw_orders') || '[]');
    localStorage.setItem('dw_orders', JSON.stringify([orderData, ...existing]));
    clearCart();
    navigate('/order-confirmation', { state: { order: orderData } });
  };

  if (cart.length === 0) {
    return (
      <div className="container-x py-16">
        <div className="flex flex-col items-center justify-center text-center py-20">
          <ShoppingBag className="h-16 w-16 text-slate-300 dark:text-slate-700 mb-4" />
          <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Your cart is empty</h1>
          <p className="mt-2 text-slate-500">Add some products before checking out.</p>
          <Link to="/products" className="btn-primary mt-6">Browse Products</Link>
        </div>
      </div>
    );
  }

  const steps = ['Shipping', 'Delivery', 'Payment'];

  return (
    <div className="container-x py-6">
      <nav className="flex items-center gap-1.5 text-sm text-slate-500 mb-5">
        <Link to="/" className="hover:text-primary-600">Home</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Link to="/cart" className="hover:text-primary-600">Cart</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-slate-800 dark:text-slate-200 font-medium">Checkout</span>
      </nav>

      <h1 className="font-display text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl mb-6">Checkout</h1>

      {/* Stepper */}
      <div className="flex items-center justify-center mb-8">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-all ${step > i + 1 ? 'bg-success-500 text-white' : step === i + 1 ? 'bg-primary-600 text-white ring-4 ring-primary-500/20' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'}`}>
                {step > i + 1 ? <Check className="h-4.5 w-4.5" /> : i + 1}
              </div>
              <span className={`mt-1.5 text-xs font-medium ${step >= i + 1 ? 'text-slate-800 dark:text-slate-200' : 'text-slate-400'}`}>{label}</span>
            </div>
            {i < steps.length - 1 && <div className={`h-0.5 w-12 sm:w-24 mx-2 mt-[-20px] transition-all ${step > i + 1 ? 'bg-success-500' : 'bg-slate-200 dark:bg-slate-700'}`} />}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Step 1: Shipping */}
          {step === 1 && (
            <div className="card p-6 animate-fade-in">
              <h2 className="font-semibold text-lg text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary-600" /> Shipping Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">First Name</label>
                  <input value={form.firstName} onChange={(e) => update('firstName', e.target.value)} className={`input-field ${errors.firstName ? 'border-error-500' : ''}`} placeholder="John" />
                  {errors.firstName && <p className="mt-1 text-xs text-error-500">{errors.firstName}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Last Name</label>
                  <input value={form.lastName} onChange={(e) => update('lastName', e.target.value)} className={`input-field ${errors.lastName ? 'border-error-500' : ''}`} placeholder="Doe" />
                  {errors.lastName && <p className="mt-1 text-xs text-error-500">{errors.lastName}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                    <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} className={`input-field pl-11 ${errors.email ? 'border-error-500' : ''}`} placeholder="you@example.com" />
                  </div>
                  {errors.email && <p className="mt-1 text-xs text-error-500">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                    <input value={form.phone} onChange={(e) => update('phone', e.target.value)} className={`input-field pl-11 ${errors.phone ? 'border-error-500' : ''}`} placeholder="+1 (555) 000-0000" />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-error-500">{errors.phone}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Address</label>
                  <input value={form.address} onChange={(e) => update('address', e.target.value)} className={`input-field ${errors.address ? 'border-error-500' : ''}`} placeholder="123 Main Street, Apt 4B" />
                  {errors.address && <p className="mt-1 text-xs text-error-500">{errors.address}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">City</label>
                  <input value={form.city} onChange={(e) => update('city', e.target.value)} className={`input-field ${errors.city ? 'border-error-500' : ''}`} placeholder="San Francisco" />
                  {errors.city && <p className="mt-1 text-xs text-error-500">{errors.city}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">State / Province</label>
                  <input value={form.state} onChange={(e) => update('state', e.target.value)} className={`input-field ${errors.state ? 'border-error-500' : ''}`} placeholder="California" />
                  {errors.state && <p className="mt-1 text-xs text-error-500">{errors.state}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">ZIP / Postal Code</label>
                  <input value={form.zip} onChange={(e) => update('zip', e.target.value)} className={`input-field ${errors.zip ? 'border-error-500' : ''}`} placeholder="94016" />
                  {errors.zip && <p className="mt-1 text-xs text-error-500">{errors.zip}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Country</label>
                  <select value={form.country} onChange={(e) => update('country', e.target.value)} className="input-field cursor-pointer">
                    <option>United States</option><option>Canada</option><option>United Kingdom</option><option>Australia</option><option>Germany</option>
                  </select>
                </div>
              </div>
              <button onClick={handleNext} className="btn-primary w-full mt-6">Continue to Delivery</button>
            </div>
          )}

          {/* Step 2: Delivery */}
          {step === 2 && (
            <div className="card p-6 animate-fade-in">
              <h2 className="font-semibold text-lg text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary-600" /> Delivery Method
              </h2>
              <div className="space-y-3">
                {[
                  { id: 'standard', name: 'Standard Shipping', desc: '5-7 business days', price: cartTotal > 50 ? 0 : 9.99 },
                  { id: 'express', name: 'Express Shipping', desc: '2-3 business days', price: 19.99 },
                ].map((option) => (
                  <label key={option.id} className={`flex items-center gap-4 rounded-xl border-2 p-4 cursor-pointer transition ${form.shippingMethod === option.id ? 'border-primary-500 bg-primary-50 dark:bg-primary-950/30' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'}`}>
                    <input type="radio" name="shipping" checked={form.shippingMethod === option.id} onChange={() => update('shippingMethod', option.id)} className="h-4 w-4 text-primary-600 focus:ring-primary-500/30" />
                    <div className="flex-1">
                      <p className="font-semibold text-slate-800 dark:text-slate-100">{option.name}</p>
                      <p className="text-sm text-slate-500">{option.desc}</p>
                    </div>
                    <span className="font-bold text-slate-900 dark:text-white">{option.price === 0 ? 'Free' : `$${option.price.toFixed(2)}`}</span>
                  </label>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(1)} className="btn-outline flex-1">Back</button>
                <button onClick={() => setStep(3)} className="btn-primary flex-1">Continue to Payment</button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="card p-6 animate-fade-in">
              <h2 className="font-semibold text-lg text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary-600" /> Payment Details
              </h2>
              <div className="rounded-xl bg-primary-50 dark:bg-primary-950/30 p-3 mb-4 flex items-center gap-2 text-sm text-primary-700 dark:text-primary-400">
                <Lock className="h-4 w-4 shrink-0" /> This is a demo checkout. No real payment will be processed.
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Card Number</label>
                  <input
                    value={form.cardNumber}
                    onChange={(e) => update('cardNumber', e.target.value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim().slice(0, 19))}
                    className={`input-field ${errors.cardNumber ? 'border-error-500' : ''}`}
                    placeholder="4242 4242 4242 4242"
                    inputMode="numeric"
                  />
                  {errors.cardNumber && <p className="mt-1 text-xs text-error-500">{errors.cardNumber}</p>}
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Name on Card</label>
                  <input value={form.cardName} onChange={(e) => update('cardName', e.target.value)} className={`input-field ${errors.cardName ? 'border-error-500' : ''}`} placeholder="John Doe" />
                  {errors.cardName && <p className="mt-1 text-xs text-error-500">{errors.cardName}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">Expiry Date</label>
                    <input
                      value={form.expiry}
                      onChange={(e) => { let v = e.target.value.replace(/\D/g, ''); if (v.length >= 3) v = v.slice(0, 2) + '/' + v.slice(2, 4); update('expiry', v); }}
                      className={`input-field ${errors.expiry ? 'border-error-500' : ''}`}
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                    {errors.expiry && <p className="mt-1 text-xs text-error-500">{errors.expiry}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 block">CVV</label>
                    <input
                      value={form.cvv}
                      onChange={(e) => update('cvv', e.target.value.replace(/\D/g, '').slice(0, 4))}
                      className={`input-field ${errors.cvv ? 'border-error-500' : ''}`}
                      placeholder="123"
                      inputMode="numeric"
                    />
                    {errors.cvv && <p className="mt-1 text-xs text-error-500">{errors.cvv}</p>}
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setStep(2)} className="btn-outline flex-1">Back</button>
                <button onClick={handlePlaceOrder} className="btn-accent flex-1">
                  <Check className="h-5 w-5" /> Place Order — ${finalTotal.toFixed(2)}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order summary sidebar */}
        <div className="lg:col-span-1">
          <div className="card p-5 sticky top-32">
            <h2 className="font-semibold text-slate-800 dark:text-slate-100 mb-3">Order Summary</h2>
            <div className="space-y-2.5 max-h-64 overflow-y-auto no-scrollbar mb-3">
              {cart.map((item) => (
                <div key={item.product.id} className="flex items-center gap-3">
                  <div className="relative shrink-0">
                    <img src={item.product.images[0]} alt={item.product.name} className="h-14 w-14 rounded-lg object-cover" />
                    <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary-600 text-[10px] font-bold text-white px-1">{item.quantity}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-100 truncate">{item.product.name}</p>
                    <p className="text-xs text-slate-500">${item.product.price} x {item.quantity}</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 text-sm border-t border-slate-100 dark:border-slate-800 pt-3">
              <div className="flex justify-between text-slate-600 dark:text-slate-300"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300"><span>Shipping</span><span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span></div>
              <div className="flex justify-between text-slate-600 dark:text-slate-300"><span>Tax</span><span>${tax.toFixed(2)}</span></div>
            </div>
            <div className="flex justify-between border-t border-slate-100 dark:border-slate-800 pt-3 mt-3">
              <span className="font-semibold text-slate-800 dark:text-slate-100">Total</span>
              <span className="font-display text-xl font-bold text-slate-900 dark:text-white">${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
