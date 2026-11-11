import React from 'react';
import { MapPin, Navigation, Car, Clock, Phone, Sparkles } from 'lucide-react';
import { InstagramIcon } from './icons/InstagramIcon';
import { DADOS_STUDIO, obterLinkWhatsApp } from '../data/catalog';

/**
 * Seção de Localização e Informações de Acesso
 * Informa o endereço em Osasco, facilidade de estacionamento e mapa integrado
 */
export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 relative bg-[#130A19] border-t border-[#DFB15B]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E1229] border border-[#DFB15B]/40 text-xs font-semibold text-[#DFB15B] shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LOCALIZAÇÃO PRIVILEGIADA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#FDFCFA] tracking-tight">
            Fácil Acesso em <span className="text-gold-gradient italic">Osasco</span>
          </h2>
          <p className="text-base text-[#D4C8DE] font-light">
            Nosso espaço foi escolhido para oferecer comodidade, tranquilidade e praticidade para sua rotina, com vaga e facilidade para estacionar seu carro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Coluna da Esquerda: Dados de Endereço e Facilidades (5 colunas) */}
          <div className="lg:col-span-5 bg-[#180E21] rounded-2xl p-6 sm:p-8 border border-[#DFB15B]/35 shadow-[0_0_35px_rgba(126,34,206,0.25)] flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Destaque do Endereço */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#7E22CE]/30 border border-[#DFB15B]/40 flex items-center justify-center text-[#DFB15B] shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#DFB15B] font-semibold block">
                    Endereço Oficial
                  </span>
                  <p className="text-base font-bold text-[#FDFCFA] mt-1">
                    {DADOS_STUDIO.endereco}
                  </p>
                  <p className="text-xs text-[#D4C8DE] mt-1 font-light">
                    Bairro Pestana • Osasco - SP
                  </p>
                </div>
              </div>

              {/* Facilidade para Estacionar */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#231530] border border-[#2E1B3D]">
                <div className="w-10 h-10 rounded-lg bg-[#2E1B3D] flex items-center justify-center text-[#DFB15B] shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#FDFCFA]">Fácil de Estacionar</p>
                  <p className="text-xs text-[#D4C8DE] mt-0.5 font-light">
                    Rua calma e segura, com fácil estacionamento em frente e nas proximidades do estúdio.
                  </p>
                </div>
              </div>

              {/* Horário de Atendimento */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#231530] flex items-center justify-center text-[#DFB15B] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#FDFCFA]">Horário de Atendimento</p>
                  <p className="text-xs text-[#D4C8DE] mt-0.5 font-light">{DADOS_STUDIO.horarioFuncionamento}</p>
                </div>
              </div>

              {/* Canais Sociais e WhatsApp */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={DADOS_STUDIO.urlInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#231530] hover:bg-[#2E1B3D] border border-[#DFB15B]/25 text-xs text-[#FDFCFA] font-medium transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#DFB15B]" />
                  <span>@lashamandaborges</span>
                </a>

                <a
                  href={obterLinkWhatsApp()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#231530] hover:bg-[#2E1B3D] border border-[#DFB15B]/25 text-xs text-[#FDFCFA] font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#25D366]" />
                  <span>{DADOS_STUDIO.telefone}</span>
                </a>
              </div>
            </div>

            {/* Botão para Rota no Google Maps */}
            <div className="pt-4 border-t border-[#2E1B3D]">
              <a
                href={DADOS_STUDIO.urlMapaBusca}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gold-gradient text-[#0F0814] font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-all hover:shadow-[0_0_20px_rgba(223,177,91,0.4)]"
              >
                <Navigation className="w-4 h-4" />
                <span>Traçar Rota no Google Maps</span>
              </a>
            </div>

          </div>

          {/* Coluna da Direita: Mapa Interativo do Google (7 colunas) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#DFB15B]/35 shadow-[0_0_35px_rgba(126,34,206,0.2)] relative min-h-[380px] bg-[#180E21]">
            <iframe
              title="Localização Studio Borges Amanda Borges em Osasco"
              src="https://maps.google.com/maps?q=Rua+Ulisses+Soares,+12+-+Pestana,+Osasco+-+SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[400px] border-0 filter grayscale-[0.8] contrast-[1.2] invert-[0.9] opacity-90"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Card informativo flutuante sobre o mapa */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto bg-[#0F0814]/90 backdrop-blur-md p-4 rounded-xl border border-[#DFB15B]/35 max-w-sm shadow-xl">
              <p className="text-xs font-serif font-bold text-[#FDFCFA]">Studio Borges • Amanda Borges</p>
              <p className="text-[11px] text-[#D4C8DE] mt-1 font-light">Rua Ulisses Soares, 12 - Pestana, Osasco - SP</p>
              <p className="text-[10px] text-[#DFB15B] mt-1 font-semibold">Próximo a vias principais • Fácil de estacionar</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
