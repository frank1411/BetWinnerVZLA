import React from 'react';
import { CreditCard, Wallet, Building2, HelpCircle } from 'lucide-react';

export default function Deposits() {
  return (
    <section className="py-16 bg-white" id="deposits">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Métodos de Depósito</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <CreditCard className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Tarjetas de Crédito</h3>
            <p className="text-gray-600">Visa, Mastercard y más</p>
          </div>
          <div className="text-center">
            <Building2 className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Transferencia Bancaria</h3>
            <p className="text-gray-600">Transferencia directa a tu cuenta</p>
          </div>
          <div className="text-center">
            <Wallet className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-semibold mb-2">Billeteras Electrónicas</h3>
            <p className="text-gray-600">PayPal, Skrill y más</p>
          </div>
        </div>
        <div className="text-center">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center space-x-2 hover:bg-gray-800 transition-colors">
            <HelpCircle className="w-5 h-5" />
            <span>Necesito Ayuda con mi Depósito</span>
          </button>
        </div>
      </div>
    </section>
  );
}