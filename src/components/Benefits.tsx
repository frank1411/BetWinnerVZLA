import React from 'react';
import { Gift, Shield, Clock, Trophy } from 'lucide-react';

const benefits = [
  {
    icon: Gift,
    title: 'Bono Exclusivo',
    description: 'Recibe un bono especial al registrarte con nuestro código'
  },
  {
    icon: Shield,
    title: 'Apuestas Seguras',
    description: 'Plataforma confiable y segura para tus apuestas'
  },
  {
    icon: Clock,
    title: 'Soporte 24/7',
    description: 'Asistencia personalizada en cualquier momento'
  },
  {
    icon: Trophy,
    title: 'Mejores Cuotas',
    description: 'Accede a las mejores cuotas del mercado'
  }
];

export default function Benefits() {
  return (
    <section className="py-16 bg-gray-100" id="register">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por qué Registrarte con Nosotros?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <benefit.icon className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}