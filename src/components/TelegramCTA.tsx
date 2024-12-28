import React from 'react';
import { Send } from 'lucide-react';

export default function TelegramCTA() {
  return (
    <section className="bg-blue-600 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <Send className="w-16 h-16 mx-auto mb-6" />
        <h2 className="text-3xl font-bold mb-4">¡Únete a Nuestra Comunidad en Telegram!</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Recibe picks exclusivos, consejos y las mejores promociones directamente en tu teléfono.
        </p>
        <a
          href="https://t.me/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center space-x-2 hover:bg-gray-100 transition-colors"
        >
          <Send className="w-5 h-5" />
          <span>Unirse al Canal de Telegram</span>
        </a>
      </div>
    </section>
  );
}