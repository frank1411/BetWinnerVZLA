import React from 'react';
import { Mail, Phone, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-2">
              <a href="mailto:contact@example.com" className="flex items-center space-x-2 hover:text-yellow-500">
                <Mail className="w-5 h-5" />
                <span>contact@example.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-yellow-500">
                <Phone className="w-5 h-5" />
                <span>+1 234 567 890</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#register" className="hover:text-yellow-500">Registro</a></li>
              <li><a href="#deposits" className="hover:text-yellow-500">Depósitos</a></li>
              <li><a href="https://t.me/yourchannel" className="hover:text-yellow-500">Telegram</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-500">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} BetPro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}