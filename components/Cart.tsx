
import React from 'react';
import type { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>
      
      {/* Cart Panel */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-slate-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <h2 className="text-xl font-semibold text-white">Your Cart</h2>
            <button onClick={onClose} className="p-2 rounded-full text-slate-400 hover:bg-slate-700 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-slate-400">
              <svg className="w-24 h-24 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              <p className="text-lg">Your cart is empty.</p>
              <p className="text-sm">Add items to get started.</p>
            </div>
          ) : (
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-start space-x-4 bg-slate-900 p-3 rounded-lg">
                  <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md"/>
                  <div className="flex-grow">
                    <h3 className="text-base font-medium text-white">{item.name}</h3>
                    <p className="text-sm text-slate-400">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-slate-700 rounded-md hover:bg-slate-600">-</button>
                      <span className="px-3 text-white">{item.quantity}</span>
                      <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-slate-700 rounded-md hover:bg-slate-600">+</button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-white">${(item.price * item.quantity).toFixed(2)}</p>
                     <button onClick={() => onRemoveItem(item.id)} className="text-sm text-red-500 hover:text-red-400 mt-2">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="p-4 border-t border-slate-700 bg-slate-900">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg text-slate-300">Subtotal:</span>
              <span className="text-2xl font-bold text-amber-400">${subtotal.toFixed(2)}</span>
            </div>
            <button 
              className="w-full bg-amber-500 text-slate-900 font-bold py-3 rounded-md hover:bg-amber-400 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
