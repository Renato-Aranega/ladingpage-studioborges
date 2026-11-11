import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PaymentBanner } from './components/PaymentBanner';
import { LashCatalog } from './components/LashCatalog';
import { BrowServices } from './components/BrowServices';
import { MaintenanceTable } from './components/MaintenanceTable';
import { About } from './components/About';
import { Policies } from './components/Policies';
import { LocationSection } from './components/LocationSection';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

/**
 * Componente Raiz da Aplicação
 * Reúne todas as seções estruturais da Landing Page do Studio Borges
 */
export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0F0814] text-[#FDFCFA] font-sans relative selection:bg-[#A855F7]/30 selection:text-[#FFF1D0]">
      {/* Barra de Navegação Superior */}
      <Navbar />

      {/* Conteúdo Principal com link de acessibilidade (skip link) */}
      <main id="main">
        {/* Seção Principal de Entrada */}
        <Hero />

        {/* Faixa com Desconto Pix e Formas de Pagamento */}
        <PaymentBanner />

        {/* Catálogo Oficial de Procedimentos de Cílios */}
        <LashCatalog />

        {/* Serviços de Harmonização de Sobrancelhas */}
        <BrowServices />

        {/* Tabela Interativa e Simulador de Manutenções */}
        <MaintenanceTable />

        {/* História, Conforto e Biossegurança da Amanda Borges */}
        <About />

        {/* Políticas, Regras de Atendimento e Cuidados */}
        <Policies />

        {/* Endereço, Facilidade de Estacionamento e Mapa */}
        <LocationSection />

        {/* Perguntas e Respostas Frequentes */}
        <Faq />
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Botões de Ação para WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
