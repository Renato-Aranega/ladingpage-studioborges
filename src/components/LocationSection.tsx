import React from 'react';
import { MapPin, Navigation, Car, Clock, Phone, Sparkles } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { DADOS_STUDIO, obterLinkWhatsApp } from '../data/catalog';

/**
 * Seção de Localização e Informações de Acesso
 */
export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 sm:py-24 relative border-t borda-suave fundo-secundario transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full fundo-card border borda-destaque text-xs font-semibold text-[#DFB15B] shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LOCALIZAÇÃO PRIVILEGIADA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight texto-principal">
            Fácil Acesso em <span className="text-gold-gradient italic">Osasco</span>
          </h2>
          <p className="text-sm sm:text-base texto-secundario font-light">
            Nosso espaço foi escolhido para oferecer comodidade, tranquilidade e praticidade para sua rotina, com vaga e facilidade para estacionar seu carro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Coluna da Esquerda: Dados de Endereço e Facilidades (5 colunas) */}
          <div className="lg:col-span-5 fundo-superficie rounded-2xl p-6 sm:p-8 border borda-destaque shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Destaque do Endereço */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#7E22CE]/20 border borda-destaque flex items-center justify-center text-[#DFB15B] shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#DFB15B] font-semibold block">
                    Endereço Oficial
                  </span>
                  <p className="text-base font-bold texto-principal mt-1">
                    {DADOS_STUDIO.endereco}
                  </p>
                  <p className="text-xs texto-secundario mt-1 font-light">
                    Bairro Pestana • Osasco - SP
                  </p>
                </div>
              </div>

              {/* Facilidade para Estacionar */}
              <div className="flex items-start gap-4 p-4 rounded-xl fundo-elevado border borda-suave">
                <div className="w-10 h-10 rounded-lg fundo-card flex items-center justify-center text-[#DFB15B] shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold texto-principal">Fácil de Estacionar</p>
                  <p className="text-xs texto-secundario mt-0.5 font-light">
                    Rua calma e segura, com fácil estacionamento em frente e nas proximidades do estúdio.
                  </p>
                </div>
              </div>

              {/* Horário de Atendimento */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg fundo-elevado flex items-center justify-center text-[#DFB15B] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold texto-principal">Horário de Atendimento</p>
                  <p className="text-xs texto-secundario mt-0.5 font-light">{DADOS_STUDIO.horarioFuncionamento}</p>
                </div>
              </div>

              {/* Canais Sociais e WhatsApp */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={DADOS_STUDIO.urlInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl fundo-elevado hover:fundo-card border borda-suave text-xs texto-principal font-medium transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#DFB15B]" />
                  <span>@lashamandaborges</span>
                </a>

                <a
                  href={obterLinkWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl fundo-elevado hover:fundo-card border borda-suave text-xs texto-principal font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#25D366]" />
                  <span>{DADOS_STUDIO.telefone}</span>
                </a>
              </div>
            </div>

            {/* Botão para Rota no Google Maps */}
            <div className="pt-4 border-t borda-suave">
              <a
                href={DADOS_STUDIO.urlMapaBusca}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gold-gradient text-[#0F0814] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-all botao-magnetico"
              >
                <Navigation className="w-4 h-4" />
                <span>Traçar Rota no Google Maps</span>
              </a>
            </div>

          </div>

          {/* Coluna da Direita: Mapa Interativo do Google (7 colunas) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border borda-destaque shadow-xl relative min-h-[380px] fundo-superficie">
            <iframe
              title="Localização Studio Borges Amanda Borges em Osasco"
              src="https://maps.google.com/maps?q=Rua+Ulisses+Soares,+12+-+Pestana,+Osasco+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[400px] border-0 filter contrast-[1.1] opacity-90"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Card informativo flutuante sobre o mapa */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto fundo-superficie-translucido backdrop-blur-md p-4 rounded-xl border borda-destaque max-w-sm shadow-xl">
              <p className="text-xs font-serif font-bold texto-principal">Studio Borges • Amanda Borges</p>
              <p className="text-[11px] texto-secundario mt-1 font-light">Rua Ulisses Soares, 12 - Pestana, Osasco - SP</p>
              <p className="text-[10px] text-[#DFB15B] mt-1 font-semibold">Próximo a vias principais • Fácil de estacionar</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
