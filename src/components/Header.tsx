import React from 'react';
import { DollarSign } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <DollarSign size={32} className="text-yellow-500" />
          <span className="text-2xl font-bold">BetPro</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#register" className="hover:text-yellow-500 transition-colors">Registro</a>
          <a href="#deposits" className="hover:text-yellow-500 transition-colors">Depósitos</a>
          <a href="#contact" className="hover:text-yellow-500 transition-colors">Contacto</a>
        </div>
      </nav>
    </header>
  );
}