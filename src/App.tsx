import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PaymentBanner } from './components/PaymentBanner';
import { LashCatalog } from './components/LashCatalog';
import { BrowServices } from './components/BrowServices';
import { MaintenanceTable } from './components/MaintenanceTable';
import { About } from './components/About';
import { Feedbacks } from './components/Feedbacks';
import { Policies } from './components/Policies';
import { Faq } from './components/Faq';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';

/**
 * Estrutura Principal da Landing Page — Warm Editorial Atelier
 * Alternância rítmica entre superfícies escuras (#0E0C0A / #171411) e claras (#F4EFEA).
 */
export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0E0C0A] text-[#F5F2EB] relative">
      {/* Textura sutil de grão editorial sobre o canvas */}
      <div className="textura-filme" aria-hidden="true" />

      {/* Barra de Navegação */}
      <Navbar />

      {/* Fluxo Principal Editorial */}
      <main id="main">
        <Hero />
        <PaymentBanner />
        <LashCatalog />
        <BrowServices />
        <MaintenanceTable />
        <About />
        <Feedbacks />
        <Policies />
        <Faq />
        <LocationSection />
      </main>

      {/* Rodapé Minimalista */}
      <Footer />
    </div>
  );
};

export default App;
