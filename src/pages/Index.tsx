import { ArrowRight, Check, Star, MessageSquare, Users, RocketIcon, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseContent } from "@/components/CourseContent";
import { getUrlWithUtm } from "@/utils/urlUtils";
import PricingCard from "@/components/PricingCard";

export default function Index() {
  const handleCtaClick = () => {
    const url = getUrlWithUtm("https://go.perfectpay.com.br/PPU38CPMH30");
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#00BFFF]/10 to-white pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Crie Sites, Apps, Páginas de Vendas e até SaaS com Inteligência Artificial
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Mesmo que você nunca tenha programado na vida. Usando apenas ferramentas de IA gratuitas.
            </p>
            <p className="text-xl text-gray-700 font-medium mb-8">
              👉 Você descreve. A IA gratuita constrói.
            </p>
            <Button 
              size="lg" 
              className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white px-8 py-6 rounded-full text-lg"
              onClick={handleCtaClick}
            >
              Quero aprender agora <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Você já quis ter seu próprio site, aplicativo ou plataforma…
              <br />Mas travou por não saber por onde começar?
            </h2>
            <div className="space-y-6 text-left">
              {[
                "Já gastou dinheiro com agências e não teve resultado",
                "Tentou aprender programação, mas ficou perdido",
                "Tem uma ideia incrível, mas não tem conhecimento técnico",
                "Quer vender mais no digital, mas não tem presença online"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="rounded-full bg-[#00BFFF]/10 p-2">
                    <Check className="h-6 w-6 text-[#00BFFF]" />
                  </div>
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 text-xl text-gray-700 font-medium">
              Você não está sozinho — e a solução agora está nas suas mãos.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                O CodinAI é um curso prático, direto ao ponto e feito pra você
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <RocketIcon className="h-8 w-8 text-[#00BFFF]" />,
                  title: "Landing Pages profissionais",
                  description: "Crie páginas de alta conversão em minutos"
                },
                {
                  icon: <MessageSquare className="h-8 w-8 text-[#00BFFF]" />,
                  title: "Websites completos",
                  description: "Desenvolva sites com várias seções"
                },
                {
                  icon: <Star className="h-8 w-8 text-[#00BFFF]" />,
                  title: "Aplicativos mobile",
                  description: "Crie apps funcionais sem código"
                },
                {
                  icon: <Users className="h-8 w-8 text-[#00BFFF]" />,
                  title: "SaaS que funcionam",
                  description: "Monte seu próprio software como serviço"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-20 bg-gradient-to-b from-[#00BFFF]/5 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            O Conteúdo do Curso CodinAI
          </h2>
          <CourseContent />
          <p className="text-center mt-8 text-gray-600">
            Todas as ferramentas utilizadas possuem planos gratuitos, perfeitos para quem está começando sem investir em ferramentas caras.
          </p>
        </div>
      </section>

      {/* Pricing Section with Content */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Plano de Acesso
              </h2>
              <p className="text-lg text-gray-600">
                Comece agora mesmo e desbloqueie todo o potencial da IA
              </p>
            </div>
            <div className="relative z-10">
              <PricingCard />
            </div>
            <div className="bg-white text-gray-800 rounded-xl p-8 mt-[-2rem] relative z-0 shadow-lg border border-gray-100">
              <ul className="space-y-4 text-left mb-8">
                {[
                  "Acesso completo ao curso CodinAI",
                  "6 módulos práticos com mais de 30 aulas",
                  "Atualizações vitalícias com novas ferramentas",
                  "Comunidade exclusiva no Discord",
                  "Suporte personalizado",
                  "Certificado de conclusão",
                  "Bônus: Templates prontos para usar",
                  "Bônus: Biblioteca de prompts validados",
                  "Bônus: Guia de otimização de tráfego"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg">
                    <Circle className="h-4 w-4 text-[#00BFFF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-center mt-8 text-gray-600">
              🔒 Garantia incondicional de 7 dias
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Get Section with Pricing */}
      <section className="py-20 bg-[#00BFFF]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              O Que Você Vai Receber
            </h2>
            <div className="bg-white text-gray-800 rounded-xl p-8 mb-12">
              <ul className="space-y-4 text-left mb-8">
                {[
                  "✅ Acesso completo ao curso CodinAI",
                  "✅ 6 módulos práticos com mais de 30 aulas",
                  "✅ Atualizações vitalícias com novas ferramentas",
                  "✅ Comunidade exclusiva no Discord",
                  "✅ Suporte personalizado",
                  "✅ Certificado de conclusão",
                  "✅ Bônus: Templates prontos para usar",
                  "✅ Bônus: Biblioteca de prompts validados",
                  "✅ Bônus: Guia de otimização de tráfego"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <p className="text-2xl mb-2">De <span className="line-through">R$497</span> por apenas</p>
                <p className="text-4xl font-bold text-[#00BFFF] mb-6">R$197</p>
                <p className="text-sm text-gray-600 mb-6">Oferta por tempo limitado</p>
                <Button 
                  size="lg" 
                  className="bg-[#00BFFF] hover:bg-[#00BFFF]/90 text-white px-8 py-6 rounded-full text-lg w-full md:w-auto"
                  onClick={handleCtaClick}
                >
                  Quero começar agora <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
            <p className="mt-6 text-sm opacity-75">
              🔒 Garantia incondicional de 7 dias
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 CodinAI. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
