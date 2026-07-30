import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react';
import type { Product, CartItem, Toast } from '../types';
import { products, getProductById } from '../data/products';

interface StoreContextValue {
  cart: CartItem[];
  wishlist: string[];
  recentlyViewed: string[];
  toasts: Toast[];
  user: { name: string; email: string } | null;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
  isInWishlist: (productId: string) => boolean;
  toggleWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  addRecentlyViewed: (productId: string) => void;
  showToast: (message: string, type?: Toast['type']) => void;
  dismissToast: (id: string) => void;
  login: (email: string, name?: string) => void;
  logout: () => void;
}

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

function usePersistentState<T>(key: string, initial: T): [T, (v: T | ((prev: T) => T)) => void] {
  const [state, setState] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [key, state]);

  return [state, setState];
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = usePersistentState<CartItem[]>('dw_cart', []);
  const [wishlist, setWishlist] = usePersistentState<string[]>('dw_wishlist', []);
  const [recentlyViewed, setRecentlyViewed] = usePersistentState<string[]>('dw_recently_viewed', []);
  const [user, setUser] = usePersistentState<{ name: string; email: string } | null>('dw_user', null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((message: string, type: Toast['type'] = 'success') => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const addToCart = useCallback((product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`${product.name} added to cart`, 'success');
  }, [setCart, showToast]);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  }, [setCart]);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  }, [setCart]);

  const clearCart = useCallback(() => setCart([]), [setCart]);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const isInWishlist = useCallback((productId: string) => wishlist.includes(productId), [wishlist]);

  const toggleWishlist = useCallback((product: Product) => {
    setWishlist((prev) => {
      if (prev.includes(product.id)) {
        showToast(`${product.name} removed from wishlist`, 'info');
        return prev.filter((id) => id !== product.id);
      }
      showToast(`${product.name} added to wishlist`, 'wishlist');
      return [...prev, product.id];
    });
  }, [setWishlist, showToast]);

  const removeFromWishlist = useCallback((productId: string) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  }, [setWishlist]);

  const addRecentlyViewed = useCallback((productId: string) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((id) => id !== productId);
      return [productId, ...filtered].slice(0, 8);
    });
  }, [setRecentlyViewed]);

  const login = useCallback((email: string, name?: string) => {
    const userName = name || email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    setUser({ name: userName, email });
    showToast(`Welcome back, ${userName.split(' ')[0]}!`, 'success');
  }, [setUser, showToast]);

  const logout = useCallback(() => {
    setUser(null);
    showToast('You have been logged out', 'info');
  }, [setUser, showToast]);

  const value: StoreContextValue = {
    cart, wishlist, recentlyViewed, toasts, user,
    addToCart, removeFromCart, updateQuantity, clearCart,
    cartCount, cartTotal, isInWishlist, toggleWishlist, removeFromWishlist,
    addRecentlyViewed, showToast, dismissToast, login, logout,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
}

export { products, getProductById };
