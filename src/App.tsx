import React from 'react';
import { ProvedorTema, usarTema } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PaymentBanner } from './components/PaymentBanner';
import { LashCatalog } from './components/LashCatalog';
import { BrowServices } from './components/BrowServices';
import { MaintenanceTable } from './components/MaintenanceTable';
import { About } from './components/About';
import { Feedbacks } from './components/Feedbacks';
import { Policies } from './components/Policies';
import { LocationSection } from './components/LocationSection';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

/**
 * Estrutura Principal da Landing Page
 */
const ConteudoLandingPage: React.FC = () => {
  const { tema } = usarTema();

  return (
    <div className={`min-h-screen fundo-principal texto-principal relative transition-colors duration-300 ${tema === 'claro' ? 'tema-claro' : 'tema-escuro'}`}>
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

        {/* Seção de Depoimentos e Avaliações de Clientes Reais */}
        <Feedbacks />

        {/* Políticas, Regras de Atendimento e Cuidados */}
        <Policies />

        {/* Endereço, Facilidade de Estacionamento e Mapa */}
        <LocationSection />

        {/* Perguntas e Respostas Frequentes */}
        <Faq />
      </main>

      {/* Rodapé Institucional */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ProvedorTema>
      <ConteudoLandingPage />
    </ProvedorTema>
  );
};

export default App;
