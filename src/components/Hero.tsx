import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&q=80"
          alt="Sports betting"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Maximiza tus Ganancias con Nosotros
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Únete usando nuestro código de afiliado y obtén beneficios exclusivos en tus apuestas deportivas.
        </p>
        <button 
          onClick={() => window.location.href = '#register'}
          className="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center space-x-2 hover:bg-yellow-400 transition-colors"
        >
          <span>Registrarse Ahora</span>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}