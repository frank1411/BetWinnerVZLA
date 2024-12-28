import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Deposits from './components/Deposits';
import TelegramCTA from './components/TelegramCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Deposits />
        <TelegramCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;