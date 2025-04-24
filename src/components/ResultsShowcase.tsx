
import React from 'react';
import { Check } from 'lucide-react';

const ResultsShowcase = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00BFFF] mb-4">
            Veja o que você pode criar com IA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Da ideia ao produto final, usando apenas prompts e ferramentas no-code potencializadas por IA
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Example 1: Landing Page */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 transform transition-all hover:-translate-y-2">
            <div className="aspect-video relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Landing page example" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 relative">
              <h3 className="text-2xl font-bold text-white mb-3">
                Landing Pages Profissionais
              </h3>
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0 mt-1" />
                  <p className="text-gray-300">Crie landing pages completas com apenas alguns comandos de IA</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0 mt-1" />
                  <p className="text-gray-300">Design moderno e responsivo para desktop e mobile</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0 mt-1" />
                  <p className="text-gray-300">Integre com ferramentas de pagamento, email marketing e analytics</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Example 2: Web Application */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700 transform transition-all hover:-translate-y-2">
            <div className="aspect-video relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                alt="Web application example" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 relative">
              <h3 className="text-2xl font-bold text-white mb-3">
                Aplicativos Web Funcionais
              </h3>
              <div className="flex flex-col gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0 mt-1" />
                  <p className="text-gray-300">Desenvolva aplicativos web com login, cadastro e painel de usuário</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0 mt-1" />
                  <p className="text-gray-300">Crie MVPs para validar suas ideias de negócio rapidamente</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-green-500 shrink-0 mt-1" />
                  <p className="text-gray-300">Integre funcionalidades como pagamentos, notificações e muito mais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Video Demonstration */}
        <div className="mt-16 max-w-3xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
          <div className="aspect-video bg-gray-900 flex items-center justify-center">
            <div className="text-center p-8">
              <p className="text-xl text-gray-300 mb-4">Vídeo demonstração de criação de projeto com IA</p>
              <div className="w-16 h-16 rounded-full bg-[#00BFFF] flex items-center justify-center mx-auto cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;
