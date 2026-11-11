import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LashCatalog } from './components/LashCatalog';
import { BrowServices } from './components/BrowServices';
import { MaintenanceTable } from './components/MaintenanceTable';
import { About } from './components/About';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';

/**
 * Estrutura Principal da Landing Page — Studio Borges
 * Layout enxuto, claro, leve em tons roxo claro (lavanda) e dourado.
 */
export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8FC] text-[#261835] relative">
      <Navbar />

      <main id="main">
        <Hero />
        <LashCatalog />
        <BrowServices />
        <MaintenanceTable />
        <About />
        <LocationSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
